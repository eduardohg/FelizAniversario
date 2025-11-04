import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countdown',
  imports: [CommonModule],
  templateUrl: './countdown.html',
  styleUrl: './countdown.css',
})
export class Countdown {
  private timerId: any;
  readonly futureDate = new Date(new Date(2025, 11, 23, 0,0,0,0)); // Example: 20 seconds from now

  secondsRemaining = signal(0);

  ngOnInit(): void {
    this.timerId = setInterval(() => {
      const diff = Math.floor((this.futureDate.getTime() - new Date().getTime()) / 1000);
      if (diff <= 0) {
        this.secondsRemaining.set(0);
        clearInterval(this.timerId);
      } else {
        this.secondsRemaining.set(diff);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timerId);
  }

  displayTime(): string {
    const minutes = Math.floor(this.secondsRemaining() / 60);
    const days = Math.floor(minutes / 1440);
    const hours = Math.floor((minutes % 1440) / 60);
    const seconds = this.secondsRemaining() % 60;
    return `${days}dias, ${hours}:${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
