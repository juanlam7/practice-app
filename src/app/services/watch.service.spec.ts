import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WatchService } from './watch.service';

describe('WatchService', () => {
  let httpTestingController: HttpTestingController;
  let service: WatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(WatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
