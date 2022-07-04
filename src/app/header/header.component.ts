import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userName: string = 'Operator';
  date$: Observable<Date>;

  constructor() {
    this.date$ = interval(1000).pipe(map(() => new Date));
  }
}
