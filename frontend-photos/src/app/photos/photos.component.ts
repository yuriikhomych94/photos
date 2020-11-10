import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  images = [];

  constructor(private photoService: PhotosService, private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getAllPhotos();
  }
  

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
  }
  

  choosePhoto(event) {
    const file = event.target.files[0];
    this.photoService.uploadImage(file).subscribe(data => {
      console.log(data)
    });
    this.getAllPhotos();
  }


  getAllPhotos(): void {
    this.photoService.getAllImages()
      .subscribe(data => {

        data.forEach(photo => {
          let img = photo.img;
          let TYPED_ARRAY = new Uint8Array(img.data);
          const STRING_CHAR = TYPED_ARRAY.reduce((data, byte) => {
            return data + String.fromCharCode(byte);
          }, '');

          let base64String = btoa(STRING_CHAR);
          let image = this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + base64String)
          this.images.push(image);
        })

      });
  }


  d() {
    console.log('heled')
  }




}
