import {UICell,UIWizard,UIWizardStep,UIButton,UIBox} from "rainbowui-core";
import Component from "../Component";

export default class PolicyStep extends Component {

    render() {
        return (
            <UICell type="row" >
                <UICell width="12">
                    <UIWizard id="wizard" activeIndex={this.props.step}>
                        <UIWizardStep title="Risk"/>
                        <UIWizardStep title="Coverage"/>
                        <UIWizardStep title="Form"/>
                        <UIWizardStep title="Customer"/>
                        <UIWizardStep title="Finalize Quote"/>
                        <UIWizardStep title="Confirm"/>
                        <UIWizardStep title="Bind"/>
                        <UIWizardStep title="Issue"/>
                    </UIWizard>
                </UICell>
            </UICell>
        );
    }


}
