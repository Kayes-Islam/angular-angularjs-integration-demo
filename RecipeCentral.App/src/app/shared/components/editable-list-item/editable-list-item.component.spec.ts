import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableListItemComponent } from './editable-list-item.component';

describe('EditableListItemComponent', () => {
  let component: EditableListItemComponent;
  let fixture: ComponentFixture<EditableListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
