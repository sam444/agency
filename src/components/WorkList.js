import {UICard,UISplitButton,UIButtonItem,UIMenuItem,UISubMenu,UIText} from "rainbowui-core";
import {UIListGroup,UIListItem} from "rainbowui-list-group";
import Component from "./Component";

export default class WorkList extends Component {

    constructor() {
        super();
        this.state ={
            workList:null
        };
    }

    render() {
        return (
                <UIListGroup>
                    {this.renderWorkList()}
                </UIListGroup>
        );
    }

    renderWorkList(){
        const policyListArray=[];
        const worklist = this.state.workList;
        if(worklist){
            policyListArray.push(<UIListItem value="询价中"  badge={worklist["Quote"]} badgeClass="primary"/>);
            policyListArray.push(<UIListItem value="待支付"  badge={worklist["Bind"]} badgeClass="primary"/>);
            policyListArray.push(<UIListItem value="已出单"  badge={worklist["Issue"]} badgeClass="primary"/>);
            policyListArray.push(<UIListItem value="拒绝单"  badge={worklist["Cancel"]==0?"0":worklist["Cancel"]} badgeClass="primary"/>);
        }
        return policyListArray;
    }


    componentDidMount(){
        const self = this;
        const url = this.getURL("HOME_API","WORK_LIST");
        AjaxUtil.call(url).then((workList)=>{
            self.setState({"workList":workList});
        })
    }

}

