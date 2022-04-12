import { Component } from '@angular/core';
import { Details } from './details';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'singhabiA4';
  myDetails: Details;

  constructor(private _detailsService: DetailsService){
    this.myDetails = this._detailsService.getDetails().myDetails;
  }

  ngOnInit() {
  }
}
