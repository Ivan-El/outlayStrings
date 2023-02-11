import { CreateRequest } from '../../../models/CreateRequest';

export interface FormInputProps {
    type: 'text' | 'number';
    name: string;
    editing: boolean;
    rowData: CreateRequest;
    dataKey: keyof CreateRequest;
    setRowData: React.Dispatch<React.SetStateAction<CreateRequest>>;
}