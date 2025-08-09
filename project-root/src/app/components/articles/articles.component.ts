import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  gymOneUrl: string = '../../../assets/images/gym-01.png';
  gymAltText: string = 'Imagem de uma academia com equipamentos modernos e pessoas treinando.';
  gymTwoUrl: string = '../../../assets/images/gym-02.png';
  gymTwoAltText: string = 'Imagem de uma academia com pessoas treinando e equipamentos';
}
