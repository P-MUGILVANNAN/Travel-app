import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  // Cards content
  title = 'Travel';
  subtitle = 'Create and organize your travel plans with ease using our Travel Itinerary Planner';

  cards = [
    {
      img: '/assets/Main_Page_images/Image 1.jpg',  
      alt: 'Itineraries',
      title: 'Your Itineraries',
      text: 'Manage and customize your travel plans for any trip.',
      btnText: 'View Itineraries'
    },
    {
      img: '/assets/Main_Page_images/Image 2.jpg',  
      alt: 'Destinations',
      title: 'Popular Destinations',
      text: 'Explore the top travel destinations for your next adventure.',
      btnText: 'Explore Destinations'
    },
    {
      img: '/assets/Main_Page_images/Image 3.jpg',  
      alt: 'plan',
      title: 'Plan Vacation',
      text: 'Need help? Get in touch with our travel experts.',
      btnText: 'Custom tours'
    }
  ];
}
