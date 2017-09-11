import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  productos_filtrado:any[] = [];
  cargando_productos:boolean = true;

  constructor( public http:Http ) {
    this.cargarProductos();
  }

  public cargarProductos() {
      this.cargando_productos = true;

      let promesa = new Promise ((resolve, reject)=>{
        this.http.get('https://paginaweb-9887d.firebaseio.com/productos_idx.json')
        .subscribe( data => {
          // console.log(data.json());
          // setTimeout(()=>{
            this.cargando_productos = false;
            this.productos = data.json();
            resolve();
          // }, 1500 );
        });
      });

      return promesa;
  }

  public cargarProducto( cod:string ) {
    return this.http.get(`https://paginaweb-9887d.firebaseio.com/productos/${cod}.json`);
  }

  public buscar_producto( termino:string ) {
    // console.log("Buscando producto");
    // console.log(this.productos.length);

    if (this.productos.length === 0) {
        this.cargarProductos().then(()=>{
          // termino la carga por el promesa del resolve anterior
        })
      } else {
        this.filtrar_productos(termino);
      }
  }

  private filtrar_productos(termino:string){

    this.productos_filtrado = [];

    termino = termino.toLowerCase();

    this.productos.forEach(prod => {
      if (prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0) {
          this.productos_filtrado.push(prod);
          //console.log(prod);
      }
      //console.log(prod);
    })
  }

}
