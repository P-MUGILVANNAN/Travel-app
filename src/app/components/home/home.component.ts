import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MainComponent } from '../main/main.component';
import { CaroComponent } from '../caro/caro.component';
import { AboutComponent } from '../about/about.component';
import { DestinationsComponent } from '../destinations/destinations.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from '../contact/contact.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,MainComponent,CaroComponent,AboutComponent,DestinationsComponent,FooterComponent,CommonModule,FormsModule,ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
