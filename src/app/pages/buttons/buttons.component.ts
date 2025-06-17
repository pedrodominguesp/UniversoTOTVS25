import { Component } from '@angular/core';
import { PoButtonModule, PoDropdownModule, PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-buttons',
  imports: [PoPageModule,
    PoButtonModule,
    PoDropdownModule
  ],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

}
