import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TaskGroupInfo } from 'src/app/model/task-group-info.model';
import { TaskItem } from 'src/app/model/task-item.model';
import { MockService } from 'src/app/svc/mock.service';

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
    count: this.mockSvc.getTodoTaks().length.toString(),
    indicationColorCode: '#dc2f02;'
  };
  inprogressTaskGroupInfo: TaskGroupInfo = {
    title: 'In Progress',
    description: 'This is actively being worked on',
    category: 'in-progress',
    count: this.mockSvc.getInProgressTaks().length.toString(),
    indicationColorCode: '#347D39;'
  };
  doneTaskGroupInfo: TaskGroupInfo = {
    title: 'Done',
    description: 'This has been completed',
    category: 'done',
    count: this.mockSvc.getDoneTaks().length.toString(),
    indicationColorCode: '#bb84e8;'
  };

  constructor(public mockSvc: MockService) { }

  ngOnInit() {
    this.breadcrumbItems = [{ icon: 'pi pi-user' }, { label: this.displayName }, { icon: 'pi pi-folder' },
    { label: this.projectName }];
  }

}
