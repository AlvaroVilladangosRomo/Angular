import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'shared-search-box',
    templateUrl: './searchBox.component.html',
    styleUrls: ['./searchBox.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent {

  @Input()
public placeholder: string = '';
}

