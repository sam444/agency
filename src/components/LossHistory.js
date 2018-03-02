import {UICell,UICard,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIDataTable,UIColumn,UICurrency,UILink,UIParam} from "rainbowui-core";
import Component from "./Component";

export default class LossHistory extends Component {

    render() {
        return (
            <UICell type="row">
                <UICard title="Loss History">
                          <UIDataTable  value={this.getDataValue()} pageable="true" indexable="false"  functions={this.buildTableFunction()}>
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
            </UICell>
        );
    };""

    getDataValue(){
       return [
         {"Period":"2017/0/01","Company":"abc","Paid":"1000","lossos":"1000","expenseos":"1000","Insured":"1000","Premium":"1000"},
         {"Period":"2017/0/01","Company":"abc","Paid":"1000","lossos":"1000","expenseos":"1000","Insured":"1000","Premium":"1000"},
        {"Period":"2017/0/01","Company":"abc","Paid":"1000","lossos":"1000","expenseos":"1000","Insured":"1000","Premium":"1000"},
        {"Period":"2017/0/01","Company":"abc","Paid":"1000","lossos":"1000","expenseos":"1000","Insured":"1000","Premium":"1000"}

       ];
    }


     buildTableFunction(){
      return (
        <div>
              <UILink icon="glyphicon glyphicon-plus" size="lg" tooltip="Add" iconClass="add_iconbtn" onClick={this.onShowEditDialog}>
                  <UIParam name="dialogId" value="childElementDialog" />
              </UILink>
              <UILink icon="glyphicon glyphicon-edit" size="lg" tooltip="Edit" iconClass="edit_iconbtn" >
                  <UIParam name="a" value="AA" />
                  <UIParam name="b" value="BB" />
              </UILink>
              <UILink icon="glyphicon glyphicon-trash" size="lg" tooltip="Delete" iconClass="delete_iconbtn">
                  <UIParam name="a" value="AA" />
                  <UIParam name="b" value="BB" />
              </UILink>
        </div>
      );
    }
}
