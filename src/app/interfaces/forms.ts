import { formEnum } from "../enum/form.enum";

export interface formType{
  title: string;
  description: string;
  nameOfClient?: string;
  id?: number;
  type: formEnum;
}