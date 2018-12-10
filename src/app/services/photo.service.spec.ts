import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PhotoService } from './photo.service';

describe('PhotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ 
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: PhotoService = TestBed.get(PhotoService);
    expect(service).toBeTruthy();
  });
});
