import PolicyStep from "../../../components/cyber/PolicyStep";
import FormInfo from "../../../components/cyber/FormInfo";
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
                            <PolicyStep step="3"></PolicyStep>
                        </div>
                        <UICell type="row">
                            <UICell width="10" className="quoteInfo" id="quoteInfo">
                                <UICardGroup>
                                    <UICard width="12">
                                        <FormInfo></FormInfo>
                                    </UICard>

                                    <UICard width="12">
                                        <UICell type="row">
                                            <UICell width="4">
                                                <UIBox direction="left">
                                                    <UIButton value="Home" onClick={this.goto}>
                                                        <Param name="path" value="home" />
                                                    </UIButton>
                                                    <UIButton value="Back" onClick={this.goto}>
                                                        <Param name="path" value="quote/cyber/coverage" />
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
                                                        <Param name="path" value="quote/cyber/customer" />
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
