import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { mainLayoutMatcher } from "./module/main-layout/main-layout.matcher";
import { AuthGuard } from "./guard/auth-guard.service";
import { ExpertGuard } from "./guard/expert-guard.service";
import { AdminGuard } from "./guard/admin-guard.service";
import { ROUTE_INTERCEPTORS } from "./module/router-extend/router-extend.module";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/onboarding'
  },
  {
    path: 'login',
    pathMatch: 'full',
    redirectTo: '/onboarding'
  },
  {
    path: 'onboarding',
    loadComponent: () => import('./page/onboarding/onboarding.component').then(c => c.OnboardingComponent),
  },
  {
    matcher: mainLayoutMatcher,
    loadChildren: () => import('./module/main-layout/main-layout.route').then(m => m.routes),
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
    canActivate: [ AuthGuard ]
  },
  {
    path: 'map',
    loadComponent: () => import('./module/disease-map/disease-map-modal/disease-map-modal.component').then(c => c.DiseaseMapModalComponent),
    data: { type: 'home' },
    canActivate: [ AuthGuard ]
  },
  {
    path: 'search',
    loadComponent: () => import('./module/search/disease-search/disease-search.component').then(c => c.DiseaseSearchComponent),
  },
  // {
  //   path: 'login',
  //   loadComponent: () => import('./module/login/login-modal/login-modal.component').then(c => c.LoginModal)
  // },
  {
    path: 'diagnosis/:diagnosisId',
    loadComponent: () => import('./module/diagnosis/diagnosis-result/diagnosis-result.component').then(c => c.DiagnosisResultComponent),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'expert',
    loadChildren: () => import('./module/expert/expert-layout.route').then(m => m.routes),
    canActivate: [ ExpertGuard ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./module/admin/admin.route').then(m => m.routes),
    canActivate: [ AdminGuard ]
  }
];

export const routesWithInterceptor: Routes = [
  {
    path: '',
    children: routes,
    canActivateChild: ROUTE_INTERCEPTORS,
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routesWithInterceptor, {
      scrollPositionRestoration: 'disabled',
      paramsInheritanceStrategy: 'always',
      initialNavigation: 'enabledBlocking'
    }),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
