
import PolicyStep from "../../../components/location/PolicyStep"; 
import CoverageInfo from "../../../components/location/CoverageInfo";
import PolicySideSummary from "../../../components/PolicySideSummary";
import Component from "../../../components/Component";
import {UICell,UIPage,UICardGroup,UICard,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";
import {PolicyStore,PolicyAction} from 'rainbow-foundation-sdk';

export default class rate extends Component {

    constructor() {
        super();
        this.state = {
            policy: null
        }
    }

    componentWillMount(){
        const self =this;
        const SESSION_POLICY_KEY = sessionStorage.getItem("SESSION_POLICY_KEY");
        if(SESSION_POLICY_KEY){
            this.state.policy = PolicyStore.getPolicy();
        }else{
            const createPolicyUrl = this.getURL('POLICY_API','CREATE_POLICY');
            const sevePolicyUrl = this.getURL('POLICY_API','SAVE_POLICY');
            const param ={
                'productCode':"COSPL_TY",
                'productVersion':"1.0",
                'createPolicyUrl':createPolicyUrl
            };
            const self = this;
            AjaxUtil.show();
            PolicyAction.createPolicy(param).then((policy) => {
                PolicyAction.savePolicy(sevePolicyUrl).then((policy) => {
                    self.setState({"policy":policy});
                });
            });
        }
    }

    render() {
        return (
            <UIPage>
                    <div className="main">
                        <div className="row policyInfo">
                            <PolicyStep step="1" policy={this.state.policy}></PolicyStep>
                        </div>

                        {this.renderCoverage()}

                    </div>
            </UIPage>
        );
    }


    renderCoverage(){
        if(this.state.policy){
            return (
                <UICell type="row">
                    <UICell width="10" className="quoteInfo" id="quoteInfo">
                        <CoverageInfo>
                            <div width="12">
                                <UICell type="row">
                                    <UICell width="4">
                                        <UIBox direction="left">
                                            <UIButton value="主页" styleClass="warning"  onClick={this.goto} visibled={this.isAgent()}>
                                                <Param name="path" value="home" />
                                            </UIButton>
                                            <UIButton value="后退" onClick={this.goto} visibled={this.isAgent()}>
                                                <Param name="path" value="home" />
                                            </UIButton>
                                        </UIBox>
                                    </UICell>
                                    <UICell width="8">
                                        <UIBox>
                                            <UIButton value="保存" styleClass="primary" onClick={this.savePolicy.bind(this)}>
                                            </UIButton>
                                            <UIButton value="继续" styleClass="success" onClick={this.next.bind(this)}>
                                                <Param name="path" value="quote/location/basic" />
                                            </UIButton>
                                        </UIBox>
                                    </UICell>
                                </UICell>
                            </div>
                        </CoverageInfo>
                    </UICell>
                    <UICell width="2" className="summary">
                        <PolicySideSummary></PolicySideSummary>
                    </UICell>
                </UICell>
            )
        }
    }



}
