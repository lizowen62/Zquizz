import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionService } from '../service/question/question.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public $task: Observable<any> | undefined;
  public roomUsers: Array<any> = [];

  constructor(private questionService : QuestionService) { }

  ngOnInit(): void {
    this.$task = this.questionService.getUsers();
  }

}
