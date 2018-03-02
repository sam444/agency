import PolicyStep from "../../../components/cyber/PolicyStep";
import PolicySideSummary from "../../../components/PolicySideSummary";
import Component from "../../../components/Component";
import {UICell,UIPage,UICardGroup,UICheckbox,UICard,UICurrency,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";

export default class Index extends Component {
    render() {
        return (
            <UIPage>
                    <div className="main">
                        <div className="row policyInfo">
                            <PolicyStep step="7"></PolicyStep>
                        </div>
                        <UICell type="row">
                            <UICell width="10" className="quoteInfo" id="quoteInfo">
                                <UICardGroup>
                                    <UICard title="SLB Information" width="12">
                                        <UISmartPanelGrid column="4">
                                            <UISelect label="Is this risk outside of the agent's domicile state?" codeTable={this.getState}  colspan="2"/>
                                            <UISelect label="Is this a multi-state risk?" codeTable={this.getState}  colspan="2"/>
                                            <UISelect label="Designate Home State" codeTable={this.getState}  />
                                            <UIText label="SLB Broker Name"/>
                                            <UINumber label="SLB License Number"/>
                                            <UIBlank></UIBlank>
                                            <UIText label="SLB Street Address" colspan="2"/>
                                            <UISelect label="SLB State" codeTable={this.getState} />
                                            <UISelect label="SLB City" codeTable={this.getState} />
                                        </UISmartPanelGrid>
                                    </UICard>
                                    <UICard title="Subjectivities" width="12">

                                    </UICard>
                                    <UICard width="12">
                                        <UICell type="row">
                                            <UICell width="4">
                                                <UIBox direction="left">
                                                    <UIButton value="Home" onClick={this.goto}>
                                                        <Param name="path" value="home" />
                                                    </UIButton>
                                                    <UIButton value="Back" onClick={this.goto}>
                                                        <Param name="path" value="quote/cyber/confirm" />
                                                    </UIButton>
                                                </UIBox>
                                            </UICell>
                                            <UICell width="8">
                                                <UIBox>
                                                    <UIButton value="Close" >
                                                        <Param name="path" value="product/list" />
                                                    </UIButton>
                                                    <UIButton value="Save" >
                                                        <Param name="path" value="product/list" />
                                                    </UIButton>
                                                    <UIButton value="Next" onClick={this.goto}>
                                                        <Param name="path" value="quote/cyber/issue" />
                                                    </UIButton>
                                                </UIBox>
                                            </UICell>
                                        </UICell>
                                    </UICard>
                                </UICardGroup>
                            </UICell>
                            <UICell width="2" className="summary">
                                <PolicySideSummary></PolicySideSummary>
                            </UICell>
                        </UICell>



                    </div>
            </UIPage>
        );
    }


}
