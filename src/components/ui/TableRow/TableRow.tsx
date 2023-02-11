import React, { FC, useState } from 'react';
import styles from './TableRow.module.scss';
import * as UI from '../../ui';
import { outlayAPI } from '../../../services/OtlayService';
import { TableRowProps } from './TableRow.types';
import { CreateRequest } from '../../../models/CreateRequest';
import { checkDepth } from '../../../helpers';

export const TableRow: FC<TableRowProps> = ({
  level = 1,
  equipmentCosts = 0,
  estimatedProfit = 0,
  id = 0,
  name = '',
  overheads = 0,
  salary = 0,
  isEditingMode = true,
  parentId = null,
  child = [],
  previousChild = null,
}) => {
  const [createRow] = outlayAPI.useCreateRowMutation();
  const [deleteRow] = outlayAPI.useDeleteRowMutation();
  const [updateRow] = outlayAPI.useUpdateRowMutation();

  const [editing, setEditing] = useState<boolean>(isEditingMode);
  const [rowData, setRowData] = useState<CreateRequest>({
    rowName: name,
    salary,
    equipmentCosts,
    estimatedProfit,
    overheads,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    supportCosts: 0,
    mimExploitation: 0,
    parentId: parentId,
  });

  function doubleClickHandler() {
    setEditing(true);
  }

  function enterKeyDown(evt: React.KeyboardEvent<HTMLTableRowElement>) {
    if (evt.key !== 'Enter') return;

    id
      ? updateRow({
          id,
          body: {
            equipmentCosts: rowData.equipmentCosts,
            estimatedProfit: rowData.equipmentCosts,
            machineOperatorSalary: rowData.machineOperatorSalary,
            mainCosts: rowData.mainCosts,
            materials: rowData.materials,
            mimExploitation: rowData.mimExploitation,
            overheads: rowData.overheads,
            rowName: rowData.rowName,
            salary: rowData.salary,
            supportCosts: rowData.supportCosts,
          },
        })
      : createRow(rowData);

    setEditing(false);
  }

  return (
    <>
      <tr
        className={styles.row}
        onDoubleClick={doubleClickHandler}
        onKeyDown={enterKeyDown}
      >
        <td className={styles.data}>
          <UI.LevelPanel
            level={level}
            id={id}
            create={createRow}
            deleteRow={deleteRow}
            depth={checkDepth(previousChild)}
          />
        </td>
        <td className={styles.data}>
          <UI.FormInput
            type={'text'}
            name={'name'}
            dataKey={'rowName'}
            editing={editing}
            rowData={rowData}
            setRowData={setRowData}
          />
        </td>
        <td className={styles.data}>
          <UI.FormInput
            type={'number'}
            name={'salary'}
            dataKey={'salary'}
            editing={editing}
            rowData={rowData}
            setRowData={setRowData}
          />
        </td>
        <td className={styles.data}>
          <UI.FormInput
            type={'number'}
            name={'equipment'}
            dataKey={'equipmentCosts'}
            editing={editing}
            rowData={rowData}
            setRowData={setRowData}
          />
        </td>
        <td className={styles.data}>
          <UI.FormInput
            type={'number'}
            name={'overheads'}
            dataKey={'overheads'}
            editing={editing}
            rowData={rowData}
            setRowData={setRowData}
          />
        </td>
        <td className={styles.data}>
          <UI.FormInput
            type={'number'}
            name={'profit'}
            dataKey={'estimatedProfit'}
            editing={editing}
            rowData={rowData}
            setRowData={setRowData}
          />
        </td>
      </tr>
      {child.map((child, index, arr) => (
        <TableRow
          key={child.id}
          level={level + 1}
          id={child.id}
          name={child.rowName}
          overheads={child.overheads}
          estimatedProfit={child.overheads}
          equipmentCosts={child.equipmentCosts}
          salary={child.salary}
          isEditingMode={false}
          child={child?.child}
          previousChild={index > 0 ? arr[index - 1] : null}
        />
      ))}
    </>
  );
};
