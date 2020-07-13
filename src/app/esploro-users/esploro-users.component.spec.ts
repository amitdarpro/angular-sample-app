import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsploroUsersComponent } from './esploro-users.component';

describe('EsploroUsersComponent', () => {
  let component: EsploroUsersComponent;
  let fixture: ComponentFixture<EsploroUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsploroUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsploroUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
