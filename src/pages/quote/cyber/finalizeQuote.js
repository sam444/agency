import FinalizeQuote from "../../../components/FinalizeQuote";
import PolicyStep from "../../../components/cyber/PolicyStep";
import PolicySideSummary from "../../../components/PolicySideSummary";
import Component from "../../../components/Component";
import {UICell,UIPage,UICardGroup,UICheckbox,UICard,UICurrency,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";

export default class finalizeQuote extends Component {
    render() {
        const self = this;
        return (
            <UIPage>
                    <div className="main">
                        <div className="row policyInfo">
                            <PolicyStep step="5"></PolicyStep>
                        </div>
                        <UICell type="row">
                            <UICell width="10" className="quoteInfo" id="quoteInfo">
                                    <FinalizeQuote>
                                        <UICard width="12">
                                            <UICell type="row">
                                                <UICell width="4">
                                                    <UIBox direction="left">
                                                        <UIButton value="Home" onClick={this.goto}>
                                                            <Param name="path" value="home" />
                                                        </UIButton>
                                                        <UIButton value="Back" onClick={this.goto}>
                                                            <Param name="path" value="quote/cyber/customer" />
                                                        </UIButton>
                                                    </UIBox>
                                                </UICell>
                                                <UICell width="8">
                                                    <UIBox>
                                                        <UIButton value="Sent Quote" >
                                                            <Param name="path" value="product/list" />
                                                        </UIButton>
                                                        <UIButton value="Save" >
                                                            <Param name="path" value="product/list" />
                                                        </UIButton>
                                                        <UIButton value="Next" onClick={this.goto}>
                                                            <Param name="path" value="quote/cyber/confirm" />
                                                        </UIButton>
                                                    </UIBox>
                                                </UICell>
                                            </UICell>
                                        </UICard>
                                    </FinalizeQuote>
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
