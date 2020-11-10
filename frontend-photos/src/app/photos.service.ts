import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photos } from './photos/photos.model';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  url = 'http://localhost:3000/photos'

  constructor(private httpClient: HttpClient) { }

  getAllImages(): Observable<Array<Photos>>{
    return this.httpClient.get<Array<Photos>>(this.url + "/getAllPhotos");
  }


  uploadImage(file: File): Observable<Object> {
    const formData: FormData = new FormData();
    formData.append("id", "1")
    formData.append("name", file.name)
    formData.append('file', file, file.name);

    return this.httpClient.post(this.url + "/uploadImage", formData)
  }
}
