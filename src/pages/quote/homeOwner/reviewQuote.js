import PolicyStep from "../../../components/homeOwner/PolicyStep";
import ProductInfo from "../../../components/homeOwner/ProductInfo";
import PolicySideSummary from "../../../components/PolicySideSummary";
import Component from "../../../components/Component";
import {UICell,UIPage,UICardGroup,UICard,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";

export default class Index extends Component {
   
    render() {
        var showFlag = true;
        return (
            <UIPage>
                <div className="main">
                    <div className="row policyInfo">
                        <PolicyStep step="5"></PolicyStep>
                    </div>

                    <UICell type="row">
                        <UICell width="10" className="quoteSummary" id="quoteSummary" visibled={this.quoteSummaryShow}>
                        <UICardGroup>
                            <UICard title="Quote Summary"  width="12">
                                <UICard title="Quote is referred to UW for following reasons"  width="12">
                                </UICard>
                            </UICard>
                                <UICard width="12">
                                    <UICell type="row">
                                        <UICell width="12">
                                            <UIBox direction="right">
                                                <UIButton value="Back" styleClass="primary"  onClick={this.goto}>
                                                    <Param name="path" value="quote/homeOwner/coverage" />
                                                </UIButton>
                                                <UIButton value="Require More Info" styleClass="info" onClick={this.goto}>
                                                    <Param name="path" value="quote/homeOwner/ProductInfo" />
                                                </UIButton>
                                                <UIButton value="Reject" styleClass="warning" onClick={this.goto} >
                                                    <Param name="path" value="product/list" />
                                                </UIButton>
                                                <UIButton value="Approve" styleClass="success" onClick={this.goto}>
                                                    <Param name="path" value="product/list" />
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


quoteSummaryShow(){
    return true;
}


}
