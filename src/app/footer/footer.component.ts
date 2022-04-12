import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() inputFromRoot: any;
  pipe = new DatePipe('en-US');
  todayWithPipe: any;

  constructor() { }

  ngOnInit(): void {
    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');
  }

}
