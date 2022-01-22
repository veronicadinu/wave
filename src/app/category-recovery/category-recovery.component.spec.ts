import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRecoveryComponent } from './category-recovery.component';

describe('CategoryRecoveryComponent', () => {
  let component: CategoryRecoveryComponent;
  let fixture: ComponentFixture<CategoryRecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryRecoveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
