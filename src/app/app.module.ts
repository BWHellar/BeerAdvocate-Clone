import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { CenterComponent } from './center/center.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BottomBarComponent,
    CenterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
