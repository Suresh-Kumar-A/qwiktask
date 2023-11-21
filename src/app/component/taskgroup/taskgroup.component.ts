import { Component, Input, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { TaskGroupInfo } from 'src/app/model/task-group-info.model';
import { TaskItem } from 'src/app/model/task-item.model';

@Component({
  selector: 'app-taskgroup',
  templateUrl: './taskgroup.component.html',
  styleUrls: ['./taskgroup.component.scss']
})
export class TaskgroupComponent implements OnInit {

  @Input()
  groupInfo: TaskGroupInfo | undefined;

  menuActions: MenuItem[] | undefined;

  @Input()
  taskItems: TaskItem[] | undefined;

  ngOnInit(): void {
    this.menuActions = [
      {
        label: 'Edit',
        icon: PrimeIcons.WRENCH,
      },
      {
        label: 'Delete All',
        icon: PrimeIcons.TRASH
      }
    ];
  }
}
