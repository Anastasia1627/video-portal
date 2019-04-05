import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { VideosComponent } from './videos/videos.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SearchComponent,
    VideosComponent,
    BreadcrumbsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
