import { TasksResult } from './../../entities/TasksResult';
import { Tasks } from './../../entities/Tasks';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../auth/local-storage.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly URL_API = `${environment.API}`;
  private token: string;

  public tskResult: Array<TasksResult>;

  private httpOptions: any;

  constructor(private http: HttpClient, private storage: LocalStorageService) {

    this.mountHttpOptions();

  }


  mountHttpOptions(): any {

    if (this.storage !== null) {
      this.token = this.storage.getItemStorage('token');
    }

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    };
  }

  // Tasks endpoint
  addTask(taskModel: any): Observable<any> {

    return this.http.post(this.URL_API + '/tasks', taskModel, this.httpOptions);

  }

  updateTaskById(taskModel: any): Observable<any> {

    return this.http.put(this.URL_API + '/tasks', taskModel, this.httpOptions);

  }

  allTask(): Observable<TasksResult[]> {

    const taskList = this.http.get<TasksResult[]>(this.URL_API + '/tasks');

    return taskList;

  }

  taskById(id: number): Observable<any> {

    const taskEdit = this.http.get<TasksResult>(this.URL_API + '/tasks/' + id);

    return taskEdit

  }

  removeTaskById(id: number): Observable<any> {

    return this.http.delete(this.URL_API + '/tasks/' + id);

  }

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


  formatResult(resultList: TasksResult[]): TasksResult[] {

    const tskl = new Array<TasksResult>();

    if (resultList === undefined)
      return null;

    if (resultList.keys !== undefined) {

      for (const result of resultList) {

        const tsk = new TasksResult();

        tsk.Id = result.Id;
        tsk.Title = result.Title;
        tsk.TitleDescription = result.TitleDescription;
        tsk.Status = result.Status;
        tsk.StatusDescription = tsk.SetStatusById(result.Status);
        tsk.ConclusionDate = result.ConclusionDate;
        tsk.CreateDate = result.CreateDate;
        tsk.EditDate = result.EditDate;

        tskl.push(tsk);

      }
    } else {

      const tsk = new TasksResult;

      let stsk = [  resultList ];

        tsk.Id = stsk[0]['Id'];
        tsk.Title = stsk[0]['Title'];
        tsk.TitleDescription = stsk[0]['Description'];
        tsk.Status = stsk[0]['Status'];
        tsk.StatusDescription = tsk.SetStatusById(stsk[0]['Status']);
        tsk.ConclusionDate = stsk[0]['ConclusionDate'];
        tsk.CreateDate = stsk[0]['CreateDate'];
        tsk.EditDate = stsk[0]['EditDate'];

        tskl.push(tsk);

    }

    return tskl;

  }


}

