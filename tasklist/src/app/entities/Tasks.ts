import { EnTypeStatus } from "./enums/EnTypeStatus.enum";

export class Tasks {

  Title:string;

  Status: EnTypeStatus;

  Description:string;

  CreateDate?:Date;

  EditDate?:Date;

  ConclusionDate?:Date;
}


