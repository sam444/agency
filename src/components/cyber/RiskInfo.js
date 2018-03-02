import Component from "../Component";
import {UICell,UIPage,UICardGroup,UICheckbox,UICard,UICurrency,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";

export default class RiskInfo extends Component {
    render() {
        return (
            <UICardGroup>
                <UICard width="12">
                    <UISmartPanelGrid column="4">
                        <UISelect label="Primary State" codeTable={this.getState} required="true"/>
                        <UIDateTimePicker label="From" defaultValue="2015-01-14T00:00:00" required="true"/>
                        <UIDateTimePicker label="To" defaultValue="2015-01-14T00:00:00" required="true"/>
                        <UIBlank></UIBlank>
                        <UISelect label="Coverage Form" codeTable={this.getState} required="true"/>
                        <UIDateTimePicker label="Retroactive Date" required="true" defaultValue="2015-01-14T00:00:00" />
                        <UINumber value="100000" label="Annual Insured Record Count" required="true"></UINumber>
                        <UISelect label="Insured Record Type" codeTable={this.getState} required="true"/>
                        <UINumber value="100000" label="Total Annual Gross Income" required="true"></UINumber>
                        <UISelect label="Policy Aggregate Limit" codeTable={this.getState} required="true"/>
                        <UISelect label="ERP Option" codeTable={this.getState} required="true"/>
                    </UISmartPanelGrid>
                </UICard >

                <UICard width="12">
                    <UIDataTable id="classCode"  value={this.getDataValue()} pageable="false" indexable="false"  functions={this.buildTableFunction()}>
                        <UIColumn selectionMode="single"/>
                        <UIColumn headerTitle="Class Description" value="Period" width="auto">
                            <UIText io="out" />
                        </UIColumn>
                        <UIColumn headerTitle="Hazard Group" value="Company">
                            <UIText io="out" />
                        </UIColumn>
                        <UIColumn headerTitle="%Exposure" value="Paid">
                            <UINumber io="out" />
                        </UIColumn>

                    </UIDataTable>
                </UICard>

                {this.props.children}

            </UICardGroup>
        );
    }

    getState(){
        return new CodeTable([
            {id: 1000, text: "1,000"},
            {id: 1500, text: "1,500"},
        ], null, new CodeTableSorter());
    }

    getDataValue(){
        return [
            {"Period":"TX","Company":"Monthly Premium Surcharge","Paid":"415"},
            {"Period":"TX","Company":"Monthly Premium Surcharge","Paid":"415"},
            {"Period":"TX","Company":"Monthly Premium Surcharge","Paid":"415"},
            {"Period":"TX","Company":"Monthly Premium Surcharge","Paid":"415"},
            {"Period":"TX","Company":"Monthly Premium Surcharge","Paid":"415"}
        ];
    }


    buildTableFunction(){
        return (
            <div>
                <UILink icon="glyphicon glyphicon-plus" size="lg" tooltip="Add" iconClass="add_iconbtn" onClick={this.onShowEditDialog}>
                    <Param name="dialogId" value="childElementDialog" />
                </UILink>
                <UILink icon="glyphicon glyphicon-edit" size="lg" tooltip="Edit" iconClass="edit_iconbtn" >
                    <Param name="a" value="AA" />
                    <Param name="b" value="BB" />
                </UILink>
                <UILink icon="glyphicon glyphicon-trash" size="lg" tooltip="Delete" iconClass="delete_iconbtn">
                    <Param name="a" value="AA" />
                    <Param name="b" value="BB" />
                </UILink>
            </div>
        );
    }
}
