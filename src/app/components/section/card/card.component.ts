import { Component } from '@angular/core';


interface CardItem {
  quantity: number; 
  price: number; 

}
@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  cart : { [name: string]: CardItem } ={};

  get total(): number {
     return Object.values(this.cart).reduce((sum, item) => sum + item.quantity * item.price, 0);
  }

   get cartCount(): number {
    return Object.values(this.cart).reduce((sum, item) => sum + item.quantity, 0);
  }

  addToCart(name: string, price: number) {
    if (!this.cart[name]) {
      this.cart[name] = { quantity: 1, price };
    } else {
      this.cart[name].quantity += 1;
    }
  }

  removeFromCart(name: string) {
    if (this.cart[name].quantity > 1) {
      this.cart[name].quantity -= 1;
    } else {
      delete this.cart[name];
    }
  }

  clearCart() {
    this.cart = {};
  }

  generateMessage(): string {
    let message = 'Hola, me gustaría pedir lo siguiente:%0A';
    for (const [name, item] of Object.entries(this.cart)) {
      message += `%0A• ${item.quantity} x ${name} - ${(item.price * item.quantity).toFixed(2)}€`;
    }
    message += `%0A%0ATotal: ${this.total.toFixed(2)}€`;
    return message;
  }

  sendWhatsAppOrder() {
    if (this.total === 0) {
      alert('Tu carrito está vacío.');
      return;
    }

    const message = encodeURIComponent(this.generateMessage());
    const phone = '34633600225';
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
    this.clearCart();
  }
}