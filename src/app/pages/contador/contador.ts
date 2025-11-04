import { Component } from '@angular/core';
import { Menu } from '../../shared/menu/menu';
import { Countdown } from "../../countdown/countdown";

@Component({
  selector: 'app-contador',
  imports: [Menu, Countdown],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {

}
