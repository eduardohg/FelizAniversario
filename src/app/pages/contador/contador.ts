import { Component } from '@angular/core';
import { Menu } from '../../shared/menu/menu';
import { Countdown } from "../../countdown/countdown";
import { Carousel } from "../../carousel/carousel";


@Component({
  selector: 'app-contador',
  imports: [Menu, Countdown, Carousel],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {
  images = [
    '/assets/profile.jpg',
    '/assets/profile.jpg',
    '/assets/profile.jpg',
    '/assets/profile.jpg',
    
  ];

  selected: string | null = null;

  open(img: string) {
    this.selected = img;
  }
}
