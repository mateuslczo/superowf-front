import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Authenticate } from 'src/app/entities/authenticate';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL_API = `${environment.API}`;

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {

  }


  // tslint:disable-next-line: typedef
  doAuth(authModel: any): Observable<any> {

    return this.http.post<any>(this.URL_API + '/authentication', authModel, this.httpOptions);

  }
}
