import { Injectable } from '@angular/core';

export enum MachineName {
  SCALE = 'Scale',
  ATTACHER = 'Attacher',
  PACKER = 'Packer',
  CLOSER = 'Closer'
}
export enum MachineState {
  RUNNING = 'running',
  ALARM = 'alarm',
  WARNING = 'warning'
}

export const MachineStateIcon = {
  [MachineState.RUNNING]: 'settings_backup_restore',
  [MachineState.ALARM]: 'error_outline',
  [MachineState.WARNING]: 'warning'
}

@Injectable({
  providedIn: 'root'
})
export class MachinesLineService {

  constructor() { }
}
