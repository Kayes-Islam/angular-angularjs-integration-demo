import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableListItemComponent } from './editable-list-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('EditableListItemComponent', () => {
  let component: EditableListItemComponent;
  let fixture: ComponentFixture<EditableListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
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

  describe("when in edit mode", () => {
    beforeEach(() => {
      component.enterEditMode();
    });
    it('isEditMode should be true', () =>{
      expect(component.isEditMode).toBeTruthy();
    });
    it('should exit edit mode on accept change', () => {
      component.acceptChange();
      expect(component.isEditMode).toBeFalsy();
    });
    it('should exit edit mode on discard change', () => {
      component.discardChange();
      expect(component.isEditMode).toBeFalsy();
    });
  });
  
});
