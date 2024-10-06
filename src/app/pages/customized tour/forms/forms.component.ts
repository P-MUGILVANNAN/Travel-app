import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { send, init } from '@emailjs/browser'; // Import EmailJS functions
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule here
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  serviceID = 'travel'; // Replace with your EmailJS service ID
  templateID = 'template_jpzdjiq'; // Replace with your EmailJS template ID
  submissionMessage: string | null = null; // For storing submission message
  formData: any = { // Initialize formData to hold form values
    fullName: '',
    email: '',
    destination: '',
    startDate: '',
    endDate: '',
    activities: '',
    budget: '',
    groupSize: null,
    specialRequests: ''
  };

  constructor() {
    init('kmSWsXiKAgcfuagRy'); // Initialize EmailJS with your public key
  }

  // Method to handle form submission
  onSubmit() {
    console.log(this.formData); // Log the form data for debugging
    this.sendEmail(this.formData); // Send email with form data
  }

  // Method to send email using EmailJS
  sendEmail(formData: any) {
    const emailData = {
      from_name: formData.fullName, // Use the actual sender's name
      to_name: formData.email, // The recipient's email
      from_email: formData.email, // The sender's email
      destination: formData.destination,
      start_date: formData.startDate, // Send start date
      end_date: formData.endDate, // Send end date
      activities: formData.activities,
      budget: formData.budget,
      group_size: formData.groupSize,
      special_requests: formData.specialRequests,
      subject: `New Custom Tour Query Submitted by ${formData.fullName}`, // Subject line
      message: `
        You have received a new message from ${formData.fullName}:

        **Email**: ${formData.email}
        **Destination**: ${formData.destination}
        **Start Date**: ${formData.startDate}
        **End Date**: ${formData.endDate}
        **Activities**: ${formData.activities}
        **Budget**: ${formData.budget}
        **Group Size**: ${formData.groupSize}
        **Special Requests**: ${formData.specialRequests}

        Best wishes,
        ${formData.fullName}
      `
    };

    send(this.serviceID, this.templateID, emailData)
      .then((response) => {
        console.log('Email sent successfully!', response);
        alert('Your form has been submitted successfully!'); // Show alert message
        this.clearForm(); // Clear the form fields after submission
      })
      .catch((error) => {
        console.error('Failed to send email:', error); // Log the error for debugging
        alert(`There was an error submitting your form: ${error.text}`); // Show a more detailed error message
      });
  }

  // Clear the form fields
  clearForm() {
    this.formData = {
      fullName: '',
      email: '',
      destination: '',
      startDate: '',
      endDate: '',
      activities: '',
      budget: '',
      groupSize: null,
      specialRequests: ''
    };
  }
}
