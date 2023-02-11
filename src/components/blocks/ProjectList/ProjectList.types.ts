
export interface IProject {
    key: number;
    title: string;
    fullname?: string;
}

export interface ProjectListProps {
  list: IProject[];
  current: number;
  change: React.Dispatch<React.SetStateAction<number>>;
}
