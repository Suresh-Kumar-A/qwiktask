import { Injectable } from '@angular/core';
import { TaskItem } from '../model/task-item.model';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  getTodoTaks(): TaskItem[] {
    var items: TaskItem[] = [
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
      },
      {
        title: 'Implement Advanced Security - Authorization, Expiration Time for JWT Token',
        description: 'Handle Authorization - Any valid JWT token must allow to perform operation on the Username to which the token is generated.',
        category: 'todo'
      },
      {
        title: 'Folders Basic Operations',
        description: 'Provide a set of api to perform Create, Read, Update, Delete a Folder. Also, provide an api to list all Folders & an api to assign/revoke a folder as parent.',
        category: 'todo'
      },
      {
        title: 'Stream Audio/Video File',
        description: 'Provide an api to stream data of an Audio (or) Video file without sending them as a whole through an api.',
        category: 'todo'
      }
    ];

    return items;
  }

  getInProgressTaks(): TaskItem[] {
    var items: TaskItem[] = [
      {
        title: 'Download Folder',
        description: 'An api to download all the files in the folder.',
        category: 'todo'
      },
      {
        title: 'Share File',
        description: 'Provide an api to allow users to share a file that can be rendered in the browser without the need to download in they storage to other users (or) a public link for anyone on the web',
        category: 'todo'
      }
    ];

    return items;
  }

  getDoneTaks(): TaskItem[] {
    var items: TaskItem[] = [
      {
        title: 'Upload Multiple File(s)',
        description: 'An api to upload multiple file(s) that maches the supported files types & is within the max file size limit of the app.',
        category: 'todo'
      },
      {
        title: 'Storage Info',
        description: 'An api to provide the total free space available/allowed in the app property file. So, that user can know how much storage space they can utilize more.',
        category: 'todo'
      },
      {
        title: 'Upload Folder',
        description: 'An api to upload all the files in the folder.',
        category: 'todo'
      }
    ];

    return items;
  }
}
