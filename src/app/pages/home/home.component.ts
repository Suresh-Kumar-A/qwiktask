import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TaskGroupInfo } from 'src/app/model/task-group-info.model';
import { TaskItem } from 'src/app/model/task-item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  breadcrumbItems: MenuItem[] | undefined;
  displayName = 'Suresh Kumar';
  projectName = 'Library App'
  todoTaskGroupInfo: TaskGroupInfo = {
    title: 'Todo',
    description: "This item hasn't been started",
    category: 'todo',
    count: '3',
    indicationColorCode: '#dc2f02;'
  };
  inprogressTaskGroupInfo: TaskGroupInfo = {
    title: 'In Progress',
    description: 'This is actively being worked on',
    category: 'in-progress',
    count: '2',
    indicationColorCode: '#347D39;'
  };
  doneTaskGroupInfo: TaskGroupInfo = {
    title: 'Done',
    description: 'This has been completed',
    category: 'done',
    count: '5',
    indicationColorCode: '#bb84e8;'
  };

  taskItems: TaskItem[] | undefined;

  ngOnInit() {
    this.breadcrumbItems = [{ icon: 'pi pi-user' }, { label: this.displayName }, { icon: 'pi pi-folder' },
    { label: this.projectName }];
    this.taskItems = [
      {
        title: 'Add SSO Login',
        description: 'New SSO based login feature for quick access & smooth login process for user',
        category: 'todo'
      },
      {
        title: 'Export Json',
        description: 'Add new feature to export the content as json file',
        category: 'todo'
      },
      {
        title: 'Add Firebase Auth',
        description: 'Enable firebase authentication for this app',
        category: 'todo'
      }
    ];
  }
}
