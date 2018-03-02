import PolicyStep from "../../../components/homeOwner/PolicyStep";
import ProductInfo from "../../../components/homeOwner/ProductInfo";
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
                            <ProductInfo>
                                <UICard width="12">
                                    <UICell type="row">
                                        <UICell width="12">
                                            <UIBox direction="right">
                                                <UIButton value="Close" styleClass="warning">
                                                    <Param name="path" value="product/list" />
                                                </UIButton>
                                                <UIButton value="Continue" styleClass="success" onClick={this.goto}>
                                                    <Param name="path" value="quote/homeOwner/customer" />
                                                </UIButton>
                                            </UIBox>
                                        </UICell>
                                    </UICell>
                                </UICard>
                            </ProductInfo>
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
