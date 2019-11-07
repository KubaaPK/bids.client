export type NewParameter = {
  name: string;
  type: 'integer' | 'single-string' | 'dictionary' | 'float' | 'float-range';
  unit: string;
  required: boolean;
  dictionary?: any[];
  restrictions: {
    min?: string;
    max?: string;
    precision?: number;
    minLength?: number;
    maxLength?: number;
    multipleChoices?: boolean;
  };
};
