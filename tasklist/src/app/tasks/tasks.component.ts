import { TaskService } from './../services/tasks/task.service';
import { Tasks } from './../entities/Tasks';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks: Tasks = new Tasks();
  sucesso: any;
  erro: any;
  public Status: number;

  constructor(private tskService: TaskService, private router: Router) { }

  ngOnInit(): void {


  }

  Create(frm: FormGroup): any {

    this.tasks.Status = this.Status;

    this.tskService.addTask(this.tasks).subscribe(
      data => this.sucesso = data,
      error => this.erro = error
    );

    frm.reset();

  }



  callTasks(): void {
    this.router.navigate(['list']);
  }


}
