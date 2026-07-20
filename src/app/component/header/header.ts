import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  links = ['Acceuil', 'Menu', 'Témoignages', 'Horaires', 'Contact']; //liste des liens
  activeLink='Acceuil'; //lien actif par défaut
  isMenuOpen=false; //état du menu burger
  isMobile=window.innerWidth<760; //détecter si l'écran est mobile

  //METHODES

  toggleMenu(){ //ouvrir/fermer le menu burger
    this.isMenuOpen=!this.isMenuOpen;
    
  }
  setActive(link:string){ //définir le lien actif ie sur qui on va appliquer la classe active quand le lien sera cliquer
    this.activeLink=link;
    this.isMenuOpen=false; //fermer le menu burger après avoir cliqué sur un lien
  }
}
