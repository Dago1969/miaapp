import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSediComponent } from './lista-sedi.component';

describe('ListaSediComponent', () => {
  let component: ListaSediComponent;
  let fixture: ComponentFixture<ListaSediComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSediComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
