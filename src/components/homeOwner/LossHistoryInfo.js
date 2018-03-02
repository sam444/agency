import Component from "../Component";
import {UICell,UIPage,UICardGroup,UICheckbox,UICard,UICurrency,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";

export default class Index extends Component {
    render() {
        const self = this;
        return (
            <UIDataTable id="lossHistory" value={this.getDataValue()} pageable="true" indexable="false" >
                <UIColumn headerTitle="Claims Type" value="ClaimType" width="auto">
                    <UIText io="out" />
                </UIColumn>
                <UIColumn headerTitle="Claims Date" value="ClaimDate">
                    <UIText io="out" />
                </UIColumn>
                <UIColumn headerTitle="Amount Paid" value="Amount">
                    <UIText io="out" />
                </UIColumn>
                <UIColumn headerTitle="Claim Description" value="Description">
                    <UIText io="out" />
                </UIColumn>


            </UIDataTable>
        );
    }

    getDataValue(){
        return [
                {"ClaimType":"Loss Indemnity","ClaimDate":"2016/01/01","Amount":"10000","Description":"Special Claim Description"},
                {"ClaimType":"Loss Indemnity","ClaimDate":"2016/01/01","Amount":"10000","Description":"Special Claim Description"},
                {"ClaimType":"Loss Indemnity","ClaimDate":"2016/01/01","Amount":"10000","Description":"Special Claim Description"},
                {"ClaimType":"Loss Indemnity","ClaimDate":"2016/01/01","Amount":"10000","Description":"Special Claim Description"},
                {"ClaimType":"Loss Indemnity","ClaimDate":"2016/01/01","Amount":"10000","Description":"Special Claim Description"},
                {"ClaimType":"Loss Indemnity","ClaimDate":"2016/01/01","Amount":"10000","Description":"Special Claim Description"}

        ];
    }



}
