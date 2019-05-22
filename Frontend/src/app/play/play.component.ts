import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  quizzes;

  constructor(private apiSvc: ApiService) { }

  ngOnInit() {
    this.apiSvc.getAllQuizzes().subscribe(result => {
      this.quizzes = result;
    });
  }

}
