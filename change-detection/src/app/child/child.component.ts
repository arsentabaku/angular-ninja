import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',

  // METHOD 1/1
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  @Input() childArray: number[] = [];
  number = 0;

  constructor(private changeDetector: ChangeDetectorRef) {
    // METHOD 2/1
    // this.changeDetector.detach();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.number = Math.random();
      // METHOD 1/2
      this.changeDetector.markForCheck();

      // METHOD 2/2
      // this.changeDetector.detectChanges();
    }, 2000);
  }

  child() {
    console.log('child');
    return 'child';
  }
}
