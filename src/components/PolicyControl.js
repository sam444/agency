import {UICell,UIWizard,UIWizardStep,UIButton,UIBox} from "rainbowui-core";
import Component from "./Component";

export default class PolicyControl extends Component {

    render() {
        return (
            <UICell type="row" >
                <UICell width="7">
                    <UIWizard id="wizard">
                        <UIWizardStep title="Rate">
                        </UIWizardStep>
                        <UIWizardStep title="Quote">
                        </UIWizardStep>
                        <UIWizardStep title="Bind">
                        </UIWizardStep>
                        <UIWizardStep title="Issue">
                        </UIWizardStep>
                    </UIWizard>
                </UICell>
                <UICell width="5">
                    <UIBox>
                        <UIButton value="Save"></UIButton>
                        <UIButton value="Calculate"></UIButton>
                        <UIButton value="Close"></UIButton>
                        <UIButton value="Next"></UIButton>
                    </UIBox>
                </UICell>
            </UICell>
        );
    }


}
