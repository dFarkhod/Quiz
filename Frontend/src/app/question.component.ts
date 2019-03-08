import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Subscription } from 'rxjs';
import { Question } from './question';

@Component ({
    templateUrl: './question.component.html',
    selector: 'question'
})
export class QuestionComponent {
    question = new Question();
    private subscription: Subscription;

    constructor(private apiSvc: ApiService) {

    }

    ngOnInit() {
       this.subscription = this.apiSvc.getSelectedQuestion().subscribe( q => {
            this.question = q;
        })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    post() {
        if (!this.question.id)
            this.apiSvc.postQuestion(this.question);
        else
            this.apiSvc.putQuestion(this.question);
    }
}