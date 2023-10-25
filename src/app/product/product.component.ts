import { Component, OnInit } from '@angular/core';
import { Product } from '../models/user/product'; // Import the Product model
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  newProduct: Product = {
    id: 0,
    description: '',
    prix: 0,
    projet: null
  };
  products: Product[] = []; // Array to hold the list of products

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts(); // Call the function to fetch products on component initialization
  }

  getProducts(): void {
    this.productService.getAllProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addProduct(): void {
    this.productService.createProduct(this.newProduct).subscribe(
      (createdProduct: Product) => {
        console.log('Product created:', createdProduct);
        this.getProducts(); // Refresh the product list after adding a new product
      },
      (error: any) => {
        console.error('Error creating product:', error);
      }
    );
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(
      () => {
        console.log('Product deleted');
        this.getProducts(); // Refresh the product list after deleting a product
      },
      (error: any) => {
        console.error('Error deleting product:', error);
      }
    );
  }
}
