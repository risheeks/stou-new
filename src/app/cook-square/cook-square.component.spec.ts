import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookSquareComponent } from './cook-square.component';

describe('CookSquareComponent', () => {
  let component: CookSquareComponent;
  let fixture: ComponentFixture<CookSquareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookSquareComponent]
    });
    fixture = TestBed.createComponent(CookSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
