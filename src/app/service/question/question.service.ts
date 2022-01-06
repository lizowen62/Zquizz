import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
};

/*declare var process : {
  env: {
    API_URL: string
  }
}

const DB = process.env['API_URL']*/

@Injectable({
  providedIn: 'root'
})
export class QuestionService {


  constructor(private http : HttpClient) { }

  getQuestion() {
    // return this.http.get<any>("assets/questions.json")
    return this.http.get<any>("http://localhost:3000/questions", httpOptions)
  }

  getUsers() {
    // return this.http.get<any>("assets/questions.json")
    return this.http.get<any>("http://localhost:3000/users", httpOptions)
  }

  postUser(user: String) {
    // return this.http.get<any>("assets/questions.json")
    return this.http.post<any>('http://localhost:3000/users', {name : user }, httpOptions)
  }
}
