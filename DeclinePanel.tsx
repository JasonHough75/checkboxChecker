import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { BaseDialog, IDialogConfiguration } from '@microsoft/sp-dialog';
import statements from './statements';
import {
    autobind,
    ColorPicker,
    PrimaryButton,
    Button,
    DialogFooter,
    DialogContent,
    TextField,
    Dialog,
    inputProperties,
    BasePeopleSelectedItemsList,
    Label
   } from 'office-ui-fabric-react';
   

 

export class CheckboxSelector extends React.Component<any, any> {
    constructor(props: {}) {
      super(props);
      this._onCheckboxChange = this._onCheckboxChange.bind(this);
      
      
    
}

public render(): JSX.Element {

  
 const CheckBoxStatements = this.props.statements;
 const StatementList = CheckBoxStatements.map(statement => { 

   return (
     
     <Checkbox label={statement.statement} onChange={this.handleClick} name={statement.statement}/>
     
     );
   });




  return (
    <Panel
      headerText='Decline Options'
      type={PanelType.medium}
      isOpen={true}>
      <ul>
        {StatementList}
      </ul>

      
        
        
    </Panel>
    );
  }

  public handleClick (e) {
    console.log(e.target.name);
    
    
    
}   
  
  private _onCheckboxChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean): void {
    console.log(isChecked);
  }

 

}

export default class DeclinePanel extends BaseDialog {
    

    
    public emailaddress: string;

    public render(): void {
        ReactDOM.render(<CheckboxSelector statements={statements}/>, this.domElement);
      }
    }

    
