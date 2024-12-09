import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';


export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'manage-user',
        loadChildren: () =>
          import('../user-management/user-management.routes').then(
            (m) => m.userRoutes
          ),
      },
      {
        path:'profile',
        loadChildren: () =>
          import('../profile/profile.routes').then(
            (m) => m.profileRoutes
          ),
      }
    ],
  },
];
