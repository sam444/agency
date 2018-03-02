import Component from "../Component";
import {UICell,UIPage,UICardGroup,UICheckbox,UICard,UICurrency,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";

export default class ProductInfo extends Component {
    render(){
        return(
            <UICardGroup>
                <UICard width="12">
                    <UISmartPanelGrid column="4">
                        <UIDateTimePicker label="Policy Effective Date"/>
                        <UIDateTimePicker label="Policy Expiration Date"/>
                    </UISmartPanelGrid>
                </UICard>

                {this.props.children}
            </UICardGroup>
        );
    }
}