import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CreateNewProduct } from 'src/app/models/CreateNewProduct';
import { EntityImage } from 'src/app/models/EntityImage';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductService, private loginService: LoginService) { }

  product: CreateNewProduct = new CreateNewProduct();
  tags: string = '';
  imagesForBackend: any[] = [];
  imagesForFront: EntityImage[] = [];
  imageCount: number = 0;
  

  ngOnInit(): void {
  }

  keyUpTag(event: any) {
    if (event.key != ',') return;

    this.product.tags = [];
    this.tags.split(',').forEach(element => {
      this.product.tags.push(element.trim());
    });
  }
  //// 

  handleProductFileInput(files: FileList) { 
    
  }

  fileToUpload: File | null = null;
  base64: string | any = '';
  
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.getBase64(this.fileToUpload).then((data) => {
      this.base64 = data;
      
      let ord = 1;
      if (this.imagesForFront.length > 0) {
        ord = this.imagesForFront[this.imagesForFront.length - 1].order + 1;
      }

      this.imagesForFront.push(new EntityImage("", ord, this.base64));
      console.log("imagesForFront", this.imagesForFront);
    });
  }

  getBase64(file: File | null) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file!);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  getImageURL(img: EntityImage) {
    return img.url;
  }

  removeImage(image: EntityImage, index: number) {
    this.imagesForFront.splice(index, 1);
    for (let i = index; i < this.imagesForFront.length; i++) {
      this.imagesForFront[i].order--;
    }
  }

  moveUp(image: EntityImage, index: number) {
    if (index == 0) return;

    let temp = this.imagesForFront[index - 1];
    this.imagesForFront[index - 1] = this.imagesForFront[index];
    this.imagesForFront[index] = temp;

    this.reorderImages();
  }

  moveDown(image: EntityImage, index: number) {
    if (index == this.imagesForFront.length - 1) return;
    
    let temp = this.imagesForFront[index + 1];
    this.imagesForFront[index + 1] = this.imagesForFront[index];
    this.imagesForFront[index] = temp;

    this.reorderImages();
  }

  reorderImages() {
    for (let i = 0; i < this.imagesForFront.length; i++) {
      this.imagesForFront[i].order = i + 1;
    }
  }
    
  createProduct() {
    this.product.images = this.imagesForFront;
    this.product.images.forEach(element => { element.imgData = element.url; });
    this.productService.CreateProduct(this.product).subscribe((data) => {
      console.log("data", data);
      if (data != null && data != undefined) { 
        alert("Product created!");
        window.location.href = '/product/' + data.uuid;
      }
    }, (error) => {
      console.log("error", error);
    });
  }



}
