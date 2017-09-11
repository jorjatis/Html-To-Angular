import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

// 1. Para escribir el año automaticamente en el footer.component.html
anio:number = new Date().getFullYear();

}
