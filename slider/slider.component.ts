import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SliderConfig } from '../../models';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() config: SliderConfig;
  @Output() callBack = new EventEmitter<boolean>();

  label: string;
  isChecked: boolean;

  constructor() { }

  ngOnInit() {
    this.label = this.config.label || 'TOGGLE';
    this.isChecked = this.config.isChecked || false;
  }

  onChanged() {
    this.isChecked = !this.isChecked;
    this.callBack.emit(this.isChecked);
  }
}
