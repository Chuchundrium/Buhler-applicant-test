import { Component, Input, OnInit } from '@angular/core';
import { MachineName, MachineState } from '../../services/machines-line.service';
import { MachineStateIcon } from './../../services/machines-line.service';

@Component({
  selector: 'nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  @Input() name: MachineName | undefined;
  @Input() state: MachineState = MachineState.RUNNING;
  MachineStateIcon = MachineStateIcon;

  constructor() { }

  ngOnInit(): void {
  }

}
