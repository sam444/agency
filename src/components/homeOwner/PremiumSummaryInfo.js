import Component from "../Component";
import {UICell,UIPage,UICardGroup,UICheckbox,UICard,UICurrency,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";

export default class Index extends Component {
    render() {
        const self = this;
        return (
        	<UICardGroup>
	        	<UICard width="12">
		            <UIDataTable id="premiumSummary" value={this.getDataValue()} pageable="false" indexable="false" >
		                <UIColumn headerTitle="Coverages" value="CoverageName" width="auto">
		                    <UIText io="out" />
		                </UIColumn>
		                <UIColumn headerTitle="Premium" value="Premium">
		                    <UICurrency io="out"/>
		                </UIColumn>
		            </UIDataTable>
	            </UICard>
	        	<UICard width="12" title="Tax and Fee">
	        		<UISmartPanelGrid column="2">
	        			<UICurrency label="Policy Fee" value="1000"/>
	            		<UICurrency label="Stamping Fee" value="1000"/>
	        			<UICurrency label="State Fee" value="1000"/>
	            		<UICurrency label="MEGRA Fee" value="1000"/>
	        			<UICurrency label="Inspection Charge" value="1000"/>
	        		</UISmartPanelGrid>
		        </UICard>
	        </UICardGroup>
        );
    }

    getDataValue(){
        return [
                {"CoverageName":"Coverage A Dwelling","Premium":"1000"},
                {"CoverageName":"Coverage B Other Structures","Premium":"1000"},
                {"CoverageName":"Coverage D Loss of Use","Premium":"1000"},
                {"CoverageName":"Coverage L Liability","Premium":"1000"},
                {"CoverageName":"Totals","Premium":"4000"}
        ];
    }



}
