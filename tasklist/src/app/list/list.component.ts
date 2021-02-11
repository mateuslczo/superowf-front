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

  constructor(private tskService: TaskService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.getAllTask();


  }


  getAllTask(): any {
    this.tskService.allTask().subscribe(
      data => this.tasks = data,
    );

  }

  goEdit(Id): void {

    this.router.navigate(['edit', Id]);

  }

  goRemove(Id): void {

    this.router.navigate(['remove', Id]);

    this.tskService.removeTaskById(Id).subscribe(
      data => this.tasks = data,
    );


  }




}
