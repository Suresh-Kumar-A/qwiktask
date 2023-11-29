import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Category } from 'src/app/model/category';
import { TaskItem } from 'src/app/model/task-item.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  public Category = Object.keys(Category);
  buttonTitle = 'Add';
  taskItemFormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {

  }
  ngOnInit(): void {
    this.taskItemFormGroup.reset();
    if (this.config.data) {
      const { title, description } = this.config.data;
      this.taskItemFormGroup.setValue({ title: title, description: description });
      this.buttonTitle = 'Update'
    }
  }

  save() {
    const { title, description } = this.taskItemFormGroup.value;
    if (title != undefined && description != undefined) {
      var taskItem: TaskItem = {
        title: title,
        description: description,
        category: ''
      }
      this.ref.close(taskItem);
    }

  }
}
