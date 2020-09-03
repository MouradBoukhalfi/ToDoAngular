import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Film } from '../film';
import  Data   from '../../assets/data.json';

@Component({ 
    selector: 'app-home', 
    templateUrl: './home.component.html', 
    styleUrls: ['./home.component.css'] 
}) 
export class HomeComponent implements OnInit { 
    /* Un tableau vide dans lequel vont être ajoutés les entrées.*/
    public films: Film[] = [];
    public newFilmTitle: string;

    constructor(private sharedService: SharedService) { }

    ngOnInit(){
        this.films = this.sharedService.getFilms();
    }
     /* Ajout des élèments en entrée dans la liste avec vérification que l'élément est contenu dans la base de données*/
    public addToList() {
        for(let i = 0; i < Data.length; i++){
            if(this.newFilmTitle === Data[i].title){
                this.sharedService.addToFilms({id: this.films.length, title: Data[i].title,year:Data[i].year,type:Data[i].type});
                this.newFilmTitle='';
                break;
            }
        }
    }
    /*Fonction permettant l'ajout d'un element à la liste des favoris*/
    addToFavourites(film: Film){
        this.sharedService.addToFavourites(film);
    }
    /*Fonction permettant la suppression d'une élement de la liste des films et de favoris*/
    public deleteTask(id) { 
        this.sharedService.deleteFilms(id);
        this.sharedService.deleteFavourite(id);
    }

}
  
