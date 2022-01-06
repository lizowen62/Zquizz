import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { QuestionService } from '../service/question/question.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  @ViewChild("name") nameKey! : ElementRef


  emailFormControl = new FormControl('', [Validators.required]);

  constructor(
    private questionService : QuestionService,
    private router : Router) { }

  ngOnInit(): void {
  }

  start() {
    localStorage.setItem("name", this.emailFormControl.value)
    this.questionService.postUser(this.emailFormControl.value)
    .subscribe( res => { console.log(res)} );
    this.router.navigate(['/quizz']);
  }

  update() {
  }

}
