import BasicInfo from "../../../components/location/BasicInfo";
import AddressInfo from "../../../components/location/AddressInfo";
import CoverageInfo from "../../../components/location/CoverageInfo";
import Component from "../../../components/Component";
import Bill from "../../../components/Bill";
import PolicySideSummary from "../../../components/PolicySideSummary";
import PolicyStep from "../../../components/location/PolicyStep";

import {UICell,UIPage,UICardGroup,UICheckbox,UICard,UICurrency,UIEmail,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";
import {PolicyStore} from 'rainbow-foundation-sdk';

export default class Index extends Component {
    constructor() {
        super();
        this.state ={
            customer:[],
        };
        this.policy = PolicyStore.getPolicy();
        this.policy["Notes"]=4;
    }

    componentWillMount(){
        this.syncCustomer(this.policy,this.state.customer);
        this.setState({"customer":this.state.customer});
    }

    render() {
        return (
            <UIPage>
                <div className="main">
                    <div className="row policyInfo">
                        <PolicyStep step="4"></PolicyStep>
                    </div>
                    <UICell type="row">
                        <UICell width="10" className="quoteInfo" id="quoteInfo">
                            <UICardGroup>
                                <UICard title="保障信息" width="12">
                                    <CoverageInfo >
                                        <div></div>
                                    </CoverageInfo>
                                </UICard>
                                <UICard title="基本信息" width="12">
                                    <BasicInfo customer={this.state.customer}>
                                        <div></div>
                                    </BasicInfo>
                                </UICard>
                                <UICard title="产所信息" width="12">
                                    <AddressInfo >
                                        <div></div>
                                    </AddressInfo>
                                </UICard>
                                <UICard title="发票信息" width="12">
                                    <Bill>
                                        <div></div>
                                    </Bill>
                                </UICard>

                                <div width="12">
                                    <UICell type="row">
                                        <UICell width="4">
                                            <UIBox direction="left">
                                                <UIButton value="主页" styleClass="warning" onClick={this.goto} visibled={this.isAgent()}>
                                                    <Param name="path" value="home" />
                                                </UIButton>
                                                <UIButton value="后退" onClick={this.goto}>
                                                    <Param name="path" value="quote/location/address" />
                                                </UIButton>
                                            </UIBox>
                                        </UICell>
                                        <UICell width="8">
                                            <UIBox>
                                                <UIButton value="保存" styleClass="primary" onClick={this.savePolicy.bind(this)}>
                                                    <Param name="path" value="product/list" />
                                                </UIButton>
                                                <UIButton value="继续" styleClass="success" onClick={this.next.bind(this)} causeValidation="true">
                                                    <Param name="path" value="quote/location/pay" />
                                                </UIButton>
                                            </UIBox>
                                        </UICell>
                                    </UICell>
                                </div>
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

    next(event){
        AjaxUtil.show();
        const url = this.getURL("POLICY_API","BIND_POLICY");
        const policy = PolicyStore.getPolicy();
        AjaxUtil.call(url,policy,{"method":"POST"}).then((returnPolicy)=>{
            PolicyStore.setPolicy(returnPolicy);
            const path = event.getParameter("path");
            super.gotoPath(path);
        });
    }
}
