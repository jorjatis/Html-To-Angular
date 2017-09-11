import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-web-item',
  templateUrl: './web-item.component.html'
})
export class WebItemComponent {

  constructor( private route:ActivatedRoute ) {

    route.params.subscribe( parametros=> {
      console.log(parametros);
      console.log(parametros['id']);
    });

  }

}
