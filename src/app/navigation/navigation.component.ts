import { Component } from '@angular/core';
import {
  MachineName,
  MachinesLineService,
  MachineState,
} from '../services/machines-line.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  MachineName = MachineName;
  MachineState = MachineState;

  constructor(public service: MachinesLineService) {}
}
