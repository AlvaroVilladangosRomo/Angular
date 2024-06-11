import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImage',
})
export class HeroImagePipe implements PipeTransform {

  transform(hero: Hero): string {
    if(!hero.id && !hero.alt_img){
      return 'assests/no-image.png'
    }

    return `assets/heroes/${hero.id}.jpg`
  }

}