import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ParentComponent implements OnInit, OnChanges, AfterViewInit {
  isChildToggled = false;
  inputValue = '';
  
  constructor() {
    console.log('Parent Constructor is called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Parent OnChanges is called');
  }

  ngOnInit(): void {
    console.log('Parent OnInit is called');

  }
  
  ngAfterViewInit(): void {
    console.log('Parent AfterViewInit is called');
  }

  toggleChild(): void {
    this.isChildToggled = !this.isChildToggled;
  }
}
