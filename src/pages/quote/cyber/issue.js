import PolicyStep from "../../../components/cyber/PolicyStep";
import RiskInfo from "../../../components/cyber/RiskInfo";
import CoverageTable from "../../../components/cyber/CoverageTable";
import FormInfo from "../../../components/cyber/FormInfo";
import logo_4 from "../../../images/logo_4.png";

import PolicySideSummary from "../../../components/PolicySideSummary";
import Component from "../../../components/Component";
import {UICell,UIPage,UICardGroup,UICheckbox,UICard,UICurrency,UIEmail,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";

export default class Index extends Component {
    render() {
        return (
            <UIPage>
                    <div className="main">
                        <div className="row policyInfo">
                            <PolicyStep step="8"></PolicyStep>
                        </div>
                        <UICell type="row">
                            <UICell width="10" className="quoteInfo" id="quoteInfo">
                                <UICardGroup>
                                    <UICard title="Risk Information" width="12">
                                        <RiskInfo>
                                            <div></div>
                                        </RiskInfo>
                                    </UICard>
                                    <UICard title="Coverage Information" width="12">
                                        <CoverageTable></CoverageTable>
                                    </UICard>
                                    <UICard title="Form Information" width="12">
                                        <FormInfo></FormInfo>
                                    </UICard>
                                    <UICard title="Customer Information" width="12">
                                        <UICell type="row" >
                                            <UICell width="3">
                                                <UICell type="row" >
                                                    <UICell width="12">
                                                        <img src={logo_4} />
                                                    </UICell>
                                                </UICell>
                                                <UICell type="row" >
                                                    <UICell width="12">
                                                        <UIBox direction="center">
                                                            <UILink value="Detail" onClick={this.goto}>
                                                                <Param name="path" value="customer/detail" />
                                                            </UILink>
                                                        </UIBox>
                                                    </UICell>
                                                </UICell>
                                            </UICell>
                                            <UICell width="9">
                                                <UIText label="Natural" io="out" widthAllocation="5,7" value="Consulting" layout="horizontal"/>
                                                <UIText label="Address" io="out" widthAllocation="5,7" value="No.100 Grow Street Padstow,Tx 78205" layout="horizontal"/>
                                                <UIText label="Phone" io="out" widthAllocation="5,7" value="17025202230" layout="horizontal"/>
                                                <UIEmail label="E-mail" io="out" widthAllocation="5,7" value="Support@abc.com" layout="horizontal"/>

                                            </UICell>
                                        </UICell>
                                    </UICard>
                                    <UICard width="12">
                                        <UICell type="row">
                                            <UICell width="4">
                                                <UIBox direction="left">
                                                    <UIButton value="Home" onClick={this.goto}>
                                                        <Param name="path" value="home" />
                                                    </UIButton>
                                                    <UIButton value="Back" onClick={this.goto}>
                                                        <Param name="path" value="quote/cyber/bind" />
                                                    </UIButton>
                                                </UIBox>
                                            </UICell>
                                            <UICell width="8">
                                                <UIBox>
                                                    <UIButton value="Close" >
                                                        <Param name="path" value="product/list" />
                                                    </UIButton>
                                                    <UIButton value="Issue" onClick={this.goto}>
                                                        <Param name="path" value="quote/cyber/" />
                                                    </UIButton>
                                                </UIBox>
                                            </UICell>
                                        </UICell>
                                    </UICard>
                                </UICardGroup>
                            </UICell>
                            <UICell width="2" className="summary">
                                <PolicySideSummary></PolicySideSummary>
                            </UICell>
                        </UICell>



                    </div>
            </UIPage>
        );
    }


}
