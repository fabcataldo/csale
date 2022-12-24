import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from 'src/app/models/experience';
import { experiences } from 'src/dummy_data/experiences';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  constructor() { }

  getExperiences(): Observable<Array<Experience>> {
    return new Observable((subscriber)=>{
      subscriber.next(experiences);
    });
  }
}
