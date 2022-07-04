import { Component, OnInit } from '@angular/core';
import { MachineName, MachineState } from '../services/machines-line.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  MachineNames = Object.values(MachineName);
  MachineState = MachineState;

  constructor() { }

  ngOnInit(): void {
  }

}
