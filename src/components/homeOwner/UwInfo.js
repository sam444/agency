import Component from "../Component";
import {UIPanel,UICell,UIPage,UICardGroup,UICheckbox,UICard,UICurrency,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";

export default class Index extends Component {
    render() {
        const self = this;
        return (
        	<UICardGroup>
            <UICard title="Common" width="12">
		    	<UIText label="Number of years insured has been a home owner" value="12345" layout="horizontal" widthAllocation="9,3"/>
			    <UISelect label="How long has the insured been a customer of your agency?" codeTable={self.getInsuredPeriod} layout="horizontal" widthAllocation="9,3" showBlankOption="false"/>
			    <UISelect label="None-renewal Reason" codeTable={self.getNonrenewalReason} layout="horizontal" widthAllocation="9,3" showBlankOption="false"/>
            </UICard>
            <UICard title="Property" width="12">
		    	<UISelect label="Is the dwelling in a good state of repair (no rotted wood, no peeling paint, no broken window,etc)?" codeTable={self.getYesNo} layout="horizontal" widthAllocation="9,3" showBlankOption="false"/>
		    	<UISelect label="Is the dwelling built ower water?" codeTable={self.getYesNo} layout="horizontal" widthAllocation="9,3" showBlankOption="false"/>
		    	<UISelect label="Is the dwelling located in a special flood hazrd area?" codeTable={self.getYesNo} layout="horizontal" widthAllocation="9,3" showBlankOption="false"/>
            </UICard>
            <UICard title="Liability" width="12">
		    	<UISelect label="Are animals kept on the premises?" codeTable={self.getYesNo} layout="horizontal" widthAllocation="9,3" showBlankOption="false"/>
		    	<UISelect label="Are there pools, hot tubs, or trampolines on the premises?" codeTable={self.getYesNo} layout="horizontal" widthAllocation="9,3" showBlankOption="false"/>
		    	<UISelect label="Faming or Business Operation on Premises (including Day Care)" codeTable={self.getYesNo} layout="horizontal" widthAllocation="9,3" showBlankOption="false"/>
	        </UICard>
            </UICardGroup>
        );
    }

    getInsuredPeriod(){
        return new CodeTable([
            {id: 1, text: "New to Agency"},
            {id: 2, text: "One Year"}
        ], null, new CodeTableSorter());
    }
    getNonrenewalReason(){
        return new CodeTable([
            {id: 1, text: "Not Applicable"}
        ], null, new CodeTableSorter());
    }
    getYesNo(){
        return new CodeTable([
			{id: 1, text: "Yes"},
			{id: 2, text: "No"}
        ], null, null);
    }

    



}
