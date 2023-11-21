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

  contextMenu: MenuItem[] | undefined;

  @Input()
  taskItems: TaskItem[] | undefined;
test: string|HTMLElement|undefined;

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
    this.contextMenu = [
      { label: 'Move to start', icon: 'pi pi-fw pi-trash' },
      { label: 'Move to In-Progress', icon: 'pi pi-fw pi-search' },
      { label: 'Mark as Done', icon: 'pi pi-fw pi-trash' }
  ];
  }

  dragStart(arg0: any) {
    console.log("---> Drag Start", arg0)
  }
  dragEnd() {
    console.log("---> Drag End")
  }
  drop() {
    console.log("---> Drop")
  }
}
