import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalDocOverviewComponent } from './legal-doc-overview.component';

describe('LegalDocOverviewComponent', () => {
  let component: LegalDocOverviewComponent;
  let fixture: ComponentFixture<LegalDocOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalDocOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalDocOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
