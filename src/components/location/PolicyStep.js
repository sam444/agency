import {UICell,UIWizard,UIWizardStep,UIButton,UIBox} from "rainbowui-core";
import Component from "../Component";

export default class PolicyStep extends Component {

    componentWillMount(){
        if(this.props.policy){
            this.props.policy["Notes"]=this.props.step;
        }
    }

    render() {
        return (
            <UICell type="row" >
                <UICell width="12">
                    <UIWizard id="wizard" activeIndex={this.props.step}>
                        <UIWizardStep title="询价"/>
                        <UIWizardStep title="客户信息"/>
                        <UIWizardStep title="场所信息"/>
                        <UIWizardStep title="保单确认"/>
                        <UIWizardStep title="支付方式"/>
                        <UIWizardStep title="承保"/>
                    </UIWizard>
                </UICell>
            </UICell>
        );
    }


}
