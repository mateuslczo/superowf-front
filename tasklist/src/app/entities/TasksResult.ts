
export class TasksResult {

  constructor() {

    this.Id = null;

    this.Title = '';

    this.TitleDescription = '';

    this.Status = null;

    this.CreateDate = null;

    this.EditDate = null;

    this.ConclusionDate = null;

  }

  Id: number;

  Title: string;

  TitleDescription: string;

  Status = null;

  StatusDescription: string = this.SetStatusById(this.Status);

  CreateDate?: Date;

  EditDate?: Date;

  ConclusionDate?: Date;


  SetStatusById(idStatus: number): string {

    let statusTaskDesc = 'Status indefinido';

    switch (idStatus) {
      case 1:
        statusTaskDesc = 'Aberto';
        break;

      case 2:
        statusTaskDesc = 'Em andamento';
        break;

      case 3:
        statusTaskDesc = 'Finalizada';
        break;

      case 4:
        statusTaskDesc = 'Cancelada';
        break;

      case 5:
        statusTaskDesc = 'Suspensa';
        break;

    }

    return statusTaskDesc;

  }


}
