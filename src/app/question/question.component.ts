import { Component, OnInit, ViewChild, ElementRef, QueryList } from '@angular/core';
import { QuestionService } from '../service/question/question.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @ViewChild("input") nameKey! : ElementRef

  public inputQuestion: string = '';
  public isLoading: boolean = true;
  public guess: Boolean = false;
  public name : string = "";
  public questionList : any = []; // any
  public current: number = 0;
  public timer:number= 0;
  public score: number = 0;
  public progressBar :number = 100;
  public answerString: string = "";
  interval: any ;

  constructor(
    private questionService : QuestionService,
    private _snackBar: MatSnackBar ) {}

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getQuestions();
    this.startTimer();
  }

  getQuestions() : void  {
    this.questionService.getQuestion()
    .subscribe( res => { 
      console.log(res.data)
      this.questionList = res.data
      this.timer = this.questionList[this.current].duration;
      this.isLoading = false;
    })
  }

  nextQuestion() :void  {
    if ( this.guess ) {
      this.guess = false;
    } else {
      this.openSnackBar(this.questionList[this.current].explanation);
    }
    this.inputQuestion = '';
    this.current += 1;
    this.timer = this.questionList[this.current].duration ;
  }


  startTimer() {
    this.interval = setInterval(() => {
      if(this.timer > 0) {
        this.progressBar = this.computeProgressBar();
        this.timer--;
      } else {
        if ( this.current + 1 >= this.questionList.length ) {
          console.log('ceci est la fin du quizz') 
        } else {
          this.nextQuestion();
        }
      }
    },1000)
  }

  validQuestion() {
    if (this.questionList[this.current].Answer == this.inputQuestion) {
      this.guess = true;
      console.log(this.inputQuestion)
      this.score += 10 * this.questionList[this.current].difficulty;
      this.openSnackBar("correct");
    }
  }

  computeProgressBar() : number {
    return this.timer / this.questionList[this.current].duration * 100
  }

  answer (answer:any) : void  {

    if ( answer.correct ) {
      this.score += 10 * this.questionList[this.current].difficulty;
      this.nextQuestion();
    }

    return;
  }

}
