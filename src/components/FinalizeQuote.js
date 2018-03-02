import {UICell,UICardGroup,UICard,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UITextarea,UIEmail,UIDateTimePicker} from "rainbowui-core";
import Component from "./Component";

export default class FinalizeQuote extends Component {

    render() {
        return (
            <UICardGroup>
                <UICard width="12">
                    <UISmartPanelGrid column="3">
                        <UIDateTimePicker label="Quote Expiration Date" defaultValue="2015-01-14T00:00:00" />
                        <UIDateTimePicker label="Quote Remind Date" defaultValue="2015-01-14T00:00:00" />
                        <UITextarea label="Quote Description" colspan="3" rows="5"/>
                    </UISmartPanelGrid>
                </UICard>
                {this.props.children}
            </UICardGroup>
        );
    }




}
