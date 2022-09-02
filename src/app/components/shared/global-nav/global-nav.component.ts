import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.scss']
})
export class GlobalNavComponent implements OnInit {

  links$ = of([
    {
      title: 'home',
      path: 'home'
    },
    {
      title: 'template form',
      path: 'template-form'
    },
    {
      title: 'reactive form',
      path: 'reactive-form'
    }
  ]);
  constructor() { }

  ngOnInit(): void {
  }

}
