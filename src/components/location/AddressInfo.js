import Component from "../Component";
import {UICell,UIPage,UICardGroup,UICheckbox,UICard,UICurrency,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";
import {PolicyStore,PolicyAction} from 'rainbow-foundation-sdk';

export default class RiskInfo extends Component {
    constructor() {
        super();
        const param = {
            'objectName':'PolicyRisk',
            'objectCode':'LOC'
        };
        this.state ={
            policyRisk:PolicyStore.getObject(param)
        };
    }
    render() {
        return (
            <UICardGroup>
                 <UICard width="12">
                    <UISmartPanelGrid column="3">
                        <UIText id="addressName" label="场所名称"  required="true" model={this.state.policyRisk} property="LocationName"/>
                        <UIText id="addressNote" label="场所备注" model={this.state.policyRisk} property="Remarks"/>
                        <UISelect id="locationAddress" label="场所地址" codeTable={this.getlocationType} required="true" model={this.state.policyRisk} property="City"/>
                        <UIText id="address" label="详细地址"  required="true" colspan="2" model={this.state.policyRisk} property="Address"/>
                        <UINumber id="addressAcreage" maxValue="500" maxValueMessage="场所面积不能大于500平米" minValue="1" label="场所面积" model={this.state.policyRisk} property="RiskLevel" suffixText="㎡"/>

                    </UISmartPanelGrid>
                </UICard >
               

                {this.props.children}

            </UICardGroup>
        );
    }


    
}
