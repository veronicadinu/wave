import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTrainingComponent } from './category-training.component';

describe('CategoryTrainingComponent', () => {
  let component: CategoryTrainingComponent;
  let fixture: ComponentFixture<CategoryTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
