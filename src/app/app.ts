import { Component, signal } from '@angular/core';
import { Header } from "./component/header/header";
import { Hero } from "./component/hero/hero";
import { Footer } from './component/footer/footer';
import { Menu } from './component/menu/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header,Hero,Menu ,Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('devoirWeek-end');
}
