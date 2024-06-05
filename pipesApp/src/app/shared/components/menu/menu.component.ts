import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',

  templateUrl: './menu.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {

  public items: MenuItem [] = [];

  ngOnInit() {
    this.items = [{
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
            {
              label: 'Textos y fechas',
              icon: 'pi pi-align-left',
              routerLink: ['/products/'],
            },
            {
              label: 'Números',
              icon: 'pi pi-dollar',
              routerLink: ['/products/numbers'],
            },
            {
              label: 'No comunes',
              icon: 'pi pi-globe',
              routerLink: ['/products/uncommon'],
            },
        ]
    },
    {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [

          {
            label: "Otro elemento",
          }

        ]
    }];
}

 }
