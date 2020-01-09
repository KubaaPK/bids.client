export type NewCategory = {
  name: string;
  parent?: {
    id: string;
    name: string;
  };
};
