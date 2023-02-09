import { Component, OnInit } from '@angular/core';
import { IUser } from '../../shared/interfaces';
import { UserService } from '../../services/users.service';
import { WatchService } from '../../services/watch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  value: string = '';
  usersList: IUser[] = [];

  isLoading: boolean = false;

  constructor(public restApi: UserService, private watch: WatchService) {}

  ngOnInit() {
    this.loadUsers();
    this.watch.watchListUser().subscribe((data: IUser[]) => {
      this.handledResponse(data);
    });
  }

  loadUsers() {
    this.isLoading = true;
    this.restApi.getUsers().subscribe((data: IUser[]) => {
      this.handledResponse(data);
      this.isLoading = false;
    });
  }

  handledResponse(data: IUser[]) {
    this.usersList = data;
  }
}
