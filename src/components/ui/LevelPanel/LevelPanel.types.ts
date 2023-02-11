import { CreateRequest } from '../../../models/CreateRequest';
import { DeleteRequest } from '../../../models/DeleteRequest';

export interface LevelPanelProps {
  create: (row: CreateRequest ) => void;  
  deleteRow: (row: DeleteRequest) => void;
  id: number;
  level: number;
  depth: string;
}
