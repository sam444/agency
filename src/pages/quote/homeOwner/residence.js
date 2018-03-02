import PolicyStep from "../../../components/homeOwner/PolicyStep";
import RiskInfo from "../../../components/homeOwner/Residence";
import PolicySideSummary from "../../../components/PolicySideSummary";
import Component from "../../../components/Component";
import {UICell,UIPage,UICardGroup,UICard,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";

export default class Index extends Component {
    render() {
        return (
            <UIPage>
                <div className="main">
                    <div className="row policyInfo">
                        <PolicyStep step="3"></PolicyStep>
                    </div>

                    <UICell type="row">
                        <UICell width="10" className="quoteInfo" id="quoteInfo">
                            <RiskInfo>
                                 <UICard width="12">
                                        <UICell type="row">
                                            <UICell width="12">
                                                <UIBox direction="right">
                                                    <UIButton value="Back" onClick={this.goto} styleClass="primary">
                                                        <Param name="path" value="quote/homeOwner/customer" />
                                                    </UIButton>
                                                    <UIButton value="Close" onClick={this.goto} styleClass="warning">
                                                        <Param name="path" value="product/list" />
                                                    </UIButton>
                                                    <UIButton value="Continue" styleClass="success" onClick={this.goto}>
                                                        <Param name="path" value="quote/homeOwner/coverage" />
                                                    </UIButton>
                                                </UIBox>
                                            </UICell>
                                        </UICell>
                                    </UICard>
                            </RiskInfo>
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
