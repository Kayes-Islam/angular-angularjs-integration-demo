import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rc-editable-list-item',
  templateUrl: './editable-list-item.component.html',
  styleUrls: ['./editable-list-item.component.scss']
})
export class EditableListItemComponent {
  @Input() text: string;
  @Output() textChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() editorSize: "sm" | "lg" = "sm";

  editText:string;
  isEditMode: boolean = false;

  constructor() { }

  changeText(value: string){
    if(this.text === value)
      return;

    this.text = value;
    this.textChange.emit(value);
  }

  enterEditMode(){
    this.editText = this.text;
    this.isEditMode = true;
  }

  acceptChange(){
    this.changeText(this.editText);
    this.isEditMode = false;
  }

  discardChange(){
    this.isEditMode = false;
  }
}
