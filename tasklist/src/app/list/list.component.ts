import { Component, OnInit } from '@angular/core';
import { Tasks } from '../entities/Tasks';
import { TaskService } from '../services/tasks/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public tasks: any;

  constructor(private tskService: TaskService) { }

  ngOnInit(): void {

    this.getAllTask();


  }


  getAllTask(): any {
    this.tskService.allTask().subscribe(
      data => this.tasks = data,
    );

  }



}
