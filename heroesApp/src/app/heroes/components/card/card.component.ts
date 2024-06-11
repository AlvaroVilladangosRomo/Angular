import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
    selector: 'heroes-hero-card',
    templateUrl: './card.component.html',
    styles:[],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {

  @Input()
  public hero!: Hero;

  ngOnInit(): void {
    if(!this) throw Error('Hero property is requireds');
  }

 }
