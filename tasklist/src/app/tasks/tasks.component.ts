import { Tasks } from './../entities/Tasks';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public tasks: Tasks = new Tasks ();

  constructor() { }

  ngOnInit(): void {


  }

}
