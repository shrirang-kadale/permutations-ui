import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatePermutationsComponent } from './calculate-permutations.component';

describe('CalculatePermutationsComponent', () => {
  let component: CalculatePermutationsComponent;
  let fixture: ComponentFixture<CalculatePermutationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatePermutationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatePermutationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
