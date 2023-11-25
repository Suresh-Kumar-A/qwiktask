import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isUserSignedIn = true;
  userName = 'suresh_kumar_a';
  profileItems: MenuItem[] | undefined;
  taskBoardName = 'Library App';

  ngOnInit() {
    this.profileItems = [
      {
        label: 'Profile',
        icon: PrimeIcons.USER,
        command: () => {
          this.showUserProfile();
        }
      },
      {
        label: 'Logout',
        icon: PrimeIcons.SIGN_OUT,
        command: () => {
          this.logout();
        }
      }
    ];
  }

  showUserProfile() {

  }

  logout() {
    this.isUserSignedIn = false;
  }

  addNewTaskBoard() {

  }

  refreshTaskBoard() {

  }
}
