export interface Validator {
  name: string;
  validator: any;
  message: string;
}
export interface FieldConfig {
  label?: string;
  name: string;
  placeholder?: string;
  inputType?: string;
  options?: string[];
  collections?: Collection[];
  type: string;
  value?: any;
  validations?: Validator[];
}


export interface Collection {
  key: string;
  value: any;
}
