import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'entree' | 'plat' | 'dessert';
}
@Component({
  selector: 'app-menu',
  imports: [NgClass],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  dishes: Dish[]=[
    { id: 1, name: 'Beignets haricots', description: 'Beignets de haricots servis avec une bouillie de maïs sucrée',
    price: 1500, category: 'entree' },
    { id: 2, name: 'Folong', description: 'Feuilles d\'épinards locales sautées avec huile de palme et poisson fumé',
    price: 2000, category: 'entree' },
    { id: 3, name: 'Ndolè aux crevettes', description: 'Feuilles de ndolé mijotées aux arachides, viande et crevettes séchées',
    price: 5500, category: 'plat' },
    { id: 4, name: 'Poulet DG', description: 'Poulet sauté avec plantains mûrs, légumes et épices',
    price: 6000, category: 'plat' },
    { id: 5, name: 'Eru aux écailles', description: 'Feuilles d\'eru cuisinées avec écorce de waterleaf, huile de palme et viande',
    price: 5000, category: 'plat' },
    { id: 6, name: 'Mbongo Tchobi', description: 'Sauce noire aux épices sauvages',
    price: 5500, category: 'plat' },
    { id: 7, name: 'Fufu et sauce jaune', description: 'Pâte de manioc/maïs accompagnée d\'une sauce jaune au poisson fumé' ,
      price: 2500, category: 'plat'},
    { id: 8, name: 'Pain perdu coco', description: 'Brioche, lait de coco, miel',
    price: 2500, category: 'dessert' },
    { id: 9, name: 'Bananes flambées', description: 'Plantain caramélisé, rhum',
    price: 2000, category: 'dessert' },
  ];
  
}
