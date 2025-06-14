import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoThemeA11yEnum,
  PoThemeService,
  PoThemeTypeEnum,
  PoToolbarModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Página Inicial', link: 'home' },
    { label: 'Cadastro do Usuário', link: 'forms' },
  ];

  constructor(private POThemeService: PoThemeService) {
    this.POThemeService.setDefaultTheme(PoThemeTypeEnum.dark);
    this.POThemeService.setCurrentThemeA11y(PoThemeA11yEnum.AA);
    this.POThemeService.setA11yDefaultSizeSmall(true);
    this.POThemeService.persistThemeActive();
  }
}
