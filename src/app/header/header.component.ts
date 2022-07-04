import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string = 'Operator';
  date$: Observable<Date>;

  constructor() {
    this.date$ = new Observable(observer => {
      setInterval(() => {
        observer.next(new Date);
      }, 1000);
    })
  }

  ngOnInit(): void {}
}
