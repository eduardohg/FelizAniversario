import { Component } from '@angular/core';
import { Menu } from '../../shared/menu/menu';
import { Carousel } from '../../carousel/carousel';
import { Motivos } from "../motivos/motivos";

@Component({
  selector: 'app-galeria',
  imports: [Menu, Motivos],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css',
})
export class Galeria {

}
