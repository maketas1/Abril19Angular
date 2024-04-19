import { Component } from '@angular/core';
import { ComentariosHijoComponent } from '../comentarios-hijo/comentarios-hijo.component';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [ComentariosHijoComponent],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {
  comentarios: string [] = [];
  reciveDato(dato:string){
    this.comentarios.push(dato);
  }
}
