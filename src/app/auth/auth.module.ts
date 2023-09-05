import { NgModule } from '@angular/core';
import { RegisterPageComponent } from './page/register-page/register-page.component';

import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
