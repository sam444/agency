import Component from "../Component";
import {UICell,UIPage,UICardGroup,UICheckbox,UICard,UICurrency,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber,UIPanel} from "rainbowui-core";

export default class MainCoverage extends Component {
    render() {
        return (
            <UICardGroup>
                <UICard  width="12">
                    <UISmartPanelGrid column="2">
                        <UISelect label="Form" codeTable={this.getState} />
                        <UINumber label="Main Coverage Premium"  />
                    </UISmartPanelGrid>
                </UICard>
                <UICard title="Property Coverages" width="12">
                    <UISmartPanelGrid column="4" >
                        <UISelect label="Coverage A Dwelling Limit" codeTable={this.getState} />
                        <UISelect label="Coverage B Other Structure Limit" codeTable={this.getState} />
                        <UISelect label="Coverage C Personl Property Limit" codeTable={this.getState} />
                        <UISelect label="Coverage D Loss of Use Limit" codeTable={this.getState} />
                        <UINumber label="TIV"  />
                        <UISelect label="Valution Type" codeTable={this.getState} />
                        <UISelect label="Deductible" codeTable={this.getState} />
                        <UISelect label="Windstorm or Hail Exclusion" codeTable={this.getState} />
                        <UISelect label="Ordinance or Law Percent" codeTable={this.getState} />
                    </UISmartPanelGrid>
                </UICard>
                <UICard title="Liability Coverages" width="12">
                    <UISmartPanelGrid column="4" >
                        <UISelect label="Coverage L Liability Limit" codeTable={this.getState} />
                        <UISelect label="Coverage M Medical Limit" codeTable={this.getState} />
                    </UISmartPanelGrid>
                </UICard>
            </UICardGroup>
        );
    }

    getState(){
        return new CodeTable([
            {id: 1000, text: "1,000"},
            {id: 1500, text: "1,500"},
        ], null, new CodeTableSorter());
    }

    getDataValue(){
        return [
            {"coverage":"Select","Factor":"","Plan1":"","Plan2":"","Plan3":""},
            {"coverage":"Premium","Factor":"","Plan1":"1500","Plan2":"1500","Plan3":"1500"},
            {"coverage":"Network Security","Factor":"Per Claim Limit","Plan1":"1500","Plan2":"1500","Plan3":"1500"},
            {"coverage":"","Factor":"Deductible","Plan1":"1500","Plan2":"1500","Plan3":"1500"},
            {"coverage":"Privacy","Factor":"Per Claim Limit","Plan1":"1500","Plan2":"1500","Plan3":"1500"},
            {"coverage":"","Factor":"Deductible","Plan1":"1500","Plan2":"1500","Plan3":"1500"},
            {"coverage":"Electronic Data","Factor":"Per Claim Limit","Plan1":"1500","Plan2":"1500","Plan3":"1500"},
            {"coverage":"","Factor":"Deductible","Plan1":"1500","Plan2":"1500","Plan3":"1500"},
            {"coverage":"Notification Or Remediation","Factor":"Per Claim Limit","Plan1":"1500","Plan2":"1500","Plan3":"1500"},
            {"coverage":"","Factor":"Deductible","Plan1":"1500","Plan2":"1500","Plan3":"1500"},

        ];
    }



}
