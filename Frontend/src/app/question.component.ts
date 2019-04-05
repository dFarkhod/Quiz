import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Question } from './question';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component ({
    templateUrl: './question.component.html',
    selector: 'question'
})
export class QuestionComponent {
    question = new Question();

    subscription: Subscription;
    constructor(private apiSvc: ApiService, private route: ActivatedRoute) {

    }

    resetQuestion() {
        this.question = new Question();
    }

    ngOnInit() {
        this.subscription = this.apiSvc.getSelectedQuestion().subscribe( q => {
            this.question = q;
            this.question.quizid = this.route.snapshot.paramMap.get('quizid');
        })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    post() {
        if (this.question.id)
            this.apiSvc.putQuestion(this.question);
        else
            this.apiSvc.postQuestion(this.question);
    }
}