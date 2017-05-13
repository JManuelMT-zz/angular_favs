export class Favorito{
   
    constructor(
       public _id:string,
       public title:string, 
       public url:string,
       public description: string
       
    ){
        /*Un servicio en angular 2 es una clase (objeto) que tiene una serie de
        metodos y esta relacionado con una entidad, como la entidad favorito */ 
    }
}