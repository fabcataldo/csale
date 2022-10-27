import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'place-detail',
    loadChildren: () => import('./pages/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
  },
  {
    path: 'experiences',
    loadChildren: () => import('./pages/experiences/experiences.module').then( m => m.ExperiencesPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./pages/my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'purchases-made',
    loadChildren: () => import('./pages/purchases-made/purchases-made.module').then( m => m.PurchasesMadePageModule)
  },
  {
    path: 'update-profile',
    loadChildren: () => import('./pages/update-profile/update-profile.module').then( m => m.UpdateProfilePageModule)
  },
  {
    path: 'favorite-places',
    loadChildren: () => import('./pages/favorite-places/favorite-places.module').then( m => m.FavoritePlacesPageModule)
  },
  {
    path: 'available-benefits',
    loadChildren: () => import('./pages/available-benefits/available-benefits.module').then( m => m.AvailableBenefitsPageModule)
  },
  {
    path: 'places-map',
    loadChildren: () => import('./pages/places-map/places-map.module').then( m => m.PlacesMapPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
