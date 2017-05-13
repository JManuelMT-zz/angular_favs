import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Favorito} from '../models/favorito';
import { environment } from "../../environments/environment";

/* Injectable es un objeto que permite 
inyectar clases, es decir, que este servicio pueda ser inyectad
o usado facilmente en otros lugares */

@Injectable()
export class FavoritoService{
    public url:string;
    constructor(private _http:Http){
         environment.production==false? this.url = 'http://localhost:3678/api/':this.url='https://api-node-favs.herokuapp.com/api/';

    }

    getFavoritos(){
        return this._http.get(this.url+'favoritos')
                            .map(res=>res.json());
    }

    getFavorito(id:string){
         return this._http.get(this.url+'favorito/'+id)
                            .map(res=>res.json());
    }


    addFavorito(favorito:Favorito){
        let json= JSON.stringify(favorito);
        let params= json;
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url+'favorito', params, {headers: headers})
                            .map(res=>res.json());

    }

    editFavorito(id, favorito:Favorito){
        let json= JSON.stringify(favorito);
        let params= json;
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.put(this.url+'favorito/'+id, params, {headers: headers})
                            .map(res=>res.json());

    }

    deleteFavorito(id:string){
         return this._http.delete(this.url+'favorito/'+id)
                            .map(res=>res.json());
    }
    
}

