import Component from "../Component";
import {UICell,UIPage,UICardGroup,UICheckbox,UICard,UICurrency,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";

export default class Index extends Component {
    render() {
        const self = this;
        return (
            <UIDataTable id="coverage"  value={this.getDataValue()} pageable="false" indexable="false" >
                <UIColumn headerTitle="Coverage" value="coverage" width="auto">
                    <UIText io="out" />
                </UIColumn>
                <UIColumn headerTitle="Factor" value="Factor">
                    <UIText io="out" />
                </UIColumn>
                <UIColumn headerTitle="Plan1"  render={(data)=>{
                    if(data["coverage"]=="Select"){
                        return (<UICheckbox  single="true"/>)
                    }else if(data["coverage"]=="Premium"){
                        return (<UICurrency value={data.Plan1} module={data} property="Plan1" io="out"/>)
                    }else{
                        return (<UISelect module={data} property="Plan1" codeTable={self.getState}/>)
                    }
                }}/>
                <UIColumn headerTitle="Plan2"  render={(data)=>{
                    if(data["coverage"]=="Select"){
                        return (<UICheckbox  single="true"/>)
                    }else if(data["coverage"]=="Premium"){
                        return (<UICurrency value={data.Plan1} module={data} property="Plan2" io="out"/>)
                    }else{
                        return (<UISelect module={data} property="Plan2" codeTable={self.getState}/>)
                    }
                }}/>
                <UIColumn headerTitle="Plan3"  render={(data)=>{
                    if(data["coverage"]=="Select"){
                        return (<UICheckbox  single="true"/>)
                    }else if(data["coverage"]=="Premium"){
                        return (<UICurrency value={data.Plan1} module={data} property="Plan3" io="out"/>)
                    }else{
                        return (<UISelect module={data} property="Plan3" codeTable={self.getState}/>)
                    }
                }}/>

            </UIDataTable>
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
