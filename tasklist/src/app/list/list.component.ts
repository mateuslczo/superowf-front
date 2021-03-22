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
  over: boolean;
  out: boolean;
  erro: any;

  constructor(private tskService: TaskService, private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit(): any {

    this.getAllTask();

  }



  getAllTask(): any {

    this.tskService.allTask().subscribe(data => { this.tasksResult = this.tskService.formatResult(data)},
                                        error => { this.erro = error}
    );

    // let list = this.tskService.allTask()

    return this.tasksResult;

  }

  goEdit(Id: any): void {

    this.router.navigate(['edit', Id]);

  }

  goAdd(): void {

    this.router.navigate(['tasks']);

  }

  goRemove(Id: number): void {

    this.router.navigate(['remove', Id]);

    this.tskService.removeTaskById(Id).subscribe(
      data => this.tasks = data,
    );


  }



  notEmphasisLine(idd: any): void {

    document.getElementById(idd).className = 'lineNormal';

  }

  emphasisLine(idd: any): void {

    document.getElementById(idd).className = 'lineEmphasis';

  }


}
