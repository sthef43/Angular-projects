import { Routes } from '@angular/router';
import { TodoAppComponent } from './domains/pages/todo-app/todo-app.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: TodoAppComponent,
    }
];
