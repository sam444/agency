import PolicyStep from "../../../components/homeOwner/PolicyStep";
import MainCoverage from "../../../components/homeOwner/MainCoverage";
import AdditionalCoverage from "../../../components/homeOwner/AdditionalCoverage";
import LossHistoryInfo from "../../../components/homeOwner/LossHistoryInfo";
import UwInfo from "../../../components/homeOwner/UwInfo";
import PremiumSummaryInfo from "../../../components/homeOwner/PremiumSummaryInfo";
import PolicySideSummary from "../../../components/PolicySideSummary";
import Component from "../../../components/Component";
import {UICell,UIPage,UICardGroup,UIDialog,UICheckbox,UICard,UICurrency,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber,UITab,UITabItem} from "rainbowui-core";

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
                            <UICardGroup>
                             <UICard width="12">
                             <UITab id="coverageTab">
                                            <UITabItem title="Main Coverage" >
                                                <MainCoverage/>
                                            </UITabItem>
                                             <UITabItem title="Additional Coverage">
                                                <AdditionalCoverage />
                                            </UITabItem>
                                             <UITabItem title="Loss History" >
                                                <LossHistoryInfo/>
                                            </UITabItem>
                                             <UITabItem title="UW Info">
                                                <UwInfo />
                                            </UITabItem>
                                            <UITabItem title="Premium Summary" >
                                                <PremiumSummaryInfo/>
                                            </UITabItem>
                                        </UITab>
                                        </UICard>
                                    <UICard width="12">
                                            <UICell type="row"  width="12">
                                             <UIBox direction="right" >
                                                    <UIButton value="Back" onClick={this.goto} styleClass="primary">
                                                        <Param name="path" value="quote/homeOwner/residence" />
                                                    </UIButton>
                                                    <UIButton value="Close" onClick={this.goto} styleClass="warning">
                                                        <Param name="path" value="product/list" />
                                                    </UIButton>
                                                    <UIButton value="Calculate Quote" styleClass="success" onClick={this.showConfirmDialog}>
                                                    </UIButton>
                                                </UIBox>
                                            </UICell>
                                    </UICard>
                                    </UICardGroup>
                            </UICell>   
                            <UICell width="2" className="summary">
                                <PolicySideSummary></PolicySideSummary>
                            </UICell> 

                            <UIDialog id="dialog" title="Quote is referred to UW for following reasons" modal="false">
                            	<UIBox>
                                <UIButton value="Create a New Quote" styleClass="primary"
                                          onClick={this.hideAndGoto}>
                                    <Param name="path" value="quote/homeOwner/productInfo" />
                                </UIButton>
                                <UIButton value="OK" styleClass="success" onClick={this.hideAndGoto}>
                                    <Param name="path" value="quote/homeOwner/reviewQuote" />
                                </UIButton>
                                </UIBox>
                    </UIDialog>                     
                        </UICell>
                           
                         
                    </div>
            </UIPage>
        );
    }

    showConfirmDialog(){
        UIDialog.show("dialog");
    }
    
    hideAndGoto(event){
    	UIDialog.hide("dialog");
    	 const path = event.getParameter("path");
         window.location.hash="/"+path;
    }
}
