import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildsinComponent } from './childsin.component';

describe('ChildsinComponent', () => {
  let component: ChildsinComponent;
  let fixture: ComponentFixture<ChildsinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildsinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildsinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
