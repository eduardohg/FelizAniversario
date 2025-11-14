import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';



@Component({
  selector: 'app-slider',
  imports: [MatSliderModule],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class Slider  {
  formatLabel(value: number): string {
    if (value >= 1000) {
      return '0';
    }

    return `0`;
  }
}
