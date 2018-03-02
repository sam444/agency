import Customer from "../../../components/Customer";
import PolicyStep from "../../../components/cyber/PolicyStep";
import PolicySideSummary from "../../../components/PolicySideSummary";
import Component from "../../../components/Component";
import {UICell,UIPage,UICardGroup,UICheckbox,UICard,UICurrency,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";

export default class Index extends Component {
    render() {
        const self = this;
        return (
            <UIPage>
                    <div className="main">
                        <div className="row policyInfo">
                            <PolicyStep step="4"></PolicyStep>
                        </div>
                        <UICell type="row">
                            <UICell width="10" className="quoteInfo" id="quoteInfo">
                                <Customer>
                                    <UICard width="12">
                                        <UICell type="row">
                                            <UICell width="6">
                                                <UIBox direction="left">
                                                    <UIButton value="Home" onClick={this.goto}>
                                                        <Param name="path" value="home" />
                                                    </UIButton>
                                                    <UIButton value="Back" onClick={this.goto}>
                                                        <Param name="path" value="quote/cyber/form" />
                                                    </UIButton>
                                                </UIBox>
                                            </UICell>
                                            <UICell width="6">
                                                <UIBox>
                                                    <UIButton value="Create" >
                                                        <Param name="path" value="customer/detail" />
                                                    </UIButton>
                                                    <UIButton value="Save" >
                                                        <Param name="path" value="product/list" />
                                                    </UIButton>
                                                    <UIButton value="Next" onClick={this.goto}>
                                                        <Param name="path" value="quote/cyber/finalizeQuote" />
                                                    </UIButton>
                                                </UIBox>
                                            </UICell>
                                        </UICell>
                                    </UICard>
                                </Customer>
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
