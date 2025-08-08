import { CommonModule, NgIf, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true, // indicando que é um componente standalone.
  imports: [
    NgOptimizedImage, NgIf, CommonModule, RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  logoUrl: string = '../../../assets/images/logo-icon.svg';
  logoAltText: string = 'Logo Training GYN';

  // propriedade para controlar a visibilidade do menu
  isMenuOpen = false;

  // Função para alternar o estado do menu
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
