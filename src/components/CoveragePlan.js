import {UICell,UICard,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UITab,UITabItem,UIPanel} from "rainbowui-core";
import Component from "./Component";

export default class CoveragePlan extends Component {

    render() {
        return (
            <UICell type="row">
                <UICard title="Coverage Plan">
                     <UITab id="tab01">
                        <UITabItem title="Option 1">
                                       <UISmartPanelGrid column="3">
                                            <UISelect label="Policy Aggreagate Limit" codeTable={this.getOption} required="true"/>
                                            <UISelect label="ERP Option" codeTable={this.getOption}/>
                                       </UISmartPanelGrid>
                                       <UIPanel panelTitle="Network Security Liability" styleClass="primary">
                                           <UISmartPanelGrid column="3">
                                                <UISelect label="Coverage Form" codeTable={this.getOption} required="true"/>
                                                <UIDateTimePicker label="Retroactive Date" defaultValue="2015-01-14T00:00:00" required="true"/>
                                                <UISelect label="Per Claim Limit" codeTable={this.getOption} required="true"/>
                                                <UISelect label="Deductible" codeTable={this.getOption} required="true"/>
                                           </UISmartPanelGrid>
                                       </UIPanel>
                                       <UIPanel panelTitle="Privacy Liability" styleClass="primary">
                                           <UISmartPanelGrid column="3">
                                                <UISelect label="Coverage Form" codeTable={this.getOption} required="true"/>
                                                <UIDateTimePicker label="Retroactive Date" defaultValue="2015-01-14T00:00:00" required="true"/>
                                                <UISelect label="Per Claim Limit" codeTable={this.getOption} required="true"/>
                                                <UISelect label="Deductible" codeTable={this.getOption} required="true"/>
                                           </UISmartPanelGrid>
                                       </UIPanel>
                        </UITabItem>
                         <UITabItem title="Option 2">
                            <UISmartPanelGrid column="3">
                                 <UISelect label="Policy Aggreagate Limit" codeTable={this.getOption} required="true"/>
                                 <UISelect label="ERP Option" codeTable={this.getOption}/>
                            </UISmartPanelGrid>
                            <UIPanel panelTitle="Network Security Liability" styleClass="primary">
                                <UISmartPanelGrid column="3">
                                     <UISelect label="Coverage Form" codeTable={this.getOption} required="true"/>
                                     <UIDateTimePicker label="Retroactive Date" defaultValue="2015-01-14T00:00:00" required="true"/>
                                     <UISelect label="Per Claim Limit" codeTable={this.getOption} required="true"/>
                                     <UISelect label="Deductible" codeTable={this.getOption} required="true"/>
                                </UISmartPanelGrid>
                            </UIPanel>
                            <UIPanel panelTitle="Privacy Liability" styleClass="primary">
                                <UISmartPanelGrid column="3">
                                     <UISelect label="Coverage Form" codeTable={this.getOption} required="true"/>
                                     <UIDateTimePicker label="Retroactive Date" defaultValue="2015-01-14T00:00:00" required="true"/>
                                     <UISelect label="Per Claim Limit" codeTable={this.getOption} required="true"/>
                                     <UISelect label="Deductible" codeTable={this.getOption} required="true"/>
                                </UISmartPanelGrid>
                            </UIPanel>
                        </UITabItem>
                        <UITabItem title="Option 3">
                            <UISmartPanelGrid column="3">
                                 <UISelect label="Policy Aggreagate Limit" codeTable={this.getOption} required="true"/>
                                 <UISelect label="ERP Option" codeTable={this.getOption}/>
                            </UISmartPanelGrid>
                            <UIPanel panelTitle="Network Security Liability" styleClass="primary">
                                <UISmartPanelGrid column="3">
                                     <UISelect label="Coverage Form" codeTable={this.getOption} required="true"/>
                                     <UIDateTimePicker label="Retroactive Date" defaultValue="2015-01-14T00:00:00" required="true"/>
                                     <UISelect label="Per Claim Limit" codeTable={this.getOption} required="true"/>
                                     <UISelect label="Deductible" codeTable={this.getOption} required="true"/>
                                </UISmartPanelGrid>
                            </UIPanel>
                            <UIPanel panelTitle="Privacy Liability" styleClass="primary">
                                <UISmartPanelGrid column="3">
                                     <UISelect label="Coverage Form" codeTable={this.getOption} required="true"/>
                                     <UIDateTimePicker label="Retroactive Date" defaultValue="2015-01-14T00:00:00" required="true"/>
                                     <UISelect label="Per Claim Limit" codeTable={this.getOption} required="true"/>
                                     <UISelect label="Deductible" codeTable={this.getOption} required="true"/>
                                </UISmartPanelGrid>
                            </UIPanel>
                        </UITabItem>
                        <UITabItem title="Compare">
                            <h5>Compare</h5>
                        </UITabItem>
                    </UITab>
                </UICard>
            </UICell>
        );
    }

    getOption(){
       return new CodeTable([
            {id: 1, text: "1,000"},
            {id: 2, text: "2,000"},
        ], null, new CodeTableSorter());
    }
}
