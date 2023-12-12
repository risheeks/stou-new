import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFoodFormComponent } from './new-food-form.component';

describe('NewFoodFormComponent', () => {
  let component: NewFoodFormComponent;
  let fixture: ComponentFixture<NewFoodFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewFoodFormComponent]
    });
    fixture = TestBed.createComponent(NewFoodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
