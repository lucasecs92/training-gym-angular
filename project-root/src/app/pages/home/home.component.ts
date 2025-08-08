import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ArticlesComponent } from '../../components/articles/articles.component';
import { CommunityComponent } from '../../components/community/community.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ArticlesComponent, CommunityComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}