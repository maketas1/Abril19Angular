import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-comentarios-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './comentarios-hijo.component.html',
  styleUrl: './comentarios-hijo.component.css'
})
export class ComentariosHijoComponent {
  comentario:string = "";

  @Output()
  llamadaPadre:EventEmitter<string> = new EventEmitter();

  enviarPadre() {
    this.llamadaPadre.emit(this.comentario);
  }
}
