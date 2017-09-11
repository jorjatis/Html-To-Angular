import { Component } from '@angular/core';

import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

// Para escribir el año automaticamente en el footer.component.html
anio:number = new Date().getFullYear();

constructor ( public _is:InformacionService ) {

}

}
