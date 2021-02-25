import { TaskService } from './../services/tasks/task.service';
import { Tasks } from './../entities/Tasks';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks: Tasks = new Tasks();
  statusSelect: any[];
  form: FormGroup;
  sucesso: any;
  erro: any;

  constructor(private tskService: TaskService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.PrepareForm();
    this.statusSelect = this.tasks.OptionsStatusSelect();

  }

  Create(): any {

    this.tskService.addTask(this.form.value).subscribe(
      data => this.sucesso = data,
      error => this.erro = error
    );

    this.form.reset();

  }

  PrepareForm(): void {

    this.form = this.formBuilder.group(
      {
        title: [null, Validators.required],
        description: [null, Validators.required],
        status: [1, Validators.required]
      }
    );

  }


  callTasks(): void {
    this.router.navigate(['list']);
  }


}

