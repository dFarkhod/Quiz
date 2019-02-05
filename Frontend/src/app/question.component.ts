import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component ({
    templateUrl: './question.component.html',
    selector: 'question'
})
export class QuestionComponent {
    question = {
        text: 'Malayziya poytahti',
        correctAnswer: 'Kuala Lumpur',
        wrongAnswers: ['Bangkok', 'Melaka', 'Kanberra']
    }

    constructor(private apiSvc: ApiService) {

    }

    post() {
       this.apiSvc.postQuestion(this.question);
    }
}