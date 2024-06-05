import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'shared-search-box',
    templateUrl: './searchBox.component.html',
    styleUrls: ['./searchBox.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent {

  @ViewChild('txtInput')
  public txtInput!: ElementRef<HTMLInputElement>;

  @Input()
public placeholder: string = '';


  @Output()
  public onValue = new EventEmitter<string>;


  emitValue( ) : void {
    this.onValue.emit( this.txtInput.nativeElement.value);
    this.txtInput.nativeElement.value = '';
}
}
