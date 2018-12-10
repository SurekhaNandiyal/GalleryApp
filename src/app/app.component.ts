import { Component } from '@angular/core';
import { Observable } from "rxjs";

import { PhotoService } from './services/photo.service';
import { Photo } from './model/Photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "GalleryApp";
  selectedImage;
  dataSource;
  loading = false;
  total = 0;
  page = 1;
  limit = 50;
  filteredTitle = '';

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getPhotos().subscribe(photos => {
      this.getPhotos();
      this.total = photos.length;
      this.loading = false;
      //this.dataSource = photos;
    });
    
  }

  //getPhotos() {
  //  this.photoService.getPhotos().subscribe(photos => this.dataSource = photos);
  //}

  getPhotos() {
    this.loading = true;
    //this.photoService.getPhotosByAlbum(this.page).subscribe(res => {
    //  this.total = res.total;
    //  this.dataSource = res;
    //  this.loading = false;
    //});
    this.dataSource = this.photoService.getPhotosByAlbum(this.page);
  }

  setSelectedImage(image){
    this.selectedImage= image;
  }

  closePhoto() {
    document.getElementById('myModal').style.display = "none";
  }

  goPage(n: number): void {
    this.page = n;
    this.getPhotos();
  }

  next(): void {
    this.page++;
    this.getPhotos();
  }

  prev(): void {
    this.page--;
    this.getPhotos();
  }
}
