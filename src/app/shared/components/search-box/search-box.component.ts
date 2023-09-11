import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  onValue = new EventEmitter<string>();

  onValueChanged( term: string ): void {
    this.onValue.emit( term );
  }

}
