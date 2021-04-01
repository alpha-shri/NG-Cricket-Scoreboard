import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { HeaderComponent } from './components/header/header.component';
import { CricketService } from './service/cricket.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { GenericModalComponent } from './components/generic-modal/generic-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent,
    HeaderComponent,
    GenericModalComponent
  ],
  entryComponents:[GenericModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [CricketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
