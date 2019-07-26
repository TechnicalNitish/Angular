import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAndRestoreComponent } from './delete-and-restore.component';

describe('DeleteAndRestoreComponent', () => {
  let component: DeleteAndRestoreComponent;
  let fixture: ComponentFixture<DeleteAndRestoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAndRestoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAndRestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
