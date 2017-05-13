import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import{Favorito} from "../../models/favorito";
import {FavoritoService} from "../../services/favorito.service";
@Component({
  selector: 'app-fav-detail',
  templateUrl: './fav-detail.component.html',
  styleUrls: ['./fav-detail.component.scss'],
  providers: [FavoritoService]
})
export class FavDetailComponent implements OnInit  {

  public errorMessage;
  public favorito:Favorito;

  constructor(
    private FavoritoService:FavoritoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {

   }

  ngOnInit(){
    this.getFavorito();
  }

  getFavorito(){
    this._route.params.forEach((params: Params)=>{
      let id= params['id'];

      this.FavoritoService.getFavorito(id).subscribe(
        response =>{
          this.favorito= response.favorito;
          console.log(response);
          if(!this.favorito){
              this._router.navigate(['/']);
          }
        },
        error => {
        console.log(this.errorMessage)
        alert("Error en la petición");


        }
     ) 
    });
  }

}
