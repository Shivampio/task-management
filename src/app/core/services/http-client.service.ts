import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  url:string = 'http://localhost:3000';
  urlList:string = 'http://localhost:3004';

  constructor(private http:HttpClient) { }

  getDb(){
    return this.http.get(`${this.url}/db`);
  }

  createNewList(data){
    return this.http.post(`${this.url}/db`, data)
  }

  createNewTask(data, id){
    return this.http.post(`${this.urlList}/list`, data)
  }

  createListData(id){
    return this.http.post(`${this.urlList}/list`,id)
  }

  // getToDoTask(){
  //   return this.http.get<List[]>(`${this.url}/toDoList`);
  // }

  // getInProgress(){
  //   return this.http.get<List[]>(`${this.url}/inProgressList`);
  // }

  // getDoneList(){
  //   return this.http.get<List[]>(`${this.url}/doneList`);
  // }

  // DeleteToDoTask(id){
  //   return this.http.delete<List>(`${this.url}/toDoList/${id}`)
  // }

  // DeleteInProgress(id){
  //   return this.http.delete<List>(`${this.url}/inProgressList/${id}`)
  // }

  // DeleteDoneList(id){
  //   return this.http.delete<List>(`${this.url}/doneList/${id}`)
  // }

  // postToDoTask(data){
  //   return this.http.post<List[]>(`${this.url}/toDoList`, data);
  // }

  // postInProgress(data){
  //   return this.http.post<List>(`${this.url}/inProgressList`, data);
  // }

  // postDoneList(data){
  //   return this.http.post<List>(`${this.url}/doneList`, data);
  // }

  
  // getToDoTaskById(id){
  //   return this.http.get<List[]>(`${this.url}/toDoList/${id}`);
  // }

  // getInProgressById(id){
  //   return this.http.get<List[]>(`${this.url}/inProgressList${id}`);
  // }

  // getDoneListById(id){
  //   return this.http.get<List[]>(`${this.url}/doneList/${id}`);
  // }
}
