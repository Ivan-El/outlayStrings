export interface TabLinkType {
  key: number;
  title: string;
  link: string;
}

export interface TabLinkProps {
  type?: string;
  title: string;
  click?: (index: number) => void;
}
