import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomwPageComponent } from './homw-page.component';

describe('HomwPageComponent', () => {
  let component: HomwPageComponent;
  let fixture: ComponentFixture<HomwPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomwPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomwPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
