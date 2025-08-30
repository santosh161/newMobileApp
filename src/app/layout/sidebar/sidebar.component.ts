import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbardata } from './nav-data';

interface SideNavToggle {
  screenwidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() onToggelSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = false;
  navdata = navbardata;
  screenWidth = 0;
  isMobileMenuOpen = false; // 🔹 for hamburger menu

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  // 🔹 Listen to window resize
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;

    if (this.screenWidth <= 768) {
      this.collapsed = false; // force collapsed in mobile
      this.isMobileMenuOpen = false; // close menu on resize
      this.onToggelSideNav.emit({ collapsed: this.collapsed, screenwidth: this.screenWidth });
    } else {
      this.onToggelSideNav.emit({ collapsed: this.collapsed, screenwidth: this.screenWidth });
    }
  }

  // 🔹 Toggle collapse (desktop)
  toggelCollapse() {
    this.collapsed = !this.collapsed;
    this.onToggelSideNav.emit({ collapsed: this.collapsed, screenwidth: this.screenWidth });
  }

  // 🔹 Close sidebar (desktop + mobile)
  closeSidenave() {
    this.collapsed = false;
    this.isMobileMenuOpen = false;
    this.onToggelSideNav.emit({ collapsed: this.collapsed, screenwidth: this.screenWidth });
  }

  // 🔹 Toggle sidebar in mobile
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
