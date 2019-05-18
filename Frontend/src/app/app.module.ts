import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from './auth-interceptor.service';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionComponent } from './question.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { RegisterComponent } from './register/register.component';


const routes = [
  { path: 'question', component: QuestionComponent },
  { path: 'question/:quizid', component: QuestionComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    NavbarComponent,
    QuizComponent,
    QuizzesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
