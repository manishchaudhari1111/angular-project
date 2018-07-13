import { Component } from '@angular/core';
import {animate, state, style, transition, trigger, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-header-component',
  animations: [trigger(
    'openClose',
    [
      state('collapsed, void', style({display: 'none'})),
      state('expanded', style({display: 'block'})),
      transition('collapsed => expanded',
      [
        query('.navbar-mobile', style({ opacity: 0, transform: 'translateY(-40px)' })),
        query('.navbar-mobile', stagger('500ms', [
          animate('500ms  ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
        ]))
      ]),
      transition('expanded => collapsed',
      [
        query('.navbar-mobile', style({ opacity: 1, transform: 'translateY(0)' })),
        query('.navbar-mobile', stagger('500ms', [
          animate('500ms  ease-in', style({ opacity: 0, transform: 'translateY(-40px)' })),
        ]))
      ])
    ])],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  stateExpression: string;
  constructor() {
    this.stateExpression = 'collapsed';
  }
  menuClick() {
    this.stateExpression = this.stateExpression === 'collapsed' ? 'expanded' : 'collapsed';
  }
}
