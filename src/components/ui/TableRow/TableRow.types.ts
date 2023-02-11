import { Row } from "../../../models/EntitiesTree";

export interface TableRowProps {
    level?: number;
    id?: number;
    parentId?: number | null;
    name?: string;
    overheads?: number;
    estimatedProfit?: number;
    equipmentCosts?: number;
    salary?: number;
    isEditingMode: boolean;
    child?: Row[];
    
    previousChild?: Row | null;
  }