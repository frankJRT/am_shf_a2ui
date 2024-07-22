import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// services
import { NavService } from './services/nav.service';

import { CustomizerService } from './services/customizer.service';
import { TableService } from './services/table.service';
// Directives
import { ToggleFullscreenDirective } from './directives/fullscreen.directive';
import { NgbdSortableHeader } from './directives/NgbdSortableHeader';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToggleFullscreenDirective,
    NgbdSortableHeader,
  ],
  imports: [CommonModule, FormsModule],
  exports: [NgbdSortableHeader],
  providers: [NavService, CustomizerService, TableService],
})
export class SharedModule {}
