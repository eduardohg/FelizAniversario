import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for common directives if used
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule],
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css']
})
export class Carousel {
  videos = [
    { id: 'ZBmjMGhj-ws', title: 'Sorriso Maroto', thumb:'https://mundorh.com.br/wp-content/uploads/2024/06/Cultivando-Alegria-A-Arte-de-Criar-uma-Familia-Feliz-Mundo-RH.png' },
    { id: '5QI-ydjgvmY',  title: 'Ferrugem', thumb:'https://mundorh.com.br/wp-content/uploads/2024/06/Cultivando-Alegria-A-Arte-de-Criar-uma-Familia-Feliz-Mundo-RH.png' },
    { id: 'WcSXEvYUgnU',  title: 'Thiaguinho',  thumb:'https://mundorh.com.br/wp-content/uploads/2024/06/Cultivando-Alegria-A-Arte-de-Criar-uma-Familia-Feliz-Mundo-RH.png' },
    { id: 'S_SXl-ETXRI',  title: 'Turma do Pagode', thumb:'https://mundorh.com.br/wp-content/uploads/2024/06/Cultivando-Alegria-A-Arte-de-Criar-uma-Familia-Feliz-Mundo-RH.png' },
    { id: 'z9XzfN4mhEw',  title: 'Dilsinho',  thumb:'https://mundorh.com.br/wp-content/uploads/2024/06/Cultivando-Alegria-A-Arte-de-Criar-uma-Familia-Feliz-Mundo-RH.png' },
  ];

  selectedVideo: any = null;

  selectVideo(video: any): void {
    this.selectedVideo = video;
  }
}
