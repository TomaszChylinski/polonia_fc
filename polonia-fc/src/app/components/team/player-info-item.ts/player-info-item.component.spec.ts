import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInfoItem } from './player-info-item.component';

describe('PlayerInfoItem', () => {
  let component: PlayerInfoItem;
  let fixture: ComponentFixture<PlayerInfoItem>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerInfoItem ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInfoItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
