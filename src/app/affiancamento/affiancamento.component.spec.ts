import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiancamentoComponent } from './affiancamento.component';

describe('AffiancamentoComponent', () => {
  let component: AffiancamentoComponent;
  let fixture: ComponentFixture<AffiancamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiancamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
