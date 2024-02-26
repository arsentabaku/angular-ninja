import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ChildComponent
  implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterViewInit
{
  private counter = 0;
  private interval: any;
  @Input() inputValue = '';
  @ContentChild('projectContent') projectContent: any;

  constructor() {
    console.log('Child Constructor is called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child OnChanges is called');
    console.log('Child OnChanges - ' + this.projectContent);
    // console.log(changes);
  }

  ngOnInit(): void {
    console.log('Child OnInit is called');
    console.log('Child OnInit - ' + this.projectContent);

    this.interval = setInterval(() => {
      this.counter++;
      console.log(this.counter);
    }, 1000);
  }

  ngAfterContentInit(): void {
    console.log('Child AfterContentInit is called');
    console.log('Child AfterContentInit - ' + this.projectContent);
  }

  ngAfterViewInit(): void {
    console.log('Child AfterViewInit is called');
    console.log('Child AfterViewInit - ' + this.projectContent);
  }

  ngOnDestroy(): void {
    console.log('Child OnDestroy is called');
    clearInterval(this.interval);
  }
}
