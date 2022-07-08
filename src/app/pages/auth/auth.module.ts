import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      {
        path: 'signin',
        title: 'Sign In | Chat Web Client',
        component: SignInComponent
      },
      {
        path: 'signup',
        title: 'Sign Up | Chat Web Client',
        component: SignUpComponent
      },
      {
        path: 'reset/password',
        title: 'Reset Password | Chat Web Client',
        component: ResetPasswordComponent
      }
    ]}
];

console.log(routes, 'routes');


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ]
})
export class AuthModule { }
