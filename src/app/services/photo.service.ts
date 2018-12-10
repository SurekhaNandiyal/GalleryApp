import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';

import { Photo } from '../model/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  _photos: Photo[];
  constructor(private http: HttpClient) {}

  public getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>("http://jsonplaceholder.typicode.com/photos")
      .pipe(
        map(response => {
          this._photos = response;
          return response;
        }),
        catchError(this.handleError)
      );
  }

  //public getPhotos(): void {
  //  this.http.get<Photo[]>("http://jsonplaceholder.typicode.com/photos")
  //    .subscribe(
  //      photos => this._photos,
  //      err => this.handleError(err),
  //    () => console.log('yay')
  //  );
  //}

  public getPhotosByAlbum(albumId): Photo[] {
    return this._photos.filter(p => p.albumId === albumId);
  }

  private handleError<T> (err) {
    let errMessage = '';
    if (err.error instanceof ErrorEvent) {
      errMessage = `Error: ${err.error.message}`;
    } else {
      errMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    window.alert(errMessage);
    return throwError(errMessage);
  }
}
