import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatCardModule, MatListModule} from '@angular/material'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent
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
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
