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
    this.statusSelect = this.OptionsStatusSelect();

  }

  Create(): any {

    this.tskService.addTask(this.form.value).subscribe(
      data => this.sucesso = data,
      error => this.erro = error
    );

    this.form.reset();

  }

  PrepareForm() {

    this.form = this.formBuilder.group(
      {
        title: [null, Validators.required],
        description: [null, Validators.required],
        status: [1, Validators.required]
      }
    )

  }


  callTasks(): void {
    this.router.navigate(['list']);
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


}

