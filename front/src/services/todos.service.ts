import { Injectable } from "../../node_modules/@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from "../../node_modules/rxjs";
import { map } from 'rxjs/operators';
import {environment} from '../environments/environment';

const BASEURL = environment.BASEURL;

@Injectable()
export class TodosService {
  constructor(public http: Http) { }

  getTodos():Observable<Array<object>>{
    return this.http.get(`${BASEURL}/api/todos`).pipe(
      map( (res:Response) => {
        const listas = res.json();
        console.log(listas);
        return listas;
      })
    )
  }

  markTodo(id:string, status:boolean):Observable<object>{
    const postData = {
      todoItemId: id,
	    status
    };
    return this.http.post(`${BASEURL}/api/todos/modify`,postData).pipe(
      map( (res:Response) => {
        const listas = res.json();
        console.log(listas);
        return listas;
      })
    )
  }
}
