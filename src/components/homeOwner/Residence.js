import Component from "../Component";
import {UICell,UIPage,UICardGroup,UICheckbox,UICard,UICurrency,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";

export default class RiskInfo extends Component {
    render(){
        return(
            <UICardGroup>
                <UICard width="12">
                    <UISmartPanelGrid column="4">
                        <UISelect label="Program" codeTable={this.getState} />
                        <UISelect label="State" codeTable={this.getState} />
                        <UINumber value="2010" label="Year Built"  />
                        <UIBlank/>
                        <UISelect label="Construction" codeTable={this.getState} />
                        <UISelect label="Dwelling Type" codeTable={this.getState} />
                        <UISelect label="Foundation Type" codeTable={this.getState} />
                        <UIBlank/>
                        <UISelect label="Occupant" codeTable={this.getState} />
                        <UISelect label="Occupant Type" codeTable={this.getState} />
                        <UISelect label="Protective Devices" codeTable={this.getState} />
                        <UISelect label="MSRB Class" codeTable={this.getState} />
                        <UISelect label="Roof" codeTable={this.getState} />
                        <UISelect label="Roof Type" codeTable={this.getState} />
                        <UISelect label="Roof Shape" codeTable={this.getState} />
                        <UINumber label="Roof Replacement Year"  />
                        <UISelect label="Electricity Type" codeTable={this.getState} />
                        <UISelect label="Primary Heat Type" codeTable={this.getState} />
                    </UISmartPanelGrid>
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
}