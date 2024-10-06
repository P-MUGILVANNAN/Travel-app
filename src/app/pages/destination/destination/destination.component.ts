import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { IntroComponent } from '../intro/intro.component';
import { FriendsComponent } from '../friends/friends.component';
import { CouplesComponent } from '../couples/couples.component';
import { NatureComponent } from '../nature/nature.component';
import { SuggestComponent } from '../suggest/suggest.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { ContactComponent } from '../../../components/contact/contact.component';



@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [NavbarComponent,IntroComponent,FriendsComponent,CouplesComponent,NatureComponent,SuggestComponent,FooterComponent,ContactComponent],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent {

}
