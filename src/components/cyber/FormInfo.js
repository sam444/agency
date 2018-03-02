import Component from "../Component";
import {UICell,UIPage,UICardGroup,UICheckbox,UICard,UICurrency,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";

export default class Index extends Component {
    render() {
        const self = this;
        return (
            <UIDataTable id="form" value={this.getDataValue()} pageable="false" indexable="false" >
                <UIColumn selectionMode="multiple" enabled="true" />

                <UIColumn headerTitle="Form Number" value="Number" width="auto">
                    <UIText io="out" />
                </UIColumn>
                <UIColumn headerTitle="Form Title" value="Title">
                    <UIText io="out" />
                </UIColumn>
                <UIColumn headerTitle="Form Description" value="Description">
                    <UIText io="out" />
                </UIColumn>


            </UIDataTable>
        );
    }

    getDataValue(){
        return [
            {"Number":"CYBPL 003","Title":"Special Form","Description":"Special Form Description"},
            {"Number":"CYBPL 003","Title":"Special Form","Description":"Special Form Description"},
            {"Number":"CYBPL 003","Title":"Special Form","Description":"Special Form Description"},

        ];
    }



}
