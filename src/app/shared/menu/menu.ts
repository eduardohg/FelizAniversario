import { Component } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [MenuItem],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class Menu {
  menuAberto = false;
  dropdownAberto = false;
}
