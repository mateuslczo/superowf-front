import { TaskService } from './../services/tasks/task.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Tasks } from '../entities/Tasks';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public tasks: Tasks = new Tasks();
  public Status: number;
  public taskEdit: any;

  sucesso: any;
  erro: any;

  constructor(private tskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: any) => {
      const id = params['id'];
      this.getTaskById(id);
    });

  }

  getTaskById(id: number): any {
    this.tskService.taskById(id).subscribe(
      data => this.taskEdit = data,
    );
    this.tasks = this.taskEdit;
  }


  Edit(frm: FormGroup): any {

    this.taskEdit.Status = this.Status;

    this.tskService.updateTaskById(this.taskEdit).subscribe(
      data => this.sucesso = data,
      error => this.erro = error
    );

    frm.reset();

  }

  callTasks(): void {
    this.router.navigate(['list']);
  }

}
