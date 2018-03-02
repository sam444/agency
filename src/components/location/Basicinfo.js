import Component from "../Component";
import {UICell,UIPage,UICardGroup,UICheckbox,UICard,UICurrency,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";
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
                    <UISmartPanelGrid column="4">
                        <UISelect  id="PartyType" label="客户类别" codeTable={this.getType} required="true" model={this.state.policy} property="ClientName" onChange={this.selectCertificateType.bind(this)}/>
                        <UIText id="PartyName" label={this.getName.bind(this)}  required="true" model={this.props.customer} property="PartyName"/>
                        <UISelect id="customerBookType" label="证件类型" codeTable={this.getBookType(this.state.policy)} required="true" model={this.props.customer} property="BookType"/>
                        <UIText id="customerBookNumber" label="证件号码"  required="true" model={this.props.customer} property="BookCode"/>
                        <UIText id="customerAddress" label={this.getAddress.bind(this)}  colspan="4" model={this.props.customer} property="Address"/>
                    </UISmartPanelGrid>
                </UICard >
                {this.props.children}
            </UICardGroup>
        );
    }

    getName(){
        if(this.state.policy['ClientName']=='person'||!this.state.policy['ClientName']){
            return "姓名";
        }
        if(this.state.policy['ClientName']=='company'){
            return "公司名称";
        }
    }

    getAddress(){
        if(this.state.policy['ClientName']=='person'||!this.state.policy['ClientName']){
            return "居住地址";
        }
        if(this.state.policy['ClientName']=='company'){
            return "公司地址";
        }
    }

    selectCertificateType(){
        if(this.state.policy['ClientName']=='person'){
            const deleteParam = {
                'objectName':'PartyOrgCustomer',
                'objectCode':'PartyOrgCustomer'
            };
            PolicyStore.deleteObject(deleteParam);
            this.props.customer['PartyName']=null;
            this.props.customer['BookType']=null;
            this.props.customer['BookCode']=null;
            this.props.customer['Address']=null;
            this.setState({"policy":this.state.policy});
        }
        if(this.state.policy['ClientName']=='company'){
            const deleteParam = {
                'objectName':'PartyIndividualCustomer',
                'objectCode':'PartyIndividualCustomer'
            };
            PolicyStore.deleteObject(deleteParam);
            this.props.customer['PartyName']=null;
            this.props.customer['BookType']=null;
            this.props.customer['BookCode']=null;
            this.props.customer['Address']=null;
            this.setState({"policy":this.state.policy});
        }
    }





}
