import { TasksResult } from './../entities/TasksResult';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { Tasks } from '../entities/Tasks';
import { TaskService } from '../services/tasks/task.service';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public tasks: any;
  public tasksResult: Array<TasksResult>;

  constructor(private tskService: TaskService, private router: Router, private route: ActivatedRoute) {

    this.getAllTask();

  }


  ngOnInit(): any {


  }



  getAllTask(): any {

    return this.tskService.allTask().subscribe(data => this.tasksResult = this.formatResult(data));;

  }

  goEdit(Id: any): void {

    this.router.navigate(['edit', Id]);

  }

  goRemove(Id: number): void {

    this.router.navigate(['remove', Id]);

    this.tskService.removeTaskById(Id).subscribe(
      data => this.tasks = data,
    );


  }

  formatResult(resultList: TasksResult[]): TasksResult[] {

    const tskl = new Array<TasksResult>();

    for (const result of resultList) {

      const tsk = new TasksResult();

      tsk.Title = result.Title;
      tsk.TitleDescription = result.TitleDescription;
      tsk.Status = result.Status;
      tsk.StatusDescription = tsk.SetStatusById(result.Status);
      tsk.ConclusionDate = result.ConclusionDate;
      tsk.CreateDate = result.CreateDate;
      tsk.EditDate = result.EditDate;

      tskl.push(tsk);

    }

    return tskl;

  }





}
