import { Component } from '@angular/core';
import { IntroComponent } from '../intro/intro.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { UpcomingComponent } from '../upcoming/upcoming.component';
import { FormsComponent } from '../forms/forms.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { ContactComponent } from '../../../components/contact/contact.component';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [IntroComponent,NavbarComponent,UpcomingComponent,FormsComponent,FooterComponent,ContactComponent],
  templateUrl: './group.component.html',
  styleUrl: './group.component.css'
})
export class GroupComponent {

}
