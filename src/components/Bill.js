import {UIButton, UICell,UICard,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIDataTable,UIPercent,UINumber,UIColumn,UICurrency,UILink,UIParam} from "rainbowui-core";
import Component from "./Component";
import {PolicyStore} from 'rainbow-foundation-sdk';

export default class Bill extends Component {
    constructor() {
        super();
        this.state ={
            policy:PolicyStore.getPolicy()
        };
    }
    render() {
        return (
            <UISmartPanelGrid column="4">
                <UISelect  label="发票类型" required="true" onChange={this.onSelectVATType.bind(this)} codeTable={this.getBillType} model={this.state.policy} property="VATType"/>
                <UIText  label="发票抬头" required="true"  model={this.state.policy} property="VATGeneralNo" colspan="3" visibled={this.checkVATType.bind(this)}/>
                <UIText  label="纳税人识别号" required="true"  model={this.state.policy} property="TaxerNo"  colspan="2" visibled={this.checkVATSPType.bind(this)}/>
                <UIText  label="客户单位名称" required="true"  model={this.state.policy} property="VATCustomerCompanyName" colspan="2"  visibled={this.checkVATSPType.bind(this)}/>
                <UIText  label="注册地址" required="true"  model={this.state.policy} property="RegistrationAddr" colspan="2"  visibled={this.checkVATSPType.bind(this)}/>
                <UIText  label="注册电话" required="true"  model={this.state.policy} property="RegistrationTel" colspan="2"  visibled={this.checkVATSPType.bind(this)}/>
                <UIText  label="开户行名称" required="true"  model={this.state.policy} property="VATBankName" colspan="2"  visibled={this.checkVATSPType.bind(this)}/>
                <UIText  label="开户行银行账号" required="true"  model={this.state.policy} property="VATBankAccount" colspan="2"  visibled={this.checkVATSPType.bind(this)}/>
            </UISmartPanelGrid>
        );
    }

    checkVATType(){
        return this.state.policy.VATType=="1"?"true":"false";
    }

    checkVATSPType(){
        return this.state.policy.VATType=="2"?"true":"false";
    }

    onSelectVATType(){
        this.setState({"policy":this.state.policy});
    }



}
