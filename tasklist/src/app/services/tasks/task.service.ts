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

  public  tskResult: Array<TasksResult>;

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

    return this.http.get(this.URL_API + '/tasks/' + id).pipe(take(1));

  }

  removeTaskById(id: number): Observable<any> {

    return this.http.delete(this.URL_API + '/tasks/' + id);

  }

}

