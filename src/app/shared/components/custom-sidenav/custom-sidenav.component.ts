import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

export type MenuItem = {
  incon: string;
  label: string;
  router?: string;
  subTems?: MenuItem[];
};

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, NgFor, MatExpansionModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss',
})
export class CustomSidenavComponent {
  @Input() isOpen: boolean = false;
  @Input() mode: 'over' | 'push' | 'side' = 'side';

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
