import { Component } from '@angular/core';
interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
}
@Component({
  selector: 'app-temoignages',
  imports: [],
  templateUrl: './temoignages.html',
  styleUrl: './temoignages.css',
})

export class Temoignages{
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Aïssatou M.',
      rating: 4,
      text: 'Très bon accueil et le Poulet DG était délicieux. Juste un peu d\'attente le week-end, mais ça vaut le coup.'
    },
    {
      id: 2,
      name: 'Jean-Pierre K.',
      rating: 4,
      text: 'Ambiance chaleureuse et plats généreux, le meilleur pour la dégustation. Je recommande.'
    },
    {
      id: 3,
      name: 'Christelle E.',
      rating: 5,
      text: 'Cadre magnifique, cuisine authentique, prix raisonnables.'
    }
  ];
  // Helper : génère un tableau de la longueur de la note
  // pour afficher N étoiles avec @for
  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
