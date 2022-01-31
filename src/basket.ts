import { Product } from "./product";

export class Basket {

    constructor(
        public id: number,
        public name: string,
        public total: number,
        public createdAt: Date,
        public products: Product[]
    ) {

    }

    addProduct(product: Product) : void {
        this.products.push(product);
        this.total += product.price * product.count
    }
}