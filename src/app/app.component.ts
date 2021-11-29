import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClientService } from './core/services/http-client.service';
import { AddListComponent } from './shared/add-list/add-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task-management';
  lists:any;
  list_id: any;
  constructor(private _service:HttpClientService, private dialog: MatDialog){}

  ngOnInit(){
    this.getList();
  }

  addList(){
    this.dialog.open(AddListComponent, {
      width: '350px',disableClose: true, data:{name:'Add List', id:null}
    }).afterClosed().subscribe(response => {
      if (response !== false) {
        this.getList();
      }
    });
  }

  getList(){
    this._service.getDb().subscribe((res:any)=>{
      this.lists = res.db;
      this.list_id = {};
      for(let i of res.db){
        this.list_id[i.id] = res[i.id];
      }
      console.log(this.list_id);
    })
  }
}
