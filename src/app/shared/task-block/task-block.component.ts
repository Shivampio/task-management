import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { List } from 'src/app/core/models/list.model';
import { HttpClientService } from 'src/app/core/services/http-client.service';
import { AddListComponent } from '../add-list/add-list.component';

@Component({
  selector: 'app-task-block',
  templateUrl: './task-block.component.html',
  styleUrls: ['./task-block.component.css'],
})
export class TaskBlockComponent implements OnInit {
  @Input() name: string;
  @Input() list: any;
  @Input() id:number;
  @Input() connectedTo: any;

  constructor(private _service: HttpClientService,private dialog: MatDialog) {}

  ngOnInit(): void {}

  trash(list: any[], index) {
    list.splice(index, 1);
  }

  checkItem(item) {
    console.log(item);
  }

  addTask(){
    this.dialog.open(AddListComponent, {
      width: '350px',disableClose: true, data:{name:'Add Task', id:this.id}
    }).afterClosed().subscribe(response => {
      if (response !== false) {

      }
    });
  }

  drop(event: CdkDragDrop<List[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
