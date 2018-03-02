import PolicyStep from "../../../components/location/PolicyStep";
import BasicInfo from "../../../components/location/BasicInfo";
import PolicySideSummary from "../../../components/PolicySideSummary";
import Component from "../../../components/Component";
import {UICell,UIPage,UICardGroup,UICard,UIBox,UIMessageHelper,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";
import {PolicyStore,PolicyAction} from 'rainbow-foundation-sdk';

export default class Basic extends Component {

    constructor() {
        super();
        this.state ={
            customer:{},
        };
        this.policy = PolicyStore.getPolicy();
        this.policy["Notes"]=2;

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
                            <PolicyStep step="2"></PolicyStep>
                        </div>
                        <UICell type="row">
                            <UICell width="10" className="quoteInfo" id="quoteInfo">
                                <BasicInfo customer={this.state.customer}>
                                    <div width="12">
                                        <UICell type="row">
                                            <UICell width="4">
                                                <UIBox direction="left">
                                                    <UIButton value="主页" styleClass="warning" onClick={this.goto} visibled={this.isAgent()}>
                                                        <Param name="path" value="home" />
                                                    </UIButton>
                                                    <UIButton value="后退" onClick={this.next.bind(this)}>
                                                        <Param name="path" value="quote/location/rate" />
                                                    </UIButton>
                                                </UIBox>
                                            </UICell>
                                            <UICell width="8">
                                                <UIBox>
                                                    <UIButton value="保存" styleClass="primary" onClick={this.saveCustomer.bind(this)}>
                                                        <Param name="path" value="product/list" />
                                                    </UIButton>
                                                    <UIButton value="继续" styleClass="success" onClick={this.next.bind(this)} causeValidation="true">
                                                        <Param name="path" value="quote/location/address" />
                                                    </UIButton>
                                                </UIBox>
                                            </UICell>
                                        </UICell>
                                    </div>
                                </BasicInfo>
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
        const path = event.getParameter("path");
        this.save(path);
    }

    saveCustomer(){
        this.save();
    }

    save(path){
        AjaxUtil.show();
        const url = this.getURL('POLICY_API','SAVE_POLICY');
        const self = this;
        if(this.policy['ClientName']=='person'){
                const param = {
                    'objectName':'PartyIndividualCustomer',
                    'objectCode':'PartyIndividualCustomer'
                };
                const partyIndividualCustomer = PolicyStore.getObject(param);
                const PartyAddressParam = {
                    'objectName':'PartyAddress',
                    'objectCode':'PartyAddress',
                    'objectScope':partyIndividualCustomer
                };
                const partyAddress = PolicyStore.getObject(PartyAddressParam);
                partyIndividualCustomer["Name"] = self.state.customer['PartyName'];
                partyIndividualCustomer["IdType"] = self.state.customer['BookType'];
                partyIndividualCustomer["IdNo"] = self.state.customer['BookCode'];
                partyAddress['FullAddress'] = self.state.customer['Address'];
                PolicyAction.savePolicy(url).then((policy)=>{
                    if(path){
                        super.gotoPath(path);
                    }else{
                        AjaxUtil.hide();
                        UIMessageHelper.info("保存成功！",null, null);
                    }
                })
        }else if(this.policy['ClientName']=='company'){
            const param = {
                'objectName':'PartyOrgCustomer',
                'objectCode':'PartyOrgCustomer'
            };
            const partyOrgCustomer = PolicyStore.getObject(param);
            const PartyAddressParam = {
                'objectName':'PartyAddress',
                'objectCode':'PartyAddress',
                'objectScope':partyOrgCustomer
            };
            const partyAddress = PolicyStore.getObject(PartyAddressParam);
            partyOrgCustomer["PartyName"] = self.state.customer['PartyName'];
            partyOrgCustomer["IndustrySegment"] = self.state.customer['BookType'];
            partyOrgCustomer["RegisterNo"] = self.state.customer['BookCode'];
            partyAddress['FullAddress'] = self.state.customer['Address'];
            PolicyAction.savePolicy(url).then((policy)=>{
                if(path){
                    super.gotoPath(path);
                }else{
                    AjaxUtil.hide();
                    UIMessageHelper.info("保存成功！",null, null);
                }
            })
        }else{
            PolicyAction.savePolicy(url).then((policy)=>{
                AjaxUtil.hide();
                UIMessageHelper.info("保存成功！",null, null);
            })
        }

    }




}
