import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { IntroComponent } from '../intro/intro.component';
import { FormsComponent } from '../forms/forms.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { ContactComponent } from '../../../components/contact/contact.component';

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [NavbarComponent,IntroComponent,FormsComponent,FooterComponent,ContactComponent],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css'
})
export class CustomComponent {

}
