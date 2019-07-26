import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatenotecomponentComponent } from './updatenotecomponent.component';

describe('UpdatenotecomponentComponent', () => {
  let component: UpdatenotecomponentComponent;
  let fixture: ComponentFixture<UpdatenotecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatenotecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatenotecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
