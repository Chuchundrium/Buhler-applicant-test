import { Component, Input } from '@angular/core';
import { MachineName, MachineState, MachineStateIcon } from '../../services/machines-line.service';

export const MachineNameIcon = {
  [MachineName.SCALE]: 'system_update_alt',
  [MachineName.PACKER]: 'inventory_2',
  [MachineName.ATTACHER]: 'library_books',
  [MachineName.CLOSER]: 'grid_on',
}

@Component({
  selector: 'overview-item',
  templateUrl: './overview-item.component.html',
  styleUrls: ['./overview-item.component.scss']
})
export class OverviewItemComponent {
  @Input() name: MachineName = MachineName.SCALE;
  @Input() state: MachineState = MachineState.RUNNING;
  MachineStateIcon = MachineStateIcon;
  MachineNameIcon = MachineNameIcon;

  constructor() {}
}
