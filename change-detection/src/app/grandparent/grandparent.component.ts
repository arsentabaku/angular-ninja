import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
})
export class GrandparentComponent implements OnInit {
  title = '';
  constructor() {}

  ngOnInit(): void {}

  grandparent() {
    return 'Enter input: ';
  }
}
