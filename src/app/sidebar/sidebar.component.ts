import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question/question.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public roomUsers: Array<string> = [];

  constructor(private questionService : QuestionService) { }

  ngOnInit(): void {
    this.questionService.getQuestion().subscribe(res => {
      this.roomUsers = res.data;
    })
  }

}
