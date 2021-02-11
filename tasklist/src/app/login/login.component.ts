import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from '../services/auth/local-storage.service'
import { Authenticate } from '../entities/authenticate';
import { AuthService } from './../services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  validAuthentication: boolean;
  public auth: Authenticate = new Authenticate();
  authorization: any;

  mensagem = '';

  constructor(private authService: AuthService, private router: Router, private storage: LocalStorageService) { }

  ngOnInit(): void {

    this.authorization = null;
    this.mensagem = '';


  }


  doLogin(): void {

    this.authService.doAuth(this.auth).subscribe(data => { this.authorization = data; });  ///CHAMANDO DUAS VEZES NUMA CLICADA SÓ

    if (this.authorization !== null) {

      if (this.authorization.authenticated) {

        this.storage.addItemStorage('token', this.authorization.accessToken);
        this.mensagem = 'Logado';
        this.callTasks();

      }

    } else {

      this.mensagem = 'Não autorizado';

    }
  }

  callTasks(): void {
    this.router.navigate(['tasks']);
  }

}
