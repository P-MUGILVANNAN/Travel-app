import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com'; // Import emailjs-com

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  formData = {
    name: '',
    destination: '',
    persons: '',
    email: '',
    phone: ''
  };

  successMessage: string | null = null;
  errorMessage: string | null = null;

  sendEmail(event: Event) {
    event.preventDefault(); // Prevent the default form submission

    const templateParams = {
      to_name: 'TripSync',
      from_name: this.formData.name,
      destination: this.formData.destination,
      persons: this.formData.persons,
      from_email: this.formData.email,
      phone: this.formData.phone,
    };

    // Replace with your actual EmailJS credentials
    const SERVICE_ID = 'Group'; // Your Service ID
    const TEMPLATE_ID = 'template_pg9gu1o'; // Your Template ID
    const USER_ID = 'kmSWsXiKAgcfuagRy'; // Your User ID

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response: any) => { // Explicitly define response type
        console.log('Email sent successfully!', response.status, response.text);
        alert('Message sent successfully!'); // Add alert for success
        this.successMessage = null;
        this.errorMessage = null;
        this.formData = { name: '', destination: '', persons: '', email: '', phone: '' }; // Clear form
      })
      .catch((error: any) => { // Explicitly define error type
        console.error('Error sending email:', error);
        this.errorMessage = 'Failed to send message. Please try again.';
        this.successMessage = null;
      });
  }
}
