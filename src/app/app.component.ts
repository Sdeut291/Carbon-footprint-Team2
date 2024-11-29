import {
  DsHeaderTagConfiguration,
  DsHeaderUserInfo,
  DsNavigationItem,
  DsNavigationBarModule,
  DsHeaderModule,
  DsBoxModule,
  DsButtonModule,
} from '@bmw-ds/components';
import { Component, WritableSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DsNavigationBarModule,
    DsHeaderModule,
    DsBoxModule,
    DsButtonModule,
    DashboardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  environmentTagConfig: WritableSignal<Partial<DsHeaderTagConfiguration>> =
    signal({ label: 'DEV' });
  userInfo: WritableSignal<Partial<DsHeaderUserInfo>> = signal({
    username: 'John Doe',
    department: 'Dept 1',
    profileImg: 'https://www.gravatar.com/avatar/?d=identicon',
  });

  //Navigation configuration
  navigationItems: WritableSignal<DsNavigationItem[]> = signal([
    {
      label: 'FEDEV Documentation',
      href: 'http://frontend-dev.bmwgroup.net',
      target: '_blank',
      icon: 'book',
    },
    {
      label: 'Density Resources',
      icon: 'code_box',
      children: [
        {
          label: 'Documentation',
          href: 'https://density.bmwgroup.net',
          target: '_blank',
          icon: 'book',
        },
        {
          label: 'Component Library',
          href: 'https://density.bmwgroup.net/components',
          target: '_blank',
        },
        {
          label: 'Icons',
          href: 'https://density.bmwgroup.net/foundations/icons/density-icons',
          target: '_blank',
        },
      ],
    },
    {
      label: 'Density Design Resources',
      href: 'https://density.bmwgroup.net/resources-downloads',
      target: '_blank',
      icon: 'figma',
    },
  ]);

  title = 'carbon-footprint-team2';
}
