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
    
    {link:'https://open.spotify.com/embed/track/4r6eNCsrZnQWJzzvFh4nlg', data:'14/11/2025'},
  {link:'https://open.spotify.com/embed/track/5xTtaWoae3wi06K5WfVUUH', data:'19/11/2025'},
  {link:'https://open.spotify.com/embed/track/3IKhygLEdUOkDmewM6iFBj', data:'20/11/2025'},
  {link:'https://open.spotify.com/embed/track/27tNWlhdAryQY04Gb2ZhUI', data:'21/11/2025'},
  {link:'https://open.spotify.com/embed/track/1p80LdxRV74UKvL8gnD7ky', data:'22/11/2025'},
  {link:'https://open.spotify.com/embed/track/4G7bbgD2DHORU4frrWoCXp', data:'23/11/2025'},
  {link:'https://open.spotify.com/embed/track/5jzKL4BDMClWqRguW5qZvh', data:'24/11/2025'},
  {link:'https://open.spotify.com/embed/track/1vrd6UOGamcKNGnSHJQlSt', data:'25/11/2025'},
  {link:'https://open.spotify.com/embed/track/2m1hi0nfMR9vdGC8UcrnwU', data:'26/11/2025'},
  {link:'https://open.spotify.com/embed/track/4jbmgIyjGoXjY01XxatOx6', data:'27/11/2025'},
  {link:'https://open.spotify.com/embed/track/0V3wPSX9ygBnCm8psDIegu', data:'28/11/2025'},
  {link:'https://open.spotify.com/embed/track/2KGv51jgAz8OTjNPyRryfq', data:'29/11/2025'},
  {link:'https://open.spotify.com/embed/track/455AfCsOhhLPRc68sE01D8', data:'30/11/2025'},
  {link:'https://open.spotify.com/embed/track/3GCL1PydwsLodcpv0Ll1ch', data:'01/12/2025'},
  {link:'https://open.spotify.com/embed/track/7grde5XigwdwcZRcd79jFV', data:'02/12/2025'},
  {link:'https://open.spotify.com/embed/track/1y4eb6hmAvsqlDOl3fx9kk', data:'03/12/2025'},
  {link:'https://open.spotify.com/embed/track/4Lwm0XFseZ09OBdmUJlcYp', data:'04/12/2025'},
  {link:'https://open.spotify.com/embed/track/3CfItCFqI7uuPuE2whC4Rx', data:'05/12/2025'},
  {link:'https://open.spotify.com/embed/track/6tS3XVuOyu10897O3ae7bi', data:'06/12/2025'},
  {link:'https://open.spotify.com/embed/track/273dCMFseLcVsoSWx59IoE', data:'07/12/2025'},
  {link:'https://open.spotify.com/embed/track/1CZuOispW1VEcJvSzWBStB', data:'08/12/2025'},
  {link:'https://open.spotify.com/embed/track/005lwxGU1tms6HGELIcUv9', data:'09/12/2025'},
  {link:'https://open.spotify.com/embed/track/4y5bvROuBDPr5fuwXbIBZR', data:'10/12/2025'},
  {link:'https://open.spotify.com/embed/track/0iOu4s8w3pE9vbpb1SHXsL', data:'11/12/2025'},
  {link:'https://open.spotify.com/embed/track/3oL3XRtkP1WVbMxf7dtTdu', data:'12/12/2025'},
  {link:'https://open.spotify.com/embed/track/7EgRqkvNThCaCJB0lhyZH5', data:'13/12/2025'},
  {link:'https://open.spotify.com/embed/track/3a1lNhkSLSkpJE4MSHpDu9', data:'14/12/2025'},
  {link:'https://open.spotify.com/embed/track/009ImBOrIUlWgla8U05RAC', data:'15/12/2025'},
  {link:'https://open.spotify.com/embed/track/04PlQmD52bJDdRsKEgG99I', data:'16/12/2025'},
  {link:'https://open.spotify.com/embed/track/2uqYupMHANxnwgeiXTZXzd', data:'17/12/2025'},
  {link:'https://open.spotify.com/embed/track/4kkeuVl6gF3RMqE4Nn5W3E', data:'18/12/2025'},
  {link:'https://open.spotify.com/embed/track/1BxfuPKGuaTgP7aM0Bbdwr', data:'19/12/2025'},
  {link:'https://open.spotify.com/embed/track/6v46jy0bNem1EIbjtfJyee', data:'20/12/2025'},
  {link:'https://open.spotify.com/embed/track/1rUQmXEy41tXwHIKFECNTa', data:'21/12/2025'},
  {link:'https://open.spotify.com/embed/track/11tHsWgOl4WyEg7MdW15yy', data:'22/12/2025'},
  {link:'https://open.spotify.com/embed/track/1pU3C7v8zcEEPkdqaKSEi6', data:'23/12/2025'}

    
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
