import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  breadcrumbItems: MenuItem[] | undefined;

  displayName = 'Suresh Kumar';
  projectName = 'Library App'

  ngOnInit() {
    this.breadcrumbItems = [{ icon: 'pi pi-user' }, { label: this.displayName }, { icon: 'pi pi-folder' },
    { label: this.projectName }];
  }
}
