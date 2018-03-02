import Component from "../../components/Component";
import prod01 from "../../images/prod01.svg";
import prod02 from "../../images/prod02.svg";
import prod03 from "../../images/prod03.svg";
import mrmf from "../../images/mrmf.png";
import {UICell,UIPage,UICardGroup,UIMessageHelper,UICard,UITab,UITabItem,UIDataTable,UIEmail,UILink,Param,UICurrency,UIColumn,UISmartPanelGrid,UIButton,UIBox,UIText,UISelect,UIDateTimePicker,CodeTable,CodeTableSorter} from "rainbowui-core";
export default class Index extends Component {
    render() {
        return (
            <UIPage>
                    <div className="main">
                        <UICardGroup>
                            <UICard title="美容场所险"  width="12">
                                <UICell type="row" >
                                    <UICell width="3">
                                        <UICell type="row" >
                                            <UICell width="12">
                                                <img src={prod01} />
                                            </UICell>
                                        </UICell>
                                    </UICell>
                                    <UICell width="5">
                                        <UIText label="产品名称" io="out" widthAllocation="5,7" value="美容场所险" layout="horizontal"/>
                                        <UIText label="产品有效期" io="out" widthAllocation="5,7" value="2019－12-31" layout="horizontal"/>
                                        <UIText label="产品代码" io="out" widthAllocation="5,7" value="QCOSPL" layout="horizontal"/>
                                        <UIEmail label="产品描述" io="out" widthAllocation="5,7" value="" layout="horizontal"/>
                                    </UICell>
                                    <UICell width="2" style={{marginTop:'25px'}}>
                                        <UIButton value="询价" onClick={this.quote.bind(this)} styleClass="primary">
                                            <Param name="path" value="quote/location/rate" />
                                            <Param name="code" value="COSPL_TY" />
                                            <Param name="version" value="1.0" />
                                        </UIButton>
                                    </UICell>
                                    <UICell width="2">
                                        <img src={mrmf} width="60%"/>
                                    </UICell>
                                </UICell>

                            </UICard>
                            <UICard title="餐饮饭店保险"  width="12">
                                <UICell type="row" >
                                    <UICell width="3">
                                        <UICell type="row" >
                                            <UICell width="12">
                                                <img src={prod02} />
                                            </UICell>
                                        </UICell>
                                    </UICell>
                                    <UICell width="5">
                                        <UIText label="产品名称" io="out" widthAllocation="5,7" value="餐饮饭店保险" layout="horizontal"/>
                                        <UIText label="产品有效期" io="out" widthAllocation="5,7" value="2019－12-31" layout="horizontal"/>
                                        <UIText label="产品代码" io="out" widthAllocation="5,7" value="QCOSPL" layout="horizontal"/>
                                        <UIEmail label="产品描述" io="out" widthAllocation="5,7" value="" layout="horizontal"/>
                                    </UICell>
                                    <UICell width="2" style={{marginTop:'25px'}}>
                                        <UIButton value="询价" onClick={this.info.bind(this)} styleClass="primary">
                                            <Param name="name" value="餐饮饭店保险" />
                                        </UIButton>
                                    </UICell>
                                    <UICell width="2">
                                        <img src={mrmf} width="60%"/>
                                    </UICell>
                                </UICell>

                            </UICard>
                            <UICard title="创业公司保险"  width="12">
                                <UICell type="row" >
                                    <UICell width="3">
                                        <UICell type="row" >
                                            <UICell width="12">
                                                <img src={prod03} />
                                            </UICell>
                                        </UICell>
                                    </UICell>
                                    <UICell width="5">
                                        <UIText label="产品名称" io="out" widthAllocation="5,7" value="创业公司保险" layout="horizontal"/>
                                        <UIText label="产品有效期" io="out" widthAllocation="5,7" value="2019－12-31" layout="horizontal"/>
                                        <UIText label="产品代码" io="out" widthAllocation="5,7" value="QCOSPL" layout="horizontal"/>
                                        <UIEmail label="产品描述" io="out" widthAllocation="5,7" value="" layout="horizontal"/>
                                    </UICell>
                                    <UICell width="2" style={{marginTop:'25px'}}>
                                        <UIButton value="询价" onClick={this.info.bind(this)} styleClass="primary">
                                            <Param name="name" value="创业公司保险" />
                                        </UIButton>
                                    </UICell>
                                    <UICell width="2">
                                        <img src={mrmf} width="60%"/>
                                    </UICell>
                                </UICell>

                            </UICard>
                        </UICardGroup>​
                    </div>
            </UIPage>
        );
    }

    info(event){
        const name = event.getParameter("name");
        UIMessageHelper.info(`${name}产品正在开发.`,null, null);
    }


}
