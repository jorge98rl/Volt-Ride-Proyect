import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';


declare var bootstrap: any;

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [CommonModule],
  styleUrls: ['./main.component.scss'],
  standalone: true,
})
export class MainComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.enableTooltips();
  }
  cart: CartItem[] = [];

  products = [
    {
      name: 'Ecoxtrem Bison GT BLUE/WHITE',
      priceWeb: 599,
      price: 470,
      image: 'assets/patinete-2.webp',
      fullImage: 'assets/patinete-2.webp',
      descId: 'desc-bison-gt',
      description: `
        <p><strong>EcoXtrem Bison GT</strong> es un patinete eléctrico de alto rendimiento,
          homologado por la <strong>Dirección General de Tráfico (DGT)</strong>, diseñado para
          quienes buscan potencia, autonomía y comodidad en sus desplazamientos urbanos y
          recreativos.</p>

        <hr>

        <h5>🔧 Especificaciones técnicas</h5>
        <ul>
          <li><strong>Motor:</strong> 800 W sin escobillas</li>
          <li><strong>Batería:</strong> Litio de 48 V y 13 Ah</li>
          <li><strong>Velocidad máxima:</strong> 25 km/h (limitada por normativa DGT); hasta 45 km/h en áreas privadas</li>
          <li><strong>Autonomía:</strong> hasta 40 km por carga</li>
          <li><strong>Tiempo de carga:</strong> 4 a 6 horas</li>
          <li><strong>Peso:</strong> 23 kg</li>
          <li><strong>Capacidad de carga:</strong> hasta 120 kg</li>
          <li><strong>Dimensiones:</strong> 114 × 61 × 110 cm</li>
          <li><strong>Ruedas:</strong> 10” con cámara de aire, resistentes a pinchazos</li>
          <li><strong>Suspensión:</strong> doble delantera y trasera</li>
          <li><strong>Frenos:</strong> de disco, delanteros y traseros</li>
          <li><strong>Pantalla:</strong> LCD con velocidad, batería y kilometraje</li>
          <li><strong>Iluminación:</strong> LED frontal, tiras LED laterales, reflectantes</li>
          <li><strong>Encendido:</strong> sistema de doble llave</li>
          <li><strong>Plegable:</strong> sí, con plegado rápido</li>
          <li><strong>Homologación:</strong> cumple normativa DGT para vías públicas</li>
        </ul>
      `,
    },
    {
      name: 'Ecoxtrem Bison GT BLUE/GREY',
      priceWeb: 599,
      price: 470,
      image: 'assets/patinete-3.webp',
      fullImage: 'assets/patinete-3.webp',
      descId: 'desc-bison-gt',
      description: `
        <p><strong>EcoXtrem Bison GT</strong> es un patinete eléctrico de alto rendimiento,
          homologado por la <strong>Dirección General de Tráfico (DGT)</strong>, diseñado para
          quienes buscan potencia, autonomía y comodidad en sus desplazamientos urbanos y
          recreativos.</p>

        <hr>

        <h5>🔧 Especificaciones técnicas</h5>
        <ul>
          <li><strong>Motor:</strong> 800 W sin escobillas</li>
          <li><strong>Batería:</strong> Litio de 48 V y 13 Ah</li>
          <li><strong>Velocidad máxima:</strong> 25 km/h (limitada por normativa DGT); hasta 45 km/h en áreas privadas</li>
          <li><strong>Autonomía:</strong> hasta 40 km por carga</li>
          <li><strong>Tiempo de carga:</strong> 4 a 6 horas</li>
          <li><strong>Peso:</strong> 23 kg</li>
          <li><strong>Capacidad de carga:</strong> hasta 120 kg</li>
          <li><strong>Dimensiones:</strong> 114 × 61 × 110 cm</li>
          <li><strong>Ruedas:</strong> 10” con cámara de aire, resistentes a pinchazos</li>
          <li><strong>Suspensión:</strong> doble delantera y trasera</li>
          <li><strong>Frenos:</strong> de disco, delanteros y traseros</li>
          <li><strong>Pantalla:</strong> LCD con velocidad, batería y kilometraje</li>
          <li><strong>Iluminación:</strong> LED frontal, tiras LED laterales, reflectantes</li>
          <li><strong>Encendido:</strong> sistema de doble llave</li>
          <li><strong>Plegable:</strong> sí, con plegado rápido</li>
          <li><strong>Homologación:</strong> cumple normativa DGT para vías públicas</li>
        </ul>
      `,
    },
    {
      name: 'Ecoxtrem M41 ORANGE/BLACK',
      priceWeb: 699,
      price: 550,
      image: 'assets/patinete-4.webp',
      fullImage: 'assets/patinete-4.webp',
      descId: 'desc-ecoxtrem',
      description: `
        <p><strong>EcoXtrem M41 Tank</strong> es un patinete eléctrico todoterreno de alto
          rendimiento, diseñado para usuarios que buscan potencia, autonomía y comodidad en
          sus desplazamientos urbanos y recreativos.</p>

        <hr>

        <h5>🔧 Especificaciones técnicas</h5>
        <ul>
          <li><strong>Motor:</strong> 800 W sin escobillas</li>
          <li><strong>Potencia máxima:</strong> hasta 1200 W</li>
          <li><strong>Batería:</strong> Litio de 48 V y 16 Ah</li>
          <li><strong>Velocidad máxima:</strong> 25 km/h (limitada según normativa DGT); posibilidad de alcanzar hasta 45 km/h en áreas privadas</li>
          <li><strong>Autonomía:</strong> hasta 50 km por carga, dependiendo del peso del usuario, tipo de ruta y carga de la batería</li>
          <li><strong>Tiempo de carga:</strong> aproximadamente 6 a 8 horas</li>
          <li><strong>Peso:</strong> 28 kg</li>
          <li><strong>Dimensiones:</strong> 120 x 120 x 57,5 cm</li>
          <li><strong>Capacidad de carga:</strong> hasta 100 kg</li>
          <li><strong>Edad recomendada:</strong> a partir de 16 años</li>
          <li><strong>Ruedas:</strong> neumáticos mixtos de 10 pulgadas</li>
          <li><strong>Suspensión:</strong> doble suspensión delantera y trasera</li>
          <li><strong>Frenos:</strong> frenos de disco delanteros y traseros</li>
          <li><strong>Iluminación:</strong> luz LED frontal y trasera</li>
          <li><strong>Pantalla:</strong> LCD que muestra velocidad, nivel de batería y kilometraje</li>
          <li><strong>Plegable:</strong> sí, con mecanismo de plegado rápido</li>
          <li><strong>Homologación:</strong> cumple con las normativas de la DGT para circulación en vías públicas</li>
        </ul>
      `,
    },
    {
      name: 'Ecoxtrem M41 Tank BLUE/WHITE',
      priceWeb: 699,
      price: 550,
      image: 'assets/patinete-5.webp',
      fullImage: 'assets/patinete-5.webp',
      descId: 'desc-ecoxtrem',
      description: `
        <p><strong>EcoXtrem M41 Tank</strong> es un patinete eléctrico todoterreno de alto
          rendimiento, diseñado para usuarios que buscan potencia, autonomía y comodidad en
          sus desplazamientos urbanos y recreativos.</p>

        <hr>

        <h5>🔧 Especificaciones técnicas</h5>
        <ul>
          <li><strong>Motor:</strong> 800 W sin escobillas</li>
          <li><strong>Potencia máxima:</strong> hasta 1200 W</li>
          <li><strong>Batería:</strong> Litio de 48 V y 16 Ah</li>
          <li><strong>Velocidad máxima:</strong> 25 km/h (limitada según normativa DGT); posibilidad de alcanzar hasta 45 km/h en áreas privadas</li>
          <li><strong>Autonomía:</strong> hasta 50 km por carga, dependiendo del peso del usuario, tipo de ruta y carga de la batería</li>
          <li><strong>Tiempo de carga:</strong> aproximadamente 6 a 8 horas</li>
          <li><strong>Peso:</strong> 28 kg</li>
          <li><strong>Dimensiones:</strong> 120 x 120 x 57,5 cm</li>
          <li><strong>Capacidad de carga:</strong> hasta 100 kg</li>
          <li><strong>Edad recomendada:</strong> a partir de 16 años</li>
          <li><strong>Ruedas:</strong> neumáticos mixtos de 10 pulgadas</li>
          <li><strong>Suspensión:</strong> doble suspensión delantera y trasera</li>
          <li><strong>Frenos:</strong> frenos de disco delanteros y traseros</li>
          <li><strong>Iluminación:</strong> luz LED frontal y trasera</li>
          <li><strong>Pantalla:</strong> LCD que muestra velocidad, nivel de batería y kilometraje</li>
          <li><strong>Plegable:</strong> sí, con mecanismo de plegado rápido</li>
          <li><strong>Homologación:</strong> cumple con las normativas de la DGT para circulación en vías públicas</li>
        </ul>
      `,
    },
    {
      name: 'Ecoxtrem Linear',
      priceWeb: 380,
      price: 330,
      image: 'assets/patinete-6.webp',
      fullImage: 'assets/patinete-6.webp',
      descId: 'desc-ecoxtrem-linear',
      description: `
        <p><strong>EcoXtrem Linear</strong> es un patinete eléctrico urbano diseñado para
          desplazamientos diarios, combinando funcionalidad y cumplimiento con la normativa
          española.</p>

        <hr>

        <h5>🔧 Especificaciones técnicas</h5>
        <ul>
          <li><strong>Motor:</strong> 350 W sin escobillas (Brushless)</li>
          <li><strong>Batería:</strong> 36 V, 7,8 Ah</li>
          <li><strong>Velocidad máxima:</strong> 25 km/h (limitada según normativa)</li>
          <li><strong>Autonomía:</strong> hasta 25 km (dependiendo del peso del usuario, tipo de ruta y carga de la batería)</li>
          <li><strong>Tiempo de carga:</strong> 4 a 6 horas</li>
          <li><strong>Peso:</strong> 18,1 kg</li>
          <li><strong>Dimensiones:</strong> 106 x 44 x 110 cm</li>
          <li><strong>Capacidad de carga:</strong> hasta 100 kg</li>
          <li><strong>Edad recomendada:</strong> a partir de 14 años</li>
          <li><strong>Ruedas:</strong> 8,5 pulgadas con cámara de aire</li>
          <li><strong>Frenos:</strong> freno de disco trasero</li>
          <li><strong>Iluminación:</strong> luz LED frontal</li>
          <li><strong>Pantalla:</strong> LED que muestra velocidad y nivel de batería</li>
          <li><strong>Plegable:</strong> sí, con mecanismo de plegado rápido</li>
          <li><strong>Homologación:</strong> cumple normativa DGT para vías públicas</li>
        </ul>
      `,
    },
    {
      name: 'OOTD T10',
      priceWeb: 600,
      price: 549,
      image: 'assets/patinete-7.webp',
      fullImage: 'assets/patinete-7.webp',
      descId: 'desc-ootd-t10',
      description: `
        <p><strong>OOTD T10</strong> es un patinete eléctrico todoterreno diseñado para adultos
          que buscan potencia, autonomía y comodidad en sus desplazamientos urbanos y
          recreativos.</p>

        <hr>

        <h5>🔧 Especificaciones técnicas</h5>
        <ul>
          <li><strong>Motor:</strong> 500 W sin escobillas</li>
          <li><strong>Batería:</strong> Litio de 48 V y 13 Ah</li>
          <li><strong>Velocidad máxima:</strong> Hasta 50 km/h (puede variar según el modelo y
              las regulaciones locales)</li>
          <li><strong>Autonomía:</strong> Entre 35 y 49 km por carga, dependiendo de las
              condiciones de uso</li>
          <li><strong>Tiempo de carga:</strong> 5 a 6 horas</li>
          <li><strong>Peso:</strong> 22 kg</li>
          <li><strong>Dimensiones:</strong> 116 × 61 × 115 cm</li>
          <li><strong>Capacidad de carga:</strong> hasta 120 kg</li>
          <li><strong>Edad recomendada:</strong> a partir de 16 años</li>
          <li><strong>Ruedas:</strong> neumáticos todoterreno de 10 pulgadas</li>
          <li><strong>Suspensión:</strong> doble suspensión delantera y trasera</li>
          <li><strong>Frenos:</strong> de disco delanteros y traseros</li>
          <li><strong>Iluminación:</strong> luces LED frontales y traseras</li>
          <li><strong>Pantalla:</strong> LCD con velocidad, batería y kilometraje</li>
          <li><strong>Plegable:</strong> sí, con plegado rápido</li>
          <li><strong>Homologación:</strong> cumple con normativa DGT</li>
        </ul>
      `,
    },
    {
      name: 'Ecoxtrem M41 GREEN/BLACK',
      priceWeb: 699,
      price: 550,
      image: 'assets/patinete-8.webp',
      fullImage: 'assets/patinete-8.webp',
      descId: 'desc-ecoxtrem',
      description: `
        <p><strong>EcoXtrem M41 Tank</strong> es un patinete eléctrico todoterreno de alto
          rendimiento, diseñado para usuarios que buscan potencia, autonomía y comodidad en
          sus desplazamientos urbanos y recreativos.</p>

        <hr>

        <h5>🔧 Especificaciones técnicas</h5>
        <ul>
          <li><strong>Motor:</strong> 800 W sin escobillas</li>
          <li><strong>Potencia máxima:</strong> hasta 1200 W</li>
          <li><strong>Batería:</strong> Litio de 48 V y 16 Ah</li>
          <li><strong>Velocidad máxima:</strong> 25 km/h (limitada según normativa DGT); posibilidad de alcanzar hasta 45 km/h en áreas privadas</li>
          <li><strong>Autonomía:</strong> hasta 50 km por carga, dependiendo del peso del usuario, tipo de ruta y carga de la batería</li>
          <li><strong>Tiempo de carga:</strong> aproximadamente 6 a 8 horas</li>
          <li><strong>Peso:</strong> 28 kg</li>
          <li><strong>Dimensiones:</strong> 120 x 120 x 57,5 cm</li>
          <li><strong>Capacidad de carga:</strong> hasta 100 kg</li>
          <li><strong>Edad recomendada:</strong> a partir de 16 años</li>
          <li><strong>Ruedas:</strong> neumáticos mixtos de 10 pulgadas</li>
          <li><strong>Suspensión:</strong> doble suspensión delantera y trasera</li>
          <li><strong>Frenos:</strong> frenos de disco delanteros y traseros</li>
          <li><strong>Iluminación:</strong> luz LED frontal y trasera</li>
          <li><strong>Pantalla:</strong> LCD que muestra velocidad, nivel de batería y kilometraje</li>
          <li><strong>Plegable:</strong> sí, con mecanismo de plegado rápido</li>
          <li><strong>Homologación:</strong> cumple con las normativas de la DGT para circulación en vías públicas</li>
        </ul>
      `,
    },
    {
      name: 'Ecoxtrem M41 2000W',
      priceWeb: 1149,
      price: 749,
      image: 'assets/patinete-9.webp',
      fullImage: 'assets/patinete-9.webp',
      descId: 'desc-ecoxtrem-2000W',
      description: `
        <p><strong>Ecoxtrem M41 2000W</strong> es un patinete eléctrico todoterreno diseñado para ofrecer alta potencia, autonomía y comodidad en todo tipo de terrenos, ideal para usuarios que buscan rendimiento y estabilidad.</p>

          <hr>

          <h5>🔧 Especificaciones técnicas</h5>
          <ul>
            <li><strong>Motor:</strong> 2000 W de potencia nominal</li>
            <li><strong>Velocidad máxima:</strong> hasta 40 km/h, según condiciones del terreno y peso del conductor</li>
            <li><strong>Autonomía:</strong> entre 30 y 40 km por carga, dependiendo del peso del usuario, tipo de ruta y carga de la batería</li>
            <li><strong>Batería:</strong> litio de 48 V y 12 Ah</li>
            <li><strong>Tiempo de carga:</strong> 5 a 6 horas aproximadamente</li>
            <li><strong>Peso:</strong> 34 kg</li>
            <li><strong>Dimensiones:</strong> 116 x 60 x 33 cm</li>
            <li><strong>Capacidad de carga:</strong> hasta 120 kg</li>
            <li><strong>Ruedas:</strong> neumáticos extra anchos de 6.5 pulgadas (9.5 cm), ideales para terrenos irregulares</li>
            <li><strong>Suspensión:</strong> amortiguador delantero y doble amortiguador trasero para mayor estabilidad y confort</li>
            <li><strong>Frenos:</strong> discos en ambas ruedas, para una frenada eficiente y segura</li>
            <li><strong>Iluminación:</strong> luces LED frontal y trasera con luz de freno integrada</li>
            <li><strong>Pantalla:</strong> LCD con indicador del nivel de batería</li>
            <li><strong>Plegable:</strong> estructura plegable para facilitar transporte y almacenamiento</li>
            <li><strong>Extras:</strong> sillín ajustable y desmontable, claxon integrado</li>
          </ul>

      `,
    },
  ];

  productSelected = this.products[0];
  productDescription = this.productSelected.description;
  productFullImage = this.productSelected.fullImage;
  productDescId = this.productSelected.descId;

  constructor(private cd: ChangeDetectorRef) { }

  private enableTooltips(): void {
    if (typeof document !== 'undefined') {
      const tooltipTriggerList = Array.from(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      tooltipTriggerList.forEach((tooltipTriggerEl) => {
        new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
  }

  changeProduct(product: any): void {
    this.productSelected = product;
    this.productDescription = product.description;
    this.productFullImage = product.fullImage;
    this.productDescId = product.descId;
    this.cd.detectChanges();
    this.enableTooltips();
  }

  addToCart(product: any): void {
    console.log('Producto añadido al carrito:', product);
    const existingItem = this.cart.find((item) => item.name === product.name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ name: product.name, price: product.priceWeb, quantity: 1 });
    }

    this.updateWhatsappLink();
  }

  removeFromCart(product: any): void {
    const index = this.cart.findIndex((item) => item.name === product.name);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }

    this.updateWhatsappLink();
  }

  get total(): number {
    return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  modalTitle = '';
  modalBodyContent = '';
  modalImageSrc = '';
  whatsappLink = '';

  getCartQuantity(): number {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  getTotal(): number {
    return this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  removeOneFromCart(productName: string): void {
    const item = this.cart.find((i) => i.name === productName);
    if (item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.cart = this.cart.filter((i) => i.name !== productName);
      }
    }
    this.updateWhatsappLink();
  }

  updateWhatsappLink(): void {
    if (this.cart.length === 0) {
      this.whatsappLink = '#';
      return;
    }
    let message = 'Hola, quiero hacer un pedido:\n';
    this.cart.forEach((item) => {
      message += `- ${item.quantity} x ${item.name} (${(
        item.price * item.quantity
      ).toFixed(2)}€)\n`;
    });
    message += `Total: ${this.getTotal().toFixed(2)}€`;

    const phone = '34633600225'; // tu número sin espacios ni símbolos
    const encodedMessage = encodeURIComponent(message);
    this.whatsappLink = `https://wa.me/${phone}?text=${encodedMessage}`;
  }

  // Método para abrir el modal de descripción con datos
  openDescriptionModal(title: string, content: string) {
    this.modalTitle = title;
    this.modalBodyContent = content;
    const modalEl = document.getElementById('patineteModal');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }

  // Método para abrir modal imagen ampliada
  openImageModal(imageSrc: string) {
    this.modalImageSrc = imageSrc;
    const modalEl = document.getElementById('imageModal');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }

  openDescriptionModalById(title: string, contentId: string) {
    const contentElement = document.getElementById(contentId);
    if (contentElement) {
      this.modalTitle = title;
      this.modalBodyContent = contentElement.innerHTML;
      const modalEl = document.getElementById('patineteModal');
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }
  }

  confirmOrder(): void {
  // Cerrar modal del carrito si está abierto
  const cartModalEl = document.getElementById('cartModal');
  if (cartModalEl) {
    const cartModal = bootstrap.Modal.getInstance(cartModalEl);
    if (cartModal) {
      cartModal.hide();
    }
  }

  // Mostrar modal de éxito
  const successModalEl = document.getElementById('successModal');
  if (successModalEl) {
    const successModal = new bootstrap.Modal(successModalEl);
    successModal.show();
  }

  // Vaciar carrito y actualizar WhatsApp
  this.cart = [];
  this.updateWhatsappLink();
}

onImageClick(event: MouseEvent, fullImageUrl: string): void {
  event.stopPropagation(); // detiene propagación al carrusel
  this.openImageModal(fullImageUrl);
}
}
