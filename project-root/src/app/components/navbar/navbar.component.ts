import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true, // Add 'standalone: true' pois o seu 'imports' estava vazio, indicando que é um componente standalone.
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  logoUrl: string = '../../../assets/images/logo-icon.svg';
  logoAltText: string = 'Logo Training GYN';
}
