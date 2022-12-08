import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Injectable()
@Pipe({name: 'csalePipe'})
export class CSalePipe implements PipeTransform {
  transform(arg1: any, func: (arg1, arg2)=>{}, arg2: any): any {
    return func(arg1, arg2);
  }
}