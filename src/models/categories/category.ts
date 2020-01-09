export type Category = {
  id: string;
  leaf: boolean;
  name: string;
  children: {
    id: string;
    leaf: boolean;
    name: string;
    children: {
      id: string;
      leaf: boolean;
      name: string;
    }[];
  }[];
};
