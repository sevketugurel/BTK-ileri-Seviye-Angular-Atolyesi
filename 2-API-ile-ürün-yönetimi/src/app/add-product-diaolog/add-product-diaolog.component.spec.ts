import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductDiaologComponent } from './add-product-diaolog.component';

describe('AddProductDiaologComponent', () => {
  let component: AddProductDiaologComponent;
  let fixture: ComponentFixture<AddProductDiaologComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProductDiaologComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddProductDiaologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
