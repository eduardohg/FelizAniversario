import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countdown',
  imports: [CommonModule],
  templateUrl: './countdown.html',
  styleUrl: './countdown.css',
})
export class Countdown {
  
  readonly futureDate = new Date(new Date(2025, 11, 23, 0,0,0,0)); // Example: 20 seconds from now
  readonly now = new Date().getTime();
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  intervalId: any;

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startCountdown() {
    this.updateCountdown(); // chama 1x imediato

    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.futureDate.getTime() - now;

    if (distance < 0) return;

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
}
