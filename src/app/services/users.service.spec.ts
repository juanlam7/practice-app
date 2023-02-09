import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './users.service';

describe('UserService', () => {
  let httpTestingController: HttpTestingController;
  let service: UserService;
  const url = 'https://jsonplaceholder.typicode.com/users';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(UserService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getUsers should use GET to retrieve data', () => {
    service.getUsers().subscribe();

    const testRequest = httpTestingController.expectOne(`${url}`);

    expect(testRequest.request.method).toEqual('GET');
  });
});
