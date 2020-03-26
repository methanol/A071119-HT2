import { Pipe, PipeTransform } from '@angular/core';
import { IProject } from './config';

@Pipe({
  name: 'pageFilter'
})
export class PageFilterPipe implements PipeTransform {

  transform(projects: IProject[], pageCurrentIndex: number, pageCurrentSize: number): IProject[] {

    let startIndex = pageCurrentIndex === 0 ? pageCurrentIndex : pageCurrentIndex * pageCurrentSize;
    let endIndex = pageCurrentIndex === 0 ? pageCurrentSize : (1 + pageCurrentIndex) * pageCurrentSize;

    return projects.slice(startIndex, endIndex);
  }

}