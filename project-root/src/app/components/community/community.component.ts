import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent {
  gymThreeUrl: string = '../../../assets/images/gym-03.png';
  gymThreeAltText: string = 'Imagem de uma academia com pessoas treinando e equipamentos';
}
