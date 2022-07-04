import { Component, OnInit } from '@angular/core';
import { MachineName, MachineState } from '../services/machines-line.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  MachineNames = Object.values(MachineName);
  MachineState = MachineState;
  constructor() { }

  ngOnInit(): void {
  }

}
