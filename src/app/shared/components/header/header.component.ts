import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { NavService, Menu } from '../../services/nav.service';
import { DOCUMENT } from '@angular/common';

//var body = document.getElementsByTagName('body')[0];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public menuItems!: Menu[];
  public items!: Menu[];
  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public openNav: boolean = false;
  public right_sidebar: boolean = false;
  public text!: string;
  public elem!: HTMLElement;
  public isOpenMobile: boolean = false;
  @Output() rightSidebarEvent = new EventEmitter<boolean>();

  constructor(
    public navServices: NavService,
    @Inject(DOCUMENT) private document: any //public authService: AuthService
  ) {}

  ngOnDestroy() {
    this.removeFix();
  }

  right_side_bar() {
    this.right_sidebar = !this.right_sidebar;
    this.rightSidebarEvent.emit(this.right_sidebar);
  }

  collapseSidebar() {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
  }

  openMobileNav() {
    this.openNav = !this.openNav;
  }

  public changeLanguage(lang: any) {}

  searchTerm(term: any) {}

  checkSearchResultEmpty(items: string | any[]) {
    if (!items.length) this.searchResultEmpty = true;
    else this.searchResultEmpty = false;
  }

  addFix() {}

  removeFix() {}
  ngOnInit() {
    this.elem = document.documentElement;
    this.navServices.items.subscribe((menuItems) => {
      this.items = menuItems;
    });
  }

  toggleFullScreen() {}
}
