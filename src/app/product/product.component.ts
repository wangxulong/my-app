import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Array<Product>;

  constructor() {
  }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个产品', 1.5, 4, ['电子产品', '食物'], '就是一个简单的介绍'),
      new Product(2, '第2个产品', 2.5, 1, ['衣服'], '就是一个简单的介绍'),
      new Product(3, '第3个产品', 3.5, 2, ['娱乐'], '就是一个简单的介绍'),
      new Product(4, '第4个产品', 4.5, 3, ['韩妆品'], '就是一个简单的介绍'),
      new Product(5, '第5个产品', 5.5, 4, ['电子产品', '其他'], '就是一个简单的介绍')
    ];
  }

}

export class Product {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public categories: Array<string>,
              public content: string) {
  }
}
