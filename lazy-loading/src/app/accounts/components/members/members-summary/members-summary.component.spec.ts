import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersSummaryComponent } from './members-summary.component';

describe('MembersSummaryComponent', () => {
  let component: MembersSummaryComponent;
  let fixture: ComponentFixture<MembersSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
