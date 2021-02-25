import { EnTypeStatus } from './enums/EnTypeStatus.enum';

export class Tasks {

  Title: string;

  Status: number;// EnTypeStatus;

  Description: string;

  CreateDate?: Date;

  EditDate?: Date;

  ConclusionDate?: Date;


  OptionsStatusSelect(): any[] {

    var statusList = [
      { Id: 1, Status: "Aberto" },
      { Id: 2, Status: "Em andamento" },
      { Id: 3, Status: "Finalizada" },
      { Id: 4, Status: "Cancelada" },
      { Id: 5, Status: "Suspensa" }
    ]

    return statusList;

  }

  SetStatusById(idStatus: number): string {

    let statusTaskDesc = "Status indefinido";

    switch (idStatus) {
      case 1:
        statusTaskDesc = "Aberto";
        break;

      case 2:
        statusTaskDesc = "Em andamento";

      case 3:
        statusTaskDesc = "Finalizada";
        break;

      case 4:
        statusTaskDesc = "Cancelada";
        break;

      case 5:
        statusTaskDesc = "Suspensa";
        break;

    }

    return statusTaskDesc;

  }

}


