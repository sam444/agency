import Component from "./Component";

import {UICell,UIPage,UIDialog,UIEmail,UICardGroup,UICheckbox,UICard,UICurrency,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";

export default class User extends Component {
    render() {
        return (
            <UICardGroup>
                <UICard   width="12">
                    <UISmartPanelGrid column="4">
                        <UIText label="用户名称" />
                        <UISelect label="组织机构类型" codeTable={this.getState}/>
                        <UIText label="组织机构名称" />
                    </UISmartPanelGrid>
                    <UIBox>
                        <UIButton value="Search" styleClass="primary"/>
                        <UIButton value="Reset"/>
                    </UIBox>
                </UICard>
                <UICard  width="12">
                    <UIDataTable id="userTable"  value={this.getDataValue()} pageable="true" indexable="false"  functions={this.buildTableFunction()}>
                        <UIColumn selectionMode="single"/>
                        <UIColumn headerTitle="Policy Period" value="Period" width="auto">
                            <UIText io="out" />
                        </UIColumn>
                        <UIColumn headerTitle="Company" value="Company">
                            <UIText io="out" />
                        </UIColumn>
                        <UIColumn headerTitle="Total Loss Paid" value="Paid">
                            <UICurrency io="out" />
                        </UIColumn>
                        <UIColumn headerTitle="Total Loss O/S" value="lossos">
                            <UICurrency io="out" />
                        </UIColumn>
                        <UIColumn headerTitle="Total Expense O/S" value="expenseos">
                            <UICurrency io="out" />
                        </UIColumn>
                        <UIColumn headerTitle="Total Insured" value="Insured">
                            <UICurrency io="out" />
                        </UIColumn>
                        <UIColumn headerTitle="Total Premium" value="Premium">
                            <UICurrency io="out" />
                        </UIColumn>
                    </UIDataTable>
                </UICard>
                {this.props.children}
                <UIDialog id="addUser" title="新增用户">
                    <UICard   width="12" >
                        <UISmartPanelGrid column="4">
                            <UIText label="用户名称" required="true" />
                            <UIText label="电话号码" required="true"/>
                            <UIEmail label="邮件地址" required="true" />
                            <UISelect label="用户状态" codeTable={this.getState} required="true"/>
                            <UISelect label="用户类型" codeTable={this.getState} required="true"/>
                            <UIText label="机构名称" required="true"/>
                        </UISmartPanelGrid>
                        <UIBox>
                            <UIButton value="创建" styleClass="primary" causeValidation="true"/>
                            <UIButton value="重置"/>
                        </UIBox>
                    </UICard>
                </UIDialog>
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
            {"Period":"2017/0/01","Company":"abc","Paid":"1000","lossos":"1000","expenseos":"1000","Insured":"1000","Premium":"1000"},
            {"Period":"2017/0/01","Company":"abc","Paid":"1000","lossos":"1000","expenseos":"1000","Insured":"1000","Premium":"1000"},
            {"Period":"2017/0/01","Company":"abc","Paid":"1000","lossos":"1000","expenseos":"1000","Insured":"1000","Premium":"1000"},
            {"Period":"2017/0/01","Company":"abc","Paid":"1000","lossos":"1000","expenseos":"1000","Insured":"1000","Premium":"1000"}

        ];
    }

    onShowAddDialog(){
        UIDialog.show("addUser");
    }


    buildTableFunction(){
        return (
            <div>
                <UILink icon="glyphicon glyphicon-plus" size="lg" tooltip="Add" iconClass="add_iconbtn" onClick={this.onShowAddDialog}>
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
                <UILink icon="glyphicon glyphicon-share-alt" size="lg" tooltip="Assign" iconClass="delete_iconbtn">
                    <Param name="a" value="AA" />
                    <Param name="b" value="BB" />
                </UILink>
            </div>
        );
    }


}
