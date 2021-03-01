import { TaskService } from './../services/tasks/task.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Tasks } from '../entities/Tasks';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { async } from 'rxjs/internal/scheduler/async';
import { TasksResult } from '../entities/TasksResult';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public tasks: TasksResult = new TasksResult();
  public Status: number;
  public taskEdit: any;

  statusList: any[];

  tasksResult: Array<TasksResult>;
  frmEdit: FormGroup;
  statusSelect: string;
  sucesso: any;
  erro: any;

  constructor(private tskService: TaskService, private router: Router
    , private route: ActivatedRoute, private formBuilder: FormBuilder) {

    this.prepareEditForm();
    this.statusList = this.tskService.OptionsStatusSelect();

  }

  ngOnInit(): void {

  }


  prepareEditForm(): void {

    this.route.params.subscribe(
      (params: any) => {

        const id = params.id; let erro = "";

        this.tskService.taskById(id).subscribe(
          data => { this.taskEdit = data }
          , error => { erro = error }
          , () => {

            this.tasksResult = this.tskService.formatResult(this.taskEdit);

            this.frmEdit = this.formBuilder.group({

              id: this.tasksResult !== undefined ? this.tasksResult[0].Id : 0,
              title: this.tasksResult !== undefined ? this.tasksResult[0].Title : "",
              description: this.tasksResult !== undefined ? this.tasksResult[0].TitleDescription : "",
              status: this.tasksResult !== undefined ? this.tasksResult[0].StatusDescription : "à definir",

            });

            this.statusSelect = this.tasksResult[0].StatusDescription;


          });
      });

    this.frmEdit = this.formBuilder.group({

      id: this.tasksResult !== undefined ? this.tasksResult[0].Id : 0,
      title: this.tasksResult !== undefined ? this.tasksResult[0].Title : "",
      description: this.tasksResult !== undefined ? this.tasksResult[0].TitleDescription : "",
      status: this.tasksResult !== undefined ? this.tasksResult[0].StatusDescription : "à definir",

    });

  }


  /// Salva alterações
  Edit(): any {

    this.tskService.updateTaskById(this.frmEdit.value).subscribe(
      data => this.sucesso = data,
      error => this.erro = error
    );


    this.frmEdit.reset();

  }

  callTasks(): void {
    this.router.navigate(['list']);
  }

}
