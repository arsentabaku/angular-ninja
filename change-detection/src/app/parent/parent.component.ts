import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent implements OnInit {
  public parentArray: number[];

  constructor(private changeDetector: ChangeDetectorRef) {
    this.parentArray = [];
  }

  ngOnInit(): void {
    setInterval(() => {
      this.parentArray = [Math.random()];
      // this.changeDetector.markForCheck();
    }, 1000);
  }

  parent() {
    // console.log('parent');
    return 'parent';
  }
}
