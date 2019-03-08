import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {}

    postQuestion(question) {
        this.http.post('https://localhost:44339/api/question', question)
            .subscribe(response => {
                console.log(response);
            })
    }

    getQuestions() {
       return this.http.get('https://localhost:44339/api/question');
    }
}