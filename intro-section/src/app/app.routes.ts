import { Routes } from '@angular/router';

import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { HeaderComponent } from './shared/components/header/header.component';

export const routes: Routes = [

    {
        path:'',
        component:PagePrincipalComponent
    },
    {
        path:'header',
        component:HeaderComponent
    }
];
