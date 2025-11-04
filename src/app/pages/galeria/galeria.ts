import { Component } from '@angular/core';
import { Menu } from '../../shared/menu/menu';
import { Carousel } from '../../carousel/carousel';

@Component({
  selector: 'app-galeria',
  imports: [Menu, Carousel],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css',
})
export class Galeria {

}
