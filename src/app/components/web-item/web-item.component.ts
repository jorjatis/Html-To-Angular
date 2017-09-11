import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-web-item',
  templateUrl: './web-item.component.html'
})
export class WebItemComponent {

  producto:any = undefined;
  cod:string = undefined;

  constructor( private route:ActivatedRoute, private _ps:ProductosService ) {

    route.params.subscribe( parametros=> {
      // console.log(parametros);
      // console.log(parametros['id']);

      _ps.cargarProducto(parametros['id']).subscribe(data =>{
        // console.log(data.json());
        this.cod = parametros['id'];
        this.producto = data.json();
        // console.log(this.producto);
      })
    });

  }

}
