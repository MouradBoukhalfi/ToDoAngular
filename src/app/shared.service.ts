import { Injectable, Output } from '@angular/core';
import { Film } from './film';

@Injectable()
export class SharedService {

  constructor() { }

  private favourites: Film[] = [];
  private films:Film[] = [];

  /*Fonction permettant l'ajout aux favoris avec vérification que l'élément n'est pas déjà en favoris*/
  addToFavourites(film: Film){
    if (!this.favourites.includes(film)) {
      this.favourites.push(film);
    }
  }
  /*Fonction retournant la liste des favoris*/
  getFavourites(){
      return this.favourites;
  }
  /*Fonction permettant la suppression d'un élément des favoris lorsqu'on clique sur Delete dans la page home*/
  deleteFavourite(id){
    this.favourites = this.favourites.filter(film => film.id !== id);
  }
  /*Fonction permettant la suppression d'un élément de la liste des favoris dans la page favoris*/
  RemoveFromFav(id){
    let index = this.favourites.findIndex(film => film.id == id);
    this.favourites.splice(index,1);
  }
  /*Fonction permettant l'ajout des films dans la liste des films*/
  addToFilms(film: Film){
    this.films.push(film);
  }
  /*Fonction retournant la liste des films*/
  getFilms(){
      return this.films;
  }
  /*Fonction permettant la suppression d'un élément dans la liste des films de la page Home*/
  deleteFilms(id){
    let index = this.films.findIndex(film => film.id == id);
    this.films.splice(index,1);
  }
}
