import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookFoodListComponent } from './cook-food-list.component';

describe('CookFoodListComponent', () => {
  let component: CookFoodListComponent;
  let fixture: ComponentFixture<CookFoodListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookFoodListComponent]
    });
    fixture = TestBed.createComponent(CookFoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
