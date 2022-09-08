import { Component, EventEmitter } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onPriceNotification(data: string) {
    window.alert(`${data} - You will be notified when price goes lower than 500$`);
  }
}
