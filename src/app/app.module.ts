import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { CowComponent }  from './cow.component';
import { LionComponent }  from './lion.component';
import { AnyAnimalComponent }  from './any-animal.component';
import { AnimalDetailsComponent }  from './animal-details.component';
import { ComputerComponent }  from './computer.component';
import { BookComponent }  from './book.component';
import { PreferredBookComponent }  from './preferred-book.component';
import { GlobalErrorHandlerService } from './global-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    CowComponent,
    LionComponent,
    AnyAnimalComponent,
    AnimalDetailsComponent,
    ComputerComponent,
    BookComponent,
    PreferredBookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
