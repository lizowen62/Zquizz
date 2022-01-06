import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { QuestionService } from '../service/question/question.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  @ViewChild("name") nameKey! : ElementRef

  constructor(private questionService : QuestionService) { }

  ngOnInit(): void {
  }

  start() {
    localStorage.setItem("name", this.nameKey.nativeElement.value)
    this.questionService.postUser(this.nameKey.nativeElement.value)
    .subscribe( res => { console.log(res)} );
  }
}
