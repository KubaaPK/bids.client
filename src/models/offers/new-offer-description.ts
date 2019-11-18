export type OfferDescription = {
  sections: [
    {
      items: Item[];
    }
  ];
};

type Item = {
  type: 'TEXT' | 'IMAGE';
  content?: string;
  url?: string;
};
