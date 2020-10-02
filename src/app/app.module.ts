import { ImageBoxComponent } from './image-box/image-box.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './image-box/title/title.component';
import { ImageBoxService } from './image-box/image-box.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageBoxComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  
  ],
  providers: [
    ImageBoxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
