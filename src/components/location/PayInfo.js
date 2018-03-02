import Component from "../Component";
import {UICell,UIPage,UICardGroup,UICheckbox,UIRadio,UICard,UICurrency,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";
import alipay from "../../images/alipay.jpg";
import wechat from "../../images/wechat.jpg";
import {PolicyStore} from 'rainbow-foundation-sdk';

export default class RiskInfo extends Component {
    constructor() {
        super();
        this.state ={
            policy:PolicyStore.getPolicy()
        };
    }
    render() {
        return (
            <UICardGroup>
                <UICard width="12">
                    <UISmartPanelGrid column="1">
                        <UIRadio  required="true" requiredMessage="请选择支付类型" codeTable={this.getImageRadio} model={this.state.policy} property="CAPType"/>
                    </UISmartPanelGrid>
                </UICard >
               

                {this.props.children}

            </UICardGroup>
        );
    }

    getImageRadio() {
        return new CodeTable([
            {id: "1", text: <img src={alipay}/>},
            {id: "2", text: <img src={wechat}/>},
        ], null, new CodeTableSorter());
    }
    
}
