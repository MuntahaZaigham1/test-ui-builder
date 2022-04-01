import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test-project-ui-builder';
  field:any;
  form: any;
  constructor(    private fb: FormBuilder    ){
    this.field= {
      id: 1648564184459,
      type: "button",
      name: "button",
      // inputType: "button",
      label: "sdsdsd",
      insideStep: false,
      fxFlexAlign: "auto",
      // formField: true,
      matFormFieldColor: "accent",
      // from:"rightSideBar",
      customName: "button1648564009814",
      customId: 1648564009814,
      title:"hello",
      btnDirective: "mat-raised-button",
      iconTypeIconButton: "fontLigature",
      parentId: 1648564182543,
      columnIndex: 0,
      onClick: { functionCB: this.fun, parameters: [] }
    }
    const group = this.fb.group({});
    // group.addControl(this.field.formControl, this.fb.control(this.field.value));
    this.form = group;
  }
  ngOnInit(): void {
      
  }
  fun(event:any) {
    console.log(event);
  }
}
