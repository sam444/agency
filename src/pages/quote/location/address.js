import PolicyStep from "../../../components/location/PolicyStep";
import AddressInfo from "../../../components/location/AddressInfo";
import PolicySideSummary from "../../../components/PolicySideSummary";
import Component from "../../../components/Component";
import {UICell,UIPage,UICardGroup,UICard,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";
import {PolicyStore} from 'rainbow-foundation-sdk';

export default class Index extends Component {
    constructor() {
        super();
        const policy = PolicyStore.getPolicy();
        policy["Notes"]=3;
    }
    render() {
        return (
            <UIPage>
                   
                    <div className="main">
                        <div className="row policyInfo">
                            <PolicyStep step="3"></PolicyStep>
                        </div>
                        <UICell type="row">
                            <UICell width="10" className="quoteInfo" id="quoteInfo">
                                <AddressInfo>
                                    <div width="12">
                                        <UICell type="row">
                                            <UICell width="4">
                                                <UIBox direction="left">
                                                    <UIButton value="主页" styleClass="warning" onClick={this.goto} visibled={this.isAgent()}>
                                                        <Param name="path" value="home" />
                                                    </UIButton>
                                                    <UIButton value="后退" onClick={this.goto}>
                                                        <Param name="path" value="quote/location/basic" />
                                                    </UIButton>
                                                </UIBox>
                                            </UICell>
                                            <UICell width="8">
                                                <UIBox>
                                                    <UIButton value="保存" styleClass="primary" onClick={this.savePolicy.bind(this)}>
                                                    </UIButton>
                                                    <UIButton value="继续" styleClass="success" onClick={this.next.bind(this)} causeValidation="true">
                                                        <Param name="path" value="quote/location/coverage" />
                                                    </UIButton>
                                                </UIBox>
                                            </UICell>
                                        </UICell>
                                    </div>
                                </AddressInfo>
                            </UICell>
                            <UICell width="2" className="summary">
                                <PolicySideSummary ></PolicySideSummary>
                            </UICell>
                        </UICell>

                    </div>
            </UIPage>
        );
    }




}
