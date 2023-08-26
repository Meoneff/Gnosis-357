import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { BrowseComponent } from './components/browse/browse.component';
import { DetailComponent } from './components/detail/detail.component';
import { ReviewComponent } from './components/review/review.component';
import { CartComponent } from './components/cart/cart.component';
import { AnalysticComponent } from './components/analystic/analystic.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AdminComponent } from './components/admin/admin.component';
import { CourseFormComponent } from './components/admin/components/course-form/course-form.component';
import { LessonComponent } from './components/admin/components/lesson/lesson.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    ProfileComponent,
    SettingsComponent,
    QuizComponent,
    BrowseComponent,
    DetailComponent,
    ReviewComponent,
    CartComponent,
    AnalysticComponent,
    AdminComponent,
    CourseFormComponent,
    LessonComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, SharedModule],
})
export class LayoutModule {}