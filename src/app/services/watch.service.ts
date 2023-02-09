import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IUser } from '../shared/interfaces';
import { UserService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class WatchService {
  private readonly searchSubject = new Subject<string>();
  private readonly listUserSubject = new Subject<IUser[]>();

  searchResults: IUser[] = [];

  constructor(public restApi: UserService) {}

  onSearchQueryInput(event: string): void {
    const searchQuery = event;
    this.searchSubject.next(searchQuery?.trim());
  }

  watchListUser(): Observable<IUser[]> {
    return this.listUserSubject.asObservable();
  }
}
