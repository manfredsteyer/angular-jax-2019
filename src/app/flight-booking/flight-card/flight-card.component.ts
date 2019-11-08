import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Flight } from '../../model/flight';


@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() {
    console.debug('ctor', this.selected, this.item);
  }

  ngOnInit() {
    console.debug('init', this.selected, this.item);

    setTimeout(() => this.selectedChange.next(true), 0);

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('changes', this.selected, this.item);
  }

  ngOnDestroy(): void {
    console.debug('destory', this.selected, this.item);
  }
  
  select() {
    this.selected = true;
    this.selectedChange.next(true);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(false);
  }


}
