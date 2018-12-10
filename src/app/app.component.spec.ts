import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { PhotoService } from './services/photo.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        PaginationComponent,
        SearchFilterPipe
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'GalleryApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('GalleryApp');
  });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to GalleryApp!');
  // });

  it('should use the photos from service', () => {
    let fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    let photoService = fixture.debugElement.injector.get(PhotoService);
    let photos = photoService.getPhotos();
    console.log("photos "+photos);
    expect(photos).not.toBeNull;
    expect(app.dataSource).not.toBeNull;
    expect(app.loading).toBeFalsy;
    //expect(photos.length).toEqual(app.total);
  });

  
});
