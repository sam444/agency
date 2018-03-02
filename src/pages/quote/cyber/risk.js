import PolicyStep from "../../../components/cyber/PolicyStep";
import RiskInfo from "../../../components/cyber/RiskInfo";
import PolicySideSummary from "../../../components/PolicySideSummary";
import Component from "../../../components/Component";
import {UICell,UIPage,UICardGroup,UICard,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";

export default class Index extends Component {
    render() {
        return (
            <UIPage>
                    <div className="main">
                        <div className="row policyInfo">
                            <PolicyStep step="1"></PolicyStep>
                        </div>
                        <UICell type="row">
                            <UICell width="10" className="quoteInfo" id="quoteInfo">
                                <RiskInfo>
                                    <UICard width="12">
                                        <UICell type="row">
                                            <UICell width="4">
                                                <UIBox direction="left">
                                                    <UIButton value="Home" onClick={this.goto}>
                                                        <Param name="path" value="home" />
                                                    </UIButton>
                                                    <UIButton value="Back" onClick={this.goto}>
                                                        <Param name="path" value="quote/product" />
                                                    </UIButton>
                                                </UIBox>
                                            </UICell>
                                            <UICell width="8">
                                                <UIBox>
                                                    <UIButton value="Close">
                                                        <Param name="path" value="product/list" />
                                                    </UIButton>
                                                    <UIButton value="Save" >
                                                        <Param name="path" value="product/list" />
                                                    </UIButton>
                                                    <UIButton value="Next" onClick={this.goto}>
                                                        <Param name="path" value="quote/cyber/coverage" />
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
