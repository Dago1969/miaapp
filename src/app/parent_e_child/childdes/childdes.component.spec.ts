import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilddesComponent } from './childdes.component';

describe('ChilddesComponent', () => {
  let component: ChilddesComponent;
  let fixture: ComponentFixture<ChilddesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChilddesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilddesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
