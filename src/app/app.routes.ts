import { Routes } from '@angular/router';
import { ImportantTasksComponent } from './component/pages/important-tasks/important-tasks.component';
import { AllTaskComponent } from './component/pages/all-task/all-task.component';
import { CompletedTasksComponent } from './component/pages/completed-tasks/completed-tasks.component';


export const routes: Routes = [
    {
      path: '',
      component: AllTaskComponent,
    },
    {
      path: 'importants',
      component: ImportantTasksComponent,
    },
    {
      path: 'completed',
      component: CompletedTasksComponent,
    },
  ];