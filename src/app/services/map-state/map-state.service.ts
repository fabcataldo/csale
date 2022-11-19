import { ElementRef, Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
//creo que no va a servir, fijarse que onda
export class MapStateService {
  currentSearch: string;
  currentSearchRef: ElementRef;
}
