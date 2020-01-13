import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { map, finalize, catchError, share, shareReplay, publish, publishReplay, multicast, refCount} from 'rxjs/operators';
import { of, Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient,

  ) { }

  private statuses: Observable<any>
  private prioroties: Observable<any>
  private tags: Observable<any>


  saveTask(task:any){
    let url = env.apiBase + env.api + `/${env.guid}` +  env.tasks
    return this.http.post(url, task)
  }

  getTasks(){
    let url = env.apiBase + env.getTasks + '?tenantguid=' + env.guid
    return this.http.get(url).pipe(map(data => data['value']))
  }

  getTask(id){
    let url = env.apiBase + env.api + `/${env.guid}` +  env.tasks + '/' + id
    return this.http.get(url)
  }

  getUsers(){
    let url = env.apiBase + env.api + `/${env.guid}` +  env.users
    return this.http.get(url)
  }

  getStatuses(){
    let url = env.apiBase + env.api + `/${env.guid}` +  env.statuses

    if (!this.statuses) {
      let stream = this.http.get(url)
      this.statuses = from(stream.toPromise())
    }
    return this.statuses
  }

  getPriorities(){
    let url = env.apiBase + env.api + `/${env.guid}` +  env.priorities

    if (!this.prioroties) {
      let stream = this.http.get(url)
      this.prioroties = from(stream.toPromise())
    }
    return this.prioroties
  }

  putTask(task){
    let url = env.apiBase + env.api + `/${env.guid}` +  env.tasks
    return this.http.put(url, task)
  }

  getTags(){
    let url = env.apiBase + env.api + `/${env.guid}` +  env.tags
    if (!this.tags) {
      let stream = this.http.get(url)
      this.tags = from(stream.toPromise())
    }
    return this.tags
  }
}
