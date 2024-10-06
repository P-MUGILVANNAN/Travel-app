import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Extend the global Window interface to include googleSignIn and googleSignOut
declare global {
  interface Window {
    googleSignIn: () => void;
    googleSignOut: () => void;
  }
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // Calls the sign-in method from the script
  googleSignIn() {
    window.googleSignIn();
  }

  // Calls the sign-out method from the script
  googleSignOut() {
    window.googleSignOut();
  }
}
