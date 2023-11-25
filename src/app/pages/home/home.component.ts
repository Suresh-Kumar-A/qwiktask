import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { Category } from 'src/app/model/category';
import { TaskItem } from 'src/app/model/task-item.model';
import { MockService } from 'src/app/svc/mock.service';

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
  tasks: TaskItem[] = [];
  public Category = Category;
  // Custom Order to keey Category Eum the way we added it
  customOrder = (a: any, b: any) => {
    return a;
  }
  draggedItem: TaskItem | undefined;

  constructor(private mockSvc: MockService) { }

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
    this.refreshTaskBoard();
  }

  showUserProfile() {

  }

  logout() {
    this.isUserSignedIn = false;
  }

  addNewTaskBoard() {

  }

  refreshTaskBoard() {
    this.tasks = this.mockSvc.getAllTasks();
  }

  getTodoTasks() {
    return this.tasks.filter(task => task.category == Category.TODO);
  }

  getInProgressTasks() {
    return this.tasks.filter(task => task.category == Category.IN_PROGRESS);
  }

  getDoneTasks() {
    return this.tasks.filter(task => task.category == Category.DONE);
  }

  getTasks(type: string): TaskItem[] {
    const category = this.parseCategory(type);
    switch (category) {
      case Category.TODO: return this.getTodoTasks();
      case Category.IN_PROGRESS: return this.getInProgressTasks();
      case Category.DONE: return this.getDoneTasks();
    }
  }

  getTasksCount(type: string): string {
    const category = this.parseCategory(type);
    switch (category) {
      case Category.TODO: return this.getTodoTasks().length.toString();
      case Category.IN_PROGRESS: return this.getInProgressTasks().length.toString();
      case Category.DONE: return this.getDoneTasks().length.toString();
    }
  }

  parseCategory(type: String): Category {
    switch (type) {
      case 'TODO': return Category.TODO;
      case 'IN_PROGRESS': return Category.IN_PROGRESS;
      case 'DONE': return Category.DONE;
    }
    throw new Error('Unknown Task Type');
  }

  dragStart(draggedItem: TaskItem) {
    this.draggedItem = draggedItem;
  }

  dragEnd() {
    this.draggedItem = undefined;
  }

  drop(type: String) {
    if (this.draggedItem) {
      const category = this.parseCategory(type);
      const itemRef = this.tasks.find(item => item.title == this.draggedItem?.title);
      if (itemRef)
        itemRef.category = category;
    }
  }
}
