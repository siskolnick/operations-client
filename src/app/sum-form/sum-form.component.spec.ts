import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumFormComponent } from './sum-form.component';

describe('SumFormComponent', () => {
  let component: SumFormComponent;
  let fixture: ComponentFixture<SumFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
