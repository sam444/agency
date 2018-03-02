import {UICard,UISplitButton,UIButtonItem,UIMenuItem,UISubMenu,UILink,UICell,Param} from "rainbowui-core";
import {UIListGroup,UIListItem} from "rainbowui-list-group";
import Component from "./Component";
import {PolicyStore,PolicyAction} from 'rainbow-foundation-sdk';

export default class Activities extends Component {

    constructor() {
        super();
        this.state ={
            policyList:[]
        };
    }

    render() {
        return (
                <UIListGroup>
                    {this.renderPolicyList()}
                </UIListGroup>
        );
    }

    renderPolicyList(){
        const policyListArray=[];
        this.state.policyList.forEach((policy)=>{
            policyListArray.push(
                <UIListItem value={policy["QuotationNo"]}  onClick={this.goToPolicyPage.bind(this)}>
                    <Param name="policy" value={policy}/>
                </UIListItem>

            )
        });
        return policyListArray;
    }

    componentDidMount(){
        const self = this;
        const url = this.getURL("POLICY_API","QUERY_POLICY");
        const conditions  = {"Module":"Policy","PageNo":1,"PageSize":5,"SortField":"index_time","SortType":"desc","Conditions":{"LobType":""},"FuzzyConditions":{},"OrConditions":{}}
        AjaxUtil.call(url,conditions,{"method":"POST"}).then((policyList)=>{
            self.setState({"policyList":policyList["Results"][0]["SolrDocs"]});
        })
    }

    goToPolicyPage(event){
        const policy = event.getParameter("policy");
        const pagePath = super.getPageRouter(policy["PolicyStatus"]);
        const url = this.getURL("POLICY_API","LOAD_POLICY");
        PolicyAction.loadPolicy(`${url}${policy['PolicyId']}`).then((policy) => {
            super.gotoPath(pagePath);
        });
    }

}

