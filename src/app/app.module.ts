import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RetrieveFromDbComponent } from './retrieve-from-db/retrieve-from-db.component';
import { WordTypeComponent } from './retrieveFromDb/word-type/word-type.component';
import { AddToDbComponent } from './add-to-db/add-to-db.component';
import { SentenceComponent } from './addToDb/sentence/sentence.component';
import { SentencesComponent } from './retrieveFromDb/sentences/sentences.component';

@NgModule({
  declarations: [
    AppComponent,
    RetrieveFromDbComponent,
    WordTypeComponent,
    AddToDbComponent,
    SentenceComponent,
    SentencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
