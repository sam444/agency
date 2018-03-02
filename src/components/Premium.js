import {UIButton, UICell,UICard,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIDataTable,UIPercent,UINumber,UIColumn,UICurrency,UILink,UIParam} from "rainbowui-core";
import Component from "./Component";

export default class Commission extends Component {

    render() {
        return (
            <UICell type="row">
                <UICurrency value="550300" />
                <UIPercent value="20" />
                <UIButton value="Week" uppercase="false"/>
                <UIButton value="Month" uppercase="false"/>
                <UIButton value="Year" uppercase="false"/>
            </UICell>
        );
    };

    getDataValue(){
       return [
         {"Period":"Professional Liability","Company":"0.15","Paid":"415"},
         {"Period":"Professional Liability","Company":"0.15","Paid":"415"},
         {"Period":"Professional Liability","Company":"0.15","Paid":"415"},
         {"Period":"Professional Liability","Company":"0.15","Paid":"415"},
         {"Period":"Professional Liability","Company":"0.15","Paid":"415"}
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
