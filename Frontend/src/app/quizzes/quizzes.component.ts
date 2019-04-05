import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  quizzes;
  
  constructor(private apiSvc: ApiService) { }

  ngOnInit() {
    this.apiSvc.getQuizzes().subscribe( result => {
      this.quizzes = result;
  })
  }

}
