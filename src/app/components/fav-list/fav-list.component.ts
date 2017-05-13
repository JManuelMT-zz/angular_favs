import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {FavoritoService} from '../../services/favorito.service';
import{Favorito} from '../../models/favorito';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.scss'],
  providers: [FavoritoService]
})
export class FavListComponent  implements OnInit{
  // public title:string;
  // public favoritos: Array<string>;
  // public favoritosVisibles: boolean;
  // public color:string;
  public title: string;
  public loading:boolean;
  public errorMessage;
  public favoritos:Favorito[];
  public confirmado;
  constructor(public  _favoritoService:FavoritoService) {
    
    // this.title = "Listado de marcadores";
    // this.favoritos = ["google.com", "facebook.com", "platzi.com", "wikipedia.com"]
    // this.favoritosVisibles = true;*/
    this.loading= true;
    
  }

  ngOnInit(){
    console.log('FavListComponent cargado');
    this.getFavoritos();
    
  }
  // public showFavs(){
  //   this.favoritosVisibles = true;
  // }

  // public hideFavs(){
  //   this.favoritosVisibles = false;
  // }

  // public changecolor(){
  //   this.color="red";
  // }

  getFavoritos(){
    this._favoritoService.getFavoritos().subscribe(
      result =>{
        
        this.favoritos= result.favoritos;
        console.log(result);

        
        if(!this.favoritos){
          alert("Error, no se encontraron favoritos");
        }
        else{
          this.loading= false;
        }
      },
      error => {
        this.errorMessage= error;

        if(this.errorMessage!=null){
          console.log(this.errorMessage);
          alert("Error en la petición");
        }
      }
    )
  }
  deleteFav(id: string){
    this._favoritoService.deleteFavorito(id).subscribe(
      response =>{
        if(!response.message){
          alert("Error en la petición");
        }
        else{
          this.getFavoritos();
        }
      },
      error =>{

      }
    )
  }

  onDeleteConfirm(id){
    this.confirmado= id;
  }

  onCancelConfirm(id){
    this.confirmado = null;
  }

}
