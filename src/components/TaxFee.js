import {UICell,UICard,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIDataTable,UIPercent,UINumber,UIColumn,UICurrency,UILink,UIParam} from "rainbowui-core";
import Component from "./Component";

export default class Taxfee extends Component {

    render() {
        return (
            <UICell type="row">
                <UICard title="Tax&Fee">
                          <UIDataTable  value={this.getDataValue()} pageable="false" indexable="false"  functions={this.buildTableFunction()}>
                            <UIColumn selectionMode="single"/>
                            <UIColumn headerTitle="State" value="Period" width="auto">
                                <UIText io="out" />
                            </UIColumn>
                            <UIColumn headerTitle="Tax&Fee Type" value="Company">
                                <UIText io="out" />
                            </UIColumn>
                            <UIColumn headerTitle="Tax&Fee Amount" value="Paid">
                                <UINumber io="out" />
                            </UIColumn>

                        </UIDataTable>
                </UICard>
            </UICell>
        );
    };""

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
