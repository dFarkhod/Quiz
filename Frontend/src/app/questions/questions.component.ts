import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component ({
    templateUrl: './questions.component.html',
    selector: 'questions'
})
export class QuestionsComponent {
  
    questions;

    constructor(private apiSvc: ApiService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        let quizId = this.route.snapshot.paramMap.get('quizid');
        this.apiSvc.getQuestions(quizId).subscribe( result => {
            this.questions = result;
        })
    }

    
}