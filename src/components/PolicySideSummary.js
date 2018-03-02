import {UICell,UIText,UICard,UISmartPanelGrid,UICurrency,UIUpdatePanel,UIFileDownload} from "rainbowui-core";
import Component from "./Component";
import {UIAccordion,UISection} from "rainbowui-accordion";
import {PolicyStore} from 'rainbow-foundation-sdk';

export default class PolicySideSummary extends Component {

    constructor() {
        super();
        this.policy = PolicyStore.getPolicy();
    }

    render() {
        const configJson = JSON.parse(sessionStorage.getItem("project_config"));
        const file_service = configJson["FILE_SERVICE"];
        return (
            <UIAccordion id="summary">
                <UISection accordionTitle="询价号:" active="true">
                    <UIText id="summeryPolicyNo"  widthAllocation="1,11" layout="horizontal"  io="out" model={this.policy} property="QuotationNo"/>
                </UISection>
                <UISection accordionTitle="总保费:" active="true">
                    <UIUpdatePanel id="premiumUpdatePanel" render={this.renderSummary.bind(this)}/>
                </UISection>
                <UISection accordionTitle="在线文档:" active="true">
                    <UICell type="row">
                        <a href={file_service+'ccyqx.pdf'} target="_blank">1. 财产一切险条款</a>
                    </UICell>
                    <UICell type="row">
                        <a href={file_service+'cczhx.pdf'} target="_blank">2. 财产综合险条款</a>
                    </UICell>
                    <UICell type="row">
                        <a href={file_service+'gzzrx.pdf'} target="_blank">3. 公众责任险条款</a>
                    </UICell>
                    <UICell type="row">
                        <a href={file_service+'jqsbzhx.pdf'} target="_blank">4. 机器设备综合险条款</a>
                    </UICell>
                    <UICell type="row">
                        <a href={file_service+'xjyyjzqx.pdf'} target="_blank">5. 现金与有价证券险条款</a>
                    </UICell>
                    <UICell type="row">
                        <a href={file_service+'zyzrx.pdf'} target="_blank">6. 公司职业责任险</a>
                    </UICell>
                </UISection>
            </UIAccordion>
        );
    }

    renderSummary(){
        this.policy = PolicyStore.getPolicy();
        return (
            <UISmartPanelGrid column="1">
                <UICurrency id="premium"  io="out" model={this.policy} property="PremiumDue"/>
            </UISmartPanelGrid>
         );
    }


    



}
