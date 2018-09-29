import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingPlayersComponent } from './routing-players.component';

describe('RoutingPlayersComponent', () => {
  let component: RoutingPlayersComponent;
  let fixture: ComponentFixture<RoutingPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
