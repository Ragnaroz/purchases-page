import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { PurchasesPageComponent } from './purchases-page/purchases-page.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [PurchasesPageComponent],
  imports: [BrowserModule],
  entryComponents: [PurchasesPageComponent]
})
export class AppModule { 

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const myCustomElement = createCustomElement(PurchasesPageComponent, { injector: this.injector });
    customElements.define('purchases-page', myCustomElement);
  }
}
