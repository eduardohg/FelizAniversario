import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  images = [
    'assets/1.jpeg',
    'assets/2.jpeg',
    'assets/3.jpeg',
    'assets/4.jpeg',
    'assets/5.jpeg',
    'assets/6.jpeg',
    'assets/7.jpeg',
    'assets/8.jpeg',
    'assets/9.jpeg',
    'assets/10.jpeg',
    'assets/11.jpeg',
    'assets/12.jpeg',
    'assets/13.jpeg',
    'assets/14.jpeg',
    'assets/15.jpeg',
    'assets/16.jpeg',
    'assets/17.jpeg',
    'assets/18.jpeg',
    'assets/20.jpeg',
    'assets/21.jpeg',
    'assets/22.jpeg',
    'assets/23.jpeg',
    'assets/24.jpeg',
    'assets/25.jpeg',
    'assets/26.jpeg',
    'assets/27.jpeg',
    'assets/28.jpeg',
    'assets/29.jpeg',
    'assets/30.jpeg',
    'assets/31.jpeg',
    'assets/32.jpeg',
    'assets/33.jpeg',
    'assets/34.jpeg',
    'assets/35.jpeg',
    'assets/36.jpeg',
    'assets/37.jpeg',
    'assets/38.jpeg',
    'assets/39.jpeg',
    'assets/40.jpeg',
    'assets/41.jpeg',
    'assets/42.jpeg',
    'assets/43.jpeg',
    'assets/44.jpeg',
    'assets/45.jpeg',
    
  ];

  current = signal(0);

  autoSlide: any; // <- guarda o interval

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.autoSlide = setInterval(() => this.next(true), 4000);
  }

  resetTimer() {
    clearInterval(this.autoSlide);
    this.startTimer();
  }

  next(fromAuto = false) {
    this.current.update(c => (c + 1) % this.images.length);

    // se não foi o autoSlide que chamou, reseta o timer
    if (!fromAuto) this.resetTimer();
  }

  prev() {
    this.current.update(c => (c === 0 ? this.images.length - 1 : c - 1));
    this.resetTimer();
  }

}
