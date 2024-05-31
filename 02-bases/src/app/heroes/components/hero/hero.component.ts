import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizaName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription() :string {
  
    return  `${this.name } - ${this.age}`;
  }

  changeHero() : void {

    this.name = "Spiderman";
  }

  changeAge () : void {
    
    this.age = 25;
  }


  resetForm() : void {
    this.name = 'Ironman';
    this.age = 45;
  }
}
