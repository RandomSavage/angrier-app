import { ImageBoxComponent } from './image-box/image-box.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './image-box/title/title.component';
import { GetDataService } from './image-box/get-data.service';
import { TabsComponentComponent } from './tabs-component/tabs-component.component';
import { MasterButtonComponent } from './master-button/master-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageBoxComponent,
    TitleComponent,
    TabsComponentComponent,
    MasterButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  
  ],
  providers: [
    GetDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
