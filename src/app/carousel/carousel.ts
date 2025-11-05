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
  selectedVideo: any = null;
  playerWidth = 370;

  videos = [
    { id: 'ZBmjMGhj-ws', title: 'Sorriso Maroto', thumb:'https://mundorh.com.br/wp-content/uploads/2024/06/Cultivando-Alegria-A-Arte-de-Criar-uma-Familia-Feliz-Mundo-RH.png' },
    { id: '5QI-ydjgvmY',  title: 'Ferrugem', thumb:'https://mundorh.com.br/wp-content/uploads/2024/06/Cultivando-Alegria-A-Arte-de-Criar-uma-Familia-Feliz-Mundo-RH.png' },
    { id: 'WcSXEvYUgnU',  title: 'Thiaguinho',  thumb:'https://mundorh.com.br/wp-content/uploads/2024/06/Cultivando-Alegria-A-Arte-de-Criar-uma-Familia-Feliz-Mundo-RH.png' },
    { id: 'S_SXl-ETXRI',  title: 'Turma do Pagode', thumb:'https://mundorh.com.br/wp-content/uploads/2024/06/Cultivando-Alegria-A-Arte-de-Criar-uma-Familia-Feliz-Mundo-RH.png' },
    { id: 'z9XzfN4mhEw',  title: 'Dilsinho',  thumb:'https://mundorh.com.br/wp-content/uploads/2024/06/Cultivando-Alegria-A-Arte-de-Criar-uma-Familia-Feliz-Mundo-RH.png' },
  ];

  

  selectVideo(video: any): void {
    this.selectedVideo = video;
  }

  ngOnInit(): void {
    const screenWidth = window.innerWidth;

  if (screenWidth <= 480) { // celular
    this.playerWidth = 370;
    
  } else if (screenWidth <= 768) { // tablet
    this.playerWidth = 480;
    
  } else { // desktop
    this.playerWidth = 640;
    
  }
  }
}
