import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiancamentoChildTableComponent } from './affiancamento-child-table.component';

describe('AffiancamentoChildTableComponent', () => {
  let component: AffiancamentoChildTableComponent;
  let fixture: ComponentFixture<AffiancamentoChildTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiancamentoChildTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiancamentoChildTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
