import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookFoodComponent } from './cook-food.component';

describe('CookFoodComponent', () => {
  let component: CookFoodComponent;
  let fixture: ComponentFixture<CookFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookFoodComponent]
    });
    fixture = TestBed.createComponent(CookFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
