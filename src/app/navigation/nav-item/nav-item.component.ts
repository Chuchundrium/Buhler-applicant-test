import { Component, Input } from '@angular/core';
import { MachineName, MachineState, MachineStateIcon } from '../../services/machines-line.service';


@Component({
  selector: 'nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
  @Input() name: MachineName = MachineName.SCALE;
  @Input() state: MachineState = MachineState.RUNNING;
  MachineStateIcon = MachineStateIcon;

  constructor() {}

}
