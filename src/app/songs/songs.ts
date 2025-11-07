import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-songs',
  imports: [],
  templateUrl: './songs.html',
  styleUrl: './songs.css',
})
export class Songs {

  DataHoje: Date = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' })
  );

  parseDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split('/').map(Number);
    console.log("Teste");
    return new Date(new Date(year, month - 1, day).toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' }));
  }

  isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }
  
  songs: { link: string; data: string; safeLink?: SafeResourceUrl }[] = [
    
    {link:'https://open.spotify.com/embed/track/3IKhygLEdUOkDmewM6iFBj?utm_source=generator&theme=0', data:"08/11/2025"},
    {link:'https://open.spotify.com/embed/track/1CZuOispW1VEcJvSzWBStB?utm_source=generator&theme=0', data:"07/11/2025"},
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Converte todos os links para SafeResourceUrl
    this.songs = this.songs.map(song => ({
      ...song,
      safeLink: this.sanitizer.bypassSecurityTrustResourceUrl(song.link)
    }));
  }

}
