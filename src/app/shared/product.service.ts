import {Injectable} from '@angular/core';

@Injectable()
export class ProductService {
  private products: Array<Product> = [
    new Product(1, '第一个产品', 1.5, 4, ['电子产品', '食物'], '就是一个简单的介绍'),
    new Product(2, '第2个产品', 2.5, 1, ['衣服'], '就是一个简单的介绍'),
    new Product(3, '第3个产品', 3.5, 2, ['娱乐'], '就是一个简单的介绍'),
    new Product(4, '第4个产品', 4.5, 3, ['韩妆品'], '就是一个简单的介绍'),
    new Product(5, '第5个产品', 5.5, 4, ['电子产品', '其他'], '就是一个简单的介绍')
  ];
  private comments: Array<Comment> = [
    new Comment(1, 1, '2017-10-31 02:02:33', '妹妹', 3, '还可以'),
    new Comment(2, 1, '2017-11-05 12:02:33', '大风', 4, '好'),
    new Comment(3, 1, '2017-11-26 05:02:33', '小骚', 5, '非常好'),
    new Comment(4, 2, '2017-11-26 05:02:33', '小骚', 1, '不好'),
  ];

  constructor() {
  }

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProduct(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => {
      return comment.productId == id;
    });
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

export class Comment {
  constructor(public id: number,
              public productId: number,
              public createTime: string,
              public user: string,
              public rating: number,
              public content: string) {
  }
}
