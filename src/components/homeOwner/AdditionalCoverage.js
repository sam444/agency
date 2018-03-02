import Component from "../Component";
import {UICell,UIPage,UICardGroup,UICheckbox,UILabel,UICard,UICurrency,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber,UIPanel} from "rainbowui-core";

export default class AdditionalCoverage extends Component {
    render() {
        return (
            <UICell>
                    <UIPanel panelTitle="Schedule Personl Property" styleClass="primary" >
                       <UIDataTable value={this.getDataValue()} displayLength="5">
                            <UIColumn headerTitle="No." value="a" width="auto">
                                <UIText id="table151" io="out" />
                            </UIColumn>
                            <UIColumn headerTitle="Category"value="b" width="200px">
                                <UIText id="table151" io="out" />
                            </UIColumn>
                            <UIColumn headerTitle="Limit" value="c" width="200px">
                                <UIText id="table153" io="out"/>
                            </UIColumn>
                            <UIColumn headerTitle="Replacement" value="d" width="200px">
                                <UIText id="table154" io="out"/>
                            </UIColumn>
                            <UIColumn headerTitle="Description" value="e" width="200px">
                                <UIText id="table155" io="out"/>
                            </UIColumn>
                            <UIColumn headerTitle="Premium" value="f" width="200px">
                                <UIText id="table156" io="out"/>
                            </UIColumn>
                        </UIDataTable>
                    </UIPanel>
                    <UIPanel panelTitle="Unscheduled Property" styleClass="primary">
                     <UISmartPanelGrid column="4" >
                          <UINumber label="Business Property"  />
                           <UINumber label="Electronic Devices"  />
                            <UINumber label="Jewelry"  />
                             <UINumber label="Money"  />
                              <UINumber label="Securities"  />
                               <UINumber label="Silverware"  />
                                <UINumber label="Other"  />
                                 <UICurrency label="Premium"  />
                                 </UISmartPanelGrid>
                    </UIPanel>
                    <UIPanel panelTitle="Water Back Up and Sump Overflow" styleClass="primary">
                        <UISmartPanelGrid column="4" >
                            <UISelect label="Limit" codeTable={this.getState} />
                            <UINumber label="Premium"  />
                        </UISmartPanelGrid>
                    </UIPanel>
                    <UIPanel panelTitle="Identity Fraud Expense" styleClass="primary" >
                        <UISmartPanelGrid column="4" >
                            <UISelect label="Limit" codeTable={this.getState} />
                            <UINumber label="Premium"  />
                        </UISmartPanelGrid>
                    </UIPanel>
                    <UIPanel panelTitle="Private Structures" styleClass="primary" >
                          <UISelect label="Private Structure Form" codeTable={this.getState}  layout="vertical"/>
                          <UIDataTable value={this.getDataValue()} displayLength="5">
                            <UIColumn headerTitle="No." value="a" width="auto">
                                <UIText id="table151" io="out" />
                            </UIColumn>
                            <UIColumn headerTitle="Location of Structure" value="c" width="200px">
                                <UIText id="table153" io="out"/>
                            </UIColumn>
                            <UIColumn headerTitle="Description" value="d" width="200px">
                                <UIText id="table154" io="out"/>
                            </UIColumn>
                            <UIColumn headerTitle="Limit" value="e" width="200px">
                                <UIText id="table155" io="out"/>
                            </UIColumn>
                            <UIColumn headerTitle="Premium" value="f" width="200px">
                                <UIText id="table156" io="out"/>
                            </UIColumn>
                        </UIDataTable>
                    </UIPanel>
                    <UIPanel panelTitle="Business Activity Liability" styleClass="primary" >
                        <UISmartPanelGrid column="2" >
                    <UILabel label="Business Activities" size="5x"/>
                     <UILabel label="# Employee" size="5x" />
                        </UISmartPanelGrid>
                        <UIText label="Clerical"  size="5x" layout="horizontal"/>
                        <UIText label="SalesprsonNolnst"  size="5x" layout="horizontal"/>
                        <UIText label="Salespersonlnst"  size="5x" layout="horizontal"/>
                        <UIText label="Teacher"  size="5x" layout="horizontal"/>
                        <UIText label="TeacherNOC"  size="5x" layout="horizontal"/>
                        <UIText label="TeacherNP"  size="5x" layout="horizontal"/>
                        <UIText label="Clerical"  size="5x" layout="horizontal"/>
                        <UIText label="TeachNOCCP"  size="5x" layout="horizontal"/>
                        <UIText label="Premium"  size="5x" layout="horizontal"/>
                    </UIPanel>
                    <UIPanel panelTitle="Watercraft Liability" styleClass="primary" >
                        <UICardGroup>
                            <UICard width="12">
                                <UIPanel panelTitle="Inboard Liability">
                                </UIPanel>
                            </UICard>
                            <UICard width="12">
                                <UIPanel panelTitle="Outboard Liability">
                                </UIPanel>
                            </UICard>
                            <UICard width="12">
                                <UIPanel panelTitle="Sailboat Liability">
                                </UIPanel>
                            </UICard>
                        </UICardGroup>
                    </UIPanel>
                    <UIPanel panelTitle="Additional Insured" styleClass="primary" >
                    </UIPanel>
            </UICell>
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
            {"a":"1","b":"11","c":"111","d":"1111","e":"11111","f":"111111"},
            {"a":"2","b":"22","c":"222","d":"2222","e":"1500","f":"111111"},
            {"a":"3","b":"33","c":"333","d":"3333","e":"1500","f":"111111"},
            {"a":"4","b":"44","c":"444","d":"4444","e":"1500","f":"111111"},
            {"a":"5","b":"55","c":"555","d":"5555","e":"1500","f":"111111"},
            {"a":"6","b":"66","c":"666","d":"6666","e":"1500","f":"111111"},
            {"a":"7","b":"77","c":"777","d":"7777","e":"1500","f":"111111"},
            {"a":"8","b":"88","c":"888","d":"8888","e":"1500","f":"111111"},
            {"a":"9","b":"99","c":"999","d":"9999","e":"1500","f":"111111"},
            {"a":"0","b":"00","c":"000","d":"0000","e":"1500","f":"111111"},

        ];
    }



}
