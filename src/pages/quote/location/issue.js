
import Component from "../../../components/Component";
import PolicySideSummary from "../../../components/PolicySideSummary";
import PolicyStep from "../../../components/location/PolicyStep";
import {PolicyStore} from 'rainbow-foundation-sdk';
import {UICell,UIPage,UICardGroup,UICheckbox,UICard,UICurrency,UIEmail,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";

export default class Index extends Component {
    constructor() {
        super();
        this.state ={
            policy:PolicyStore.getPolicy(),
        };
    }
    componentWillMount(){
        if(this.state.policy["NewbizStatus"]!="120"){
            AjaxUtil.show();
            const url = this.getURL("POLICY_API","ISSUE_POLICY");
            this.state.policy["Notes"]=6;
            AjaxUtil.call(url,this.state.policy,{"method":"POST"}).then((returnPolicy)=>{
                PolicyStore.setPolicy(returnPolicy);
                this.setState({'policy':PolicyStore.getPolicy()})
            });
        }
    }

    renderIssuePolicyMessage(){
        if(this.state.policy.TradeNo){
            return <div className="issue" ></div>
        }else{
            return <div className="row" style={{margin:'auto'}}>正在出单请稍后.....</div>
        }
    }

    render() {
        return (
            <UIPage>
                    <div className="main">
                        <div className="row policyInfo">
                            <PolicyStep step="6"></PolicyStep>
                        </div>
                        <UICell type="row">
                            <UICell width="10" className="quoteInfo" id="quoteInfo">
                                <UICardGroup>
                                    <UICard  width="12">
                                        {this.renderIssuePolicyMessage()}
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
