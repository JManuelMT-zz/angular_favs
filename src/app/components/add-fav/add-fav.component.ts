import { Component, OnInit } from '@angular/core';
import{ Router, ActivatedRoute, Params } from '@angular/router';

import {Favorito} from "../../models/favorito";
import {FavoritoService} from "../../services/favorito.service";

@Component({
  selector: 'app-add-fav',
  templateUrl: './add-fav.component.html',
  styleUrls: ['./add-fav.component.scss'],
  providers: [FavoritoService]
})
export class AddFavComponent implements OnInit {
 public titleSection:string;
 public favorito:Favorito;
 public errorMessage:any;

  constructor(private _favoritoService:FavoritoService,
              private _route: ActivatedRoute,
              private _router:Router
  ) { 
    
    this.titleSection="Crear Favorito";
  }

  ngOnInit() {
    this.favorito = new Favorito("","","", "");
  }

  onSubmit(){

    this._favoritoService.addFavorito(this.favorito).subscribe(
      response=> {


        if(!response.favorito){
          alert("Error en el servidor");
        }
        else{
          this.favorito= response.favorito;
          this._router.navigate(['/favdetail/'+this.favorito._id]);
         console.log(this.favorito)
        }
        
      },
      error=> {
        this.errorMessage= <any>error;

        if(this.errorMessage!=null){
          console.log(this.errorMessage);
          alert("Error en la petición");
        }
      }
    );
    console.log(this.favorito);
  }
}
