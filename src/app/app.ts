import { Component, signal } from '@angular/core';
import { Header } from "./component/header/header";
import { Hero } from "./component/hero/hero";
import { Footer } from './component/footer/footer';
import { Menu } from './component/menu/menu';
import { Temoignages } from './component/temoignages/temoignages';
import { Horaires } from './component/horaires/horaires';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header,Hero,Menu,Temoignages,Horaires, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('devoirWeek-end');
}
