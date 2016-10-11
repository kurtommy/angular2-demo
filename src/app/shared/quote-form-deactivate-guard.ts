import { CanDeactivate } from '@angular/router';
import { QuoteDataComponent } from '../quote-data/quote-data.component';

export class QuoteFormDeactivateGuard implements CanDeactivate<QuoteDataComponent> {
  canDeactivate(component: QuoteDataComponent) {
    return true;
    // let can = component.canDeactivate();
    // if (!can) {
    //   alert('Non puoi abbandonare il wizard in corso');
    //   return false;
    // }
    // return true;
  }

}
