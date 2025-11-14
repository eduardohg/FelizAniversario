import { Component } from '@angular/core';
import { Menu } from '../../shared/menu/menu';
import { Songs } from "../../songs/songs";
import { Carousel } from "../../carousel/carousel";

@Component({
  selector: 'app-home',
  imports: [Menu, Songs],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
