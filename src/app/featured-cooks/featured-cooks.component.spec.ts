import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCooksComponent } from './featured-cooks.component';

describe('FeaturedCooksComponent', () => {
  let component: FeaturedCooksComponent;
  let fixture: ComponentFixture<FeaturedCooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedCooksComponent]
    });
    fixture = TestBed.createComponent(FeaturedCooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
