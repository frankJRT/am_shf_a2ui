import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log('ngOnInit');
  }
  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    console.log('ngAfterViewInit');
  }
  public right_side_bar!: boolean;
}
