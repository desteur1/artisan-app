import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSearchVisible: boolean = false; // tracks visisbility of the search bar
  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible; // Toggle visibility
  }
}
