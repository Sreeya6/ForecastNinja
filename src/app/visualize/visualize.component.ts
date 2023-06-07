import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})
export class VisualizeComponent implements OnInit {
  openPowerBI() {
    window.open('https://app.powerbi.com/groups/me/reports/6041d569-54a7-4b14-8ccc-184a5a4d7968/ReportSection?experience=power-bi/ReportSection', '_blank');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
