import Customer from "../../../components/Customer";
import PolicyStep from "../../../components/homeOwner/PolicyStep";
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
                            <PolicyStep step="2"></PolicyStep>
                        </div>
                        <UICell type="row">
                            <UICell width="10" className="quoteInfo" id="quoteInfo">
                                <Customer>
                                    <UICard width="12">
                                        <UICell type="row">
                                            <UICell width="6">
                                                <UIBox direction="left">
                                                    <UIButton value="Create" onClick={this.goto}>
                                                        <Param name="path" value="customer/detail" />
                                                    </UIButton>
                                                </UIBox>
                                            </UICell>
                                            <UICell width="6">
                                                <UIBox direction="right">
                                                    <UIButton value="Back" onClick={this.goto} styleClass="primary">
                                                        <Param name="path" value="quote/homeOwner/productInfo" />
                                                    </UIButton>
                                                    <UIButton value="Close" styleClass="warning" onClick={this.goto}>
                                                        <Param name="path" value="product/list" />
                                                    </UIButton>
                                                    <UIButton value="Continue" styleClass="success" onClick={this.goto}>
                                                        <Param name="path" value="quote/homeOwner/residence" />
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
