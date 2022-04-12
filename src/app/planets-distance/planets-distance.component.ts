import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planets-distance',
  templateUrl: './planets-distance.component.html',
  styleUrls: ['./planets-distance.component.css']
})
export class PlanetsDistanceComponent implements OnInit {
  @Input() inputFromRoot: any;
  sortedPlanetsArray: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.sortedPlanetsArray = this.inputFromRoot.planets.sort(
      (a: any,b: any) => {
        return a["planetRadiusKM"] - b["planetRadiusKM"];
      });
  }

}
