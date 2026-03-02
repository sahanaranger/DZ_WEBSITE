import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isMenuOpen = false;      // CableMaker
  isNxtMenuOpen = false;   // CableNXT

  // Toggle CableMaker
  toggleMenu(event: Event) {
    event.stopPropagation(); // 🔥 Important
    this.isMenuOpen = !this.isMenuOpen;
    this.isNxtMenuOpen = false; // Close CableNXT
  }

  // Toggle CableNXT
  toggleNxtMenu(event: Event) {
    event.stopPropagation(); // 🔥 Important
    this.isNxtMenuOpen = !this.isNxtMenuOpen;
    this.isMenuOpen = false; // Close CableMaker
  }

  // Close when clicking outside
  @HostListener('document:click')
  closeAllMenus() {
    this.isMenuOpen = false;
    this.isNxtMenuOpen = false;
  }
}