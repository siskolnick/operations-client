import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { OperationListComponent } from './operation-list/operation-list.component';
import { OperationService } from './operation-service.service';
import { SumFormComponent } from './sum-form/sum-form.component';
import { OperationFormComponent } from './operation-form/operation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OperationListComponent,
    SumFormComponent,
    OperationFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
