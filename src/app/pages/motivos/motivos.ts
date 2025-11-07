import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Menu } from '../../shared/menu/menu';

@Component({
  selector: 'app-motivos',
  imports: [Menu],
  templateUrl: './motivos.html',
  styleUrl: './motivos.css',
})
export class Motivos {

  
  DataHoje: Date = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' })
  );

  parseDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
  }

  motivos = [
  { texto: "Seu sorriso ilumina meu dia.", data: "06/11/2025" },
  { texto: "Você me faz querer ser uma pessoa melhor.", data: "07/11/2025" },
  { texto: "A forma como você se importa com os outros.", data: "20/11/2025" },
  { texto: "Seu abraço é meu lugar favorito.", data: "21/11/2025" },
  { texto: "Você entende até o que eu não digo.", data: "22/11/2025" },
  { texto: "Seu senso de humor me encanta.", data: "23/11/2025" },
  { texto: "Você é linda por dentro e por fora.", data: "24/11/2025" },
  { texto: "Adoro o som da sua risada.", data: "25/11/2025" },
  { texto: "Você tem o coração mais doce que já conheci.", data: "26/11/2025" },
  { texto: "Adoro o jeito como seus olhos brilham quando está feliz.", data: "27/11/2025" },
  { texto: "Você é minha paz em meio ao caos.", data: "28/11/2025" },
  { texto: "Com você, tudo parece possível.", data: "29/11/2025" },
  { texto: "Seu carinho cura qualquer dia ruim.", data: "30/11/2025" },
  { texto: "Você me inspira todos os dias.", data: "01/12/2025" },
  { texto: "A maneira como fala de quem ama me emociona.", data: "02/12/2025" },
  { texto: "Você é minha melhor amiga e meu amor.", data: "03/12/2025" },
  { texto: "Adoro nossos momentos bobos juntos.", data: "04/12/2025" },
  { texto: "Seu toque é calmante e mágico.", data: "05/12/2025" },
  { texto: "Você tem a alma mais linda do mundo.", data: "06/12/2025" },
  { texto: "Sua presença transforma tudo.", data: "07/12/2025" },
  { texto: "Adoro como você me apoia em tudo.", data: "08/12/2025" },
  { texto: "Você é a razão do meu sorriso constante.", data: "09/12/2025" },
  { texto: "A forma como você sonha grande me motiva.", data: "10/12/2025" },
  { texto: "Você faz qualquer lugar parecer lar.", data: "11/12/2025" },
  { texto: "Adoro a sua espontaneidade.", data: "12/12/2025" },
  { texto: "Seu jeito único de ver o mundo.", data: "13/12/2025" },
  { texto: "Você me faz acreditar no amor verdadeiro.", data: "14/12/2025" },
  { texto: "Adoro quando você me chama pelo meu apelido.", data: "15/12/2025" },
  { texto: "Cada dia com você é uma nova aventura.", data: "16/12/2025" },
  { texto: "Você é meu porto seguro.", data: "17/12/2025" },
  { texto: "A forma como você fala com carinho com os animais.", data: "18/12/2025" },
  { texto: "Seu cheirinho é inesquecível.", data: "19/12/2025" },
  { texto: "Você é o melhor presente que a vida me deu.", data: "20/12/2025" },
  { texto: "Adoro quando você segura minha mão.", data: "21/12/2025" },
  { texto: "Você é simplesmente incrível.", data: "22/12/2025" },
  { texto: "Te amo porque você é você. ❤️", data: "23/12/2025" }
];
}
