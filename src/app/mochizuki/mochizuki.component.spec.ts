import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MochizukiComponent } from './mochizuki.component';

describe('MochizukiComponent', () => {
  let component: MochizukiComponent;
  let fixture: ComponentFixture<MochizukiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MochizukiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MochizukiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
