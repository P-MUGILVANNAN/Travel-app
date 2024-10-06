import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent {
  // Form data
  formData = {
    name: '',
    email: '',
    phone: ''
  };

  // For tracking selected tour for form
  selectedTour: any = null;

  // In-house tours with thumbnail image paths
  inhouseTours = [
    {
      name: 'Wildlife Safari - Nagarhole',
      startDate: '2024-10-15',
      endDate: '2024-10-18',
      location: 'Nagarhole National Park, India',
      availability: '10 spots left',
      thumbnail: '/assets/Group/1.jpg' 
    },
    {
      name: 'Monsoon Magic - Kabini',
      startDate: '2024-11-01',
      endDate: '2024-11-04',
      location: 'Kabini River Lodge, India',
      availability: '5 spots left',
      thumbnail: '/assets/Group/2.jpg'
    },
    {
      name: 'Cultural Journey - Jaipur',
      startDate: '2024-11-10',
      endDate: '2024-11-13',
      location: 'Jaipur, India',
      availability: '15 spots left',
      thumbnail: '/assets/Group/3.jpeg'
    },
    {
      name: 'Backwaters Bliss - Kerala',
      startDate: '2024-09-28',
      endDate: '2024-09-30',
      location: 'Kerala, India',
      availability: '12 spots left',
      thumbnail: '/assets/Group/4.jpg'
    }
  ];

  // International tours with thumbnail image paths
  internationalTours = [
    {
      name: 'Tropical Adventure - Maldives',
      startDate: '2024-12-01',
      endDate: '2024-12-05',
      location: 'Maldives',
      availability: '8 spots left',
      thumbnail: '/assets/Group/5.jpg'
    },
    {
      name: 'European Getaway - Switzerland',
      startDate: '2024-12-20',
      endDate: '2024-12-25',
      location: 'Switzerland',
      availability: '3 spots left',
      thumbnail: '/assets/Group/6.jpg'
    },
    {
      name: 'Desert Safari - Dubai',
      startDate: '2024-11-25',
      endDate: '2024-11-28',
      location: 'Dubai, UAE',
      availability: '7 spots left',
      thumbnail: '/assets/Group/7.jpg'
    }
  ];

}
