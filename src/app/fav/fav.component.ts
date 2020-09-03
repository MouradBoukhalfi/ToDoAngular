import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Film } from '../film';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit{
  constructor(private sharedService: SharedService) { }

  favourites: Film[];

  ngOnInit() {
      this.favourites = this.sharedService.getFavourites();
  }
  /*REVOIR LA FONCTION DELETE DES FAVORIS*/
  Remove(id){
    this.sharedService.RemoveFromFav(id);
  }
}



