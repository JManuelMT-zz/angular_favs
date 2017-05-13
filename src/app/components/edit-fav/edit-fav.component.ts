import { Component, OnInit, Input } from '@angular/core';
import{ Router, ActivatedRoute, Params } from '@angular/router';

import {Favorito} from "../../models/favorito";
import {FavoritoService} from "../../services/favorito.service";
import {AddFavComponent} from "../add-fav/add-fav.component";
@Component({
  selector: 'app-edit-fav',
  templateUrl: '../add-fav/add-fav.component.html',
  styleUrls: ['./edit-fav.component.scss'],
  providers: [FavoritoService]
})
export class EditFavComponent implements OnInit {


 public titleSection:string;
 public favorito:Favorito;
 public errorMessage:any;


  constructor(private _favoritoService:FavoritoService,
              private _route: ActivatedRoute,
              private _router:Router
  ) { 
    
    this.titleSection="Editar Favorito";
  }

  ngOnInit() {
    this.favorito = new Favorito("","","", "");
    this.getFavorito();
  }

  getFavorito(){
    this._route.params.forEach((params: Params)=>{
      let id= params['id'];

      this._favoritoService.getFavorito(id).subscribe(
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

  

    onSubmit(){
      this._route.params.forEach((params: Params)=>{
        let id=params['id'];
        this._favoritoService.editFavorito(id,this.favorito).subscribe(
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
    
    )}
    
}    
   
  

