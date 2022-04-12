import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planets-details',
  templateUrl: './planets-details.component.html',
  styleUrls: ['./planets-details.component.css']
})
export class PlanetsDetailsComponent implements OnInit {
  @Input() inputFromRoot: any;
  constructor() { }

  ngOnInit(): void {
  }

}
