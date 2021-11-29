import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpClientService } from 'src/app/core/services/http-client.service';
 

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html'
})
export class AddListComponent implements OnInit {

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddListComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private _httpClient: HttpClientService, private toastr:ToastrService) { }

  form: FormGroup;
  taskForm:FormGroup;
  priorityList=['High', 'Medium', 'Low']
  ngOnInit(): void {
    console.log(this.data)
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      list_name: ['', Validators.required],
    })

    this.taskForm = this.fb.group({
      title:['',Validators.required],
      priority:['',Validators.required],
      updateTime:['',Validators.required]
    })
  }

  action() {
    if(this.data.name == 'Add List'){
    this._httpClient.createNewList(this.form.value).subscribe((res:any)=>{
      const data = {[res.id] : []}
      this._httpClient.createListData(data).subscribe(res=>{
        console.log(res)
      })
      this.toastr.success('New List Added Successfully!!');
    })
  } else if(this.data.name == 'Add Task'){
    this._httpClient.createNewTask(this.taskForm.value, this.data.id).subscribe(res=>{
      this.toastr.success('New Task Added Successfully!!');
    })
  }
    this.dialogRef.close('Successfully');
  }
}


