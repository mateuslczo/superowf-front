import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly URL_API = `${environment.API}`;

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {

  }

  // Tasks endpoint
  addTask(taskModel: any) {

    return this.http.post(this.URL_API + '/tasks', taskModel, this.httpOptions);

  }

  updateTaskById(taskModel: any) {

    return this.http.put(this.URL_API + '/tasks', taskModel, this.httpOptions);

  }

  allTask() {

    return this.http.get(this.URL_API + '/tasks');

  }

  taskById(id: number) {

    return this.http.get(this.URL_API + '/tasks/' + id);

  }

  removeTaskById(id: number) {

    return this.http.delete(this.URL_API + '/tasks/' + id);

  }



}

