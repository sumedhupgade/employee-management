import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent } from './components/home/tabs/overview/overview.component';

export const routes: Routes = [
    {path: '', component:HomeComponent,
        children: [
            {
              path: 'overview',
              component: OverviewComponent
            },
            { path: '', redirectTo: '/overview', pathMatch: 'full' },
          ],
    },
];
