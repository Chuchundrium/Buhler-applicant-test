import { interval, map, Observable, share } from 'rxjs';
import { Injectable } from '@angular/core';

export interface MashineData {
  name: MachineName;
  state: MachineState
}

export enum MachineName {
  SCALE = 'Scale',
  ATTACHER = 'Attacher',
  PACKER = 'Packer',
  CLOSER = 'Closer',
}
export enum MachineState {
  RUNNING = 'running',
  ALARM = 'alarm',
  WARNING = 'warning',
}

export const MachineStateIcon = {
  [MachineState.RUNNING]: 'settings_backup_restore',
  [MachineState.ALARM]: 'error_outline',
  [MachineState.WARNING]: 'warning',
};

@Injectable({
  providedIn: 'root',
})
export class MachinesLineService {
  // Generating of mock data to reproduce a behaviour of real-time app
  //
  // In a regular case could be:
  // * fetching data from backend via socket in a json way
  // * parsing it (with type modify if necessary)

  public machinesData$: Observable<MashineData[]> = interval(3000).pipe(
    map(() => {
      const data = [
        { name: MachineName.SCALE, state: this.getRandomState() },
        { name: MachineName.ATTACHER, state: this.getRandomState() },
        { name: MachineName.PACKER, state: this.getRandomState() },
        { name: MachineName.CLOSER, state: this.getRandomState() },
      ];
      return data.map((d) => ({ name: d.name as MachineName, state: d.state }));
    }),
    share()
  );

  constructor() {}

  private getRandomState(): MachineState {
    const states = Object.values(MachineState);
    const randomIndex = Math.floor(Math.random() * states.length);
    return states[randomIndex];
  }
}
