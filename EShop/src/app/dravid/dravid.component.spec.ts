import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DravidComponent } from './dravid.component';

describe('DravidComponent', () => {
  let component: DravidComponent;
  let fixture: ComponentFixture<DravidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DravidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DravidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
