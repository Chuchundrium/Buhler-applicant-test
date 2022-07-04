import { Component, OnInit } from '@angular/core';
import { MachineName, MachinesLineService, MachineState } from '../services/machines-line.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  MachineNames = Object.values(MachineName);
  MachineState = MachineState;
  constructor(public service: MachinesLineService) { }

  ngOnInit(): void {
  }
}
