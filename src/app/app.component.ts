import { Component } from '@angular/core';
import { Details } from './details';
import { DetailsService } from './details.service';
import { Planets } from './planets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'singhabiA4';
  myDetails: Details;
  myPlanets: Planets;

  constructor(private _detailsService: DetailsService){
    this.myDetails = this._detailsService.getDetails().myDetails;
    this.myPlanets = this._detailsService.getDetails().solarSystem;
  }

  ngOnInit() {
  }
}
