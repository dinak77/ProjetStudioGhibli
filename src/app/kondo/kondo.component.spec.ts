import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KondoComponent } from './kondo.component';

describe('KondoComponent', () => {
  let component: KondoComponent;
  let fixture: ComponentFixture<KondoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KondoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
