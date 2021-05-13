import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiancamentoChildFormComponent } from './affiancamento-child-form.component';

describe('AffiancamentoChildFormComponent', () => {
  let component: AffiancamentoChildFormComponent;
  let fixture: ComponentFixture<AffiancamentoChildFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiancamentoChildFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiancamentoChildFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
