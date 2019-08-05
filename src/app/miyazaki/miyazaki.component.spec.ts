import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiyazakiComponent } from './miyazaki.component';

describe('MiyazakiComponent', () => {
  let component: MiyazakiComponent;
  let fixture: ComponentFixture<MiyazakiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiyazakiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiyazakiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
