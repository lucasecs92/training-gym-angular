import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  gymAboutOneUrl: string = '../../../assets/images/gym-about-01.png';
  gymAboutAltText: string = 'Imagem de uma academia com equipamentos modernos e pessoas treinando.';
  gymAboutTwoUrl: string = '../../../assets/images/gym-about-02.png';
  gymAboutThreeUrl: string = '../../../assets/images/gym-about-03.png';
}
