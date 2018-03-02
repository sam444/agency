import Component from "./Component";
import logo_1 from "../images/logo_1.png";
import logo_2 from "../images/logo_2.png";
import logo_3 from "../images/logo_3.png";
import logo_4 from "../images/logo_4.png";

import {UICell,UIPage,UIEmail,UICardGroup,UICheckbox,UICard,UICurrency,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";

export default class Customer extends Component {
    render() {
        return (
            <UICardGroup>
                <UICard   width="12">
                    <UISmartPanelGrid column="4">
                        <UIText label="Name" />
                        <UIText label="Zip Code" />
                        <UISelect  label="State" codeTable={this.getState}/>
                        <UISelect   label="City" codeTable={this.getState}/>
                        <UIText label="Address" colspan="2"/>
                        <UISelect   label="Business" codeTable={this.getState}/>
                    </UISmartPanelGrid>
                    <UIBox>
                        <UIButton value="Search" />
                        <UIButton value="Reset"/>
                    </UIBox>
                </UICard>
                <UICard  width="12">
                    <UICardGroup>
                        <UICard title="ABC CORP"  width="6">
                            <UICell type="row" >
                                <UICell width="3">
                                    <UICell type="row" >
                                        <UICell width="12">
                                            <img src={logo_1} />
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
                        <UICard title="ABC CORP"  width="6">
                            <UICell type="row" >
                                <UICell width="3">
                                    <UICell type="row" >
                                        <UICell width="12">
                                            <img src={logo_2} />
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
                        <UICard title="ABC CORP"  width="6">
                            <UICell type="row" >
                                <UICell width="3">
                                    <UICell type="row" >
                                        <UICell width="12">
                                            <img src={logo_3} />
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
                        <UICard title="ABC CORP"  width="6">
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
                    </UICardGroup>​
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
