import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'ets-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() type: string;
  @Input() placeholder = '';
  @Input() control: AbstractControl;

  constructor() { }

  ngOnInit() {
  }

}
