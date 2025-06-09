import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  asunto: string = '';
  mensaje: string = '';

  enviarCorreo(): void {
    const email = 'Voltandride@gmail.com'; // ← Cambia a tu correo real
    const asuntoEncoded = encodeURIComponent(this.asunto);
    const mensajeEncoded = encodeURIComponent(this.mensaje);

    const mailtoLink = `mailto:${email}?subject=${asuntoEncoded}&body=${mensajeEncoded}`;

    window.location.href = mailtoLink;
  }
}
