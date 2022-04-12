import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planets-distance',
  templateUrl: './planets-distance.component.html',
  styleUrls: ['./planets-distance.component.css']
})
export class PlanetsDistanceComponent implements OnInit {
  @Input() inputFromRoot: any;
  constructor() { }

  ngOnInit(): void {
  }

}
