import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenzaComponent } from './sequenza.component';

describe('SequenzaComponent', () => {
  let component: SequenzaComponent;
  let fixture: ComponentFixture<SequenzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SequenzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
