import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando_productos:boolean = true;

  constructor( public http:Http ) {
    this.cargarProductos();
  }

  public cargarProductos() {
      this.cargando_productos = true;

      this.http.get('https://paginaweb-9887d.firebaseio.com/productos_idx.json')
      .subscribe( data => {
        console.log(data.json());
        this.cargando_productos = false;
      });
  }

}
