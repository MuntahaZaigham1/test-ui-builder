import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FieldRendererComponent } from 'ui-builder-library';
// import { FieldRendererComponent } from 'ui-builder-library/lib/angularMaterial/ag-grid/field-renderer/field-renderer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test-project-ui-builder';
  field:any;
  form: any;
  ddd: any[] = [
    { ss: null, qqqqq: null },
    { ss: null, qqqqq: null },
    { ss: null, qqqqq: null },
    { ss: null, qqqqq: null },
    { ss: null, qqqqq: null },
    { ss: null, qqqqq: null }
  ];
  colDefs1648818245656 = [
    {
      field:"hello",
      width:500,
      cellRenderer: "fieldRendererComponent",
      cellRendererParams: {
        value: {
          controls: [
            {
              type: "flexLayout",
              formField: true,
              id: 1649245439368,
              customId: 1649244588126,
              fxLayout: "row normal",
              fxFlex: 100,
              margin: "10",
              padding: "20",
              parentId: 1649245425119,
              columnIndex: 0,
              background:'red',
              value:[
                {
                  id: 1649245676203,
                  type: "button",
                  name: "button",
                  inputType: "button",
                  label: "Save",
                  insideStep: false,
                  fxFlexAlign: "auto",
                  formField: true,
                  customName: "button1649245676203",
                  customId: 1649245676203,
                  btnDirective: "mat-raised-button",
                  iconTypeIconButton: "fontLigature",
                  parentId: 1649245671004,
                  columnIndex: 0
                }
              ]
            }
          ]
        }
      }
    }
  ];

  context1648818245656:any;

  rowData1648818245656 = [
    {
      data: ""
    }
  ];

  frameworkComponents1648818245656 = {
    fieldRendererComponent: FieldRendererComponent,
  };
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
      fxFlex:90,
      onClick: { functionCB: this.fun, parameters: ["45"] }
    }
    const group = this.fb.group({});
    // group.addControl(this.field.formControl, this.fb.control(this.field.value));
    this.form = group;
    
  }
  ngOnInit(): void {
    this.context1648818245656 = {
      componentParent: this
    };
  }
  fun(parameters:any,event:any) {
    console.log(parameters,event);
  }
}
