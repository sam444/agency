import Component from "../Component";
import {UICell,UIPage,UICardGroup,UICheckbox,UISwitch,UICard,UICurrency,UIMessageHelper,UIBox,UIButton,UIDataTable,UIColumn,UILink,Param,UISmartPanelGrid,UIText,UISelect,CodeTable,CodeTableSorter,UIDateTimePicker,UIBlank,UINumber} from "rainbowui-core";
import {PolicyStore,PolicyAction} from 'rainbow-foundation-sdk';
import {DateUtil} from 'rainbow-foundation-tools';
import {ComponentContext} from 'rainbow-foundation-cache';
import config from 'config';

export default class CoverageInfo extends Component {
    constructor() {
        super();
        this.state ={
            coverageList:this.getCoverageList(),
            policy:PolicyStore.getPolicy()

        };
    }

    getCoverageList(){
        const params = [
            {
                'objectName':'PolicyCoverage',
                'objectCode':'PUBLIC'
            },
            {
                'objectName':'PolicyCoverage',
                'objectCode':'TPLOSS001'
            },
            {
                'objectName':'PolicyCoverage',
                'objectCode':'PROPERTY'
            },
            {
                'objectName':'PolicyCoverage',
                'objectCode':'CASH'
            },
            {
                'objectName':'PolicyCoverage',
                'objectCode':'CUSTOMER'
            }


        ];
        return PolicyStore.getObjects(params);
    }

    render() {
        return (
            <UICardGroup column="1">
                {this.renderView()}
            </UICardGroup>
        );
    }


    renderView(){
        const self = this;
        const returnView = [
            <UICard width="12">
                <UISmartPanelGrid column="4">
                    <UIDateTimePicker id="fromDate"  label="生效日期" onChange={this.movePOI.bind(this)}   required="true" model={this.state.policy} property="EffectiveDate"/>
                    <UIDateTimePicker id="toDate"  label="失效日期"   required="true" model={this.state.policy} property="ExpiryDate" enabled="false"/>
                </UISmartPanelGrid>
            </UICard>
        ];

        if(this.isAgent()){
            returnView.push(
                <UICard width="12">
                    <UIDataTable id="classCode"  value={this.state.coverageList} pageable="false" indexable="false" >
                        <UIColumn render={(data)=>{
                            const hasEnabled =  (data['@type']=="PolicyCoverage-PUBLIC" || data['@type']=="PolicyCoverage-TPLOSS001" ) ? "false" : "true";
                            return (
                                <UICheckbox single="true" enabled={hasEnabled}    id={data['PolicyCoverageId']} model={data} property="Status" onChange={this.calculate.bind(this)} />
                            );
                        }}/>
                        <UIColumn headerTitle="保障项目" value="InsuredItem" width="auto">
                            <UIText  io="out"/>
                        </UIColumn>
                        <UIColumn headerTitle="保障限额" value="LimitAmountDescription">
                            <UIText io="out" />
                        </UIColumn>
                        <UIColumn headerTitle="保障保额"  render={(data)=>{
                            if(data['@type']!="PolicyCoverage-PROPERTY"){
                                return   (<UIText io="out" model={data} property="SumInsuredAmountDescription"/>);
                            }else{
                                return   (
                                    <UISelect  id={"sum"+data['BusinessObjectId']} codeTableId="935536"  model={data} property="SumInsuredAmount"  onChange={this.calculate.bind(this)}  />
                                );
                            }
                        }}/>
                        <UIColumn headerTitle="保障免赔" value="DeductibleDescription">
                            <UIText io="out" />
                        </UIColumn>

                        <UIColumn headerTitle="保障描述" value="Description">
                            <UIText io="out" />
                        </UIColumn>
                    </UIDataTable>
                </UICard>
            )

        }else{
            if(this.state.coverageList){
                this.state.coverageList.forEach((ct)=>{
                    const imgPath = ct['@type'].split("-")[1];
                    const img =  require("../../images/"+imgPath+".svg");
                    const hasEnabled =  (ct['@type']=="PolicyCoverage-PUBLIC" || ct['@type']=="PolicyCoverage-TPLOSS001" ) ? "false" : "true";
                    returnView.push(
                        <UICard title={ct.InsuredItem}  width="12">
                        <UICell type="row" >
                            <UICell width="2">
                                <UICell type="row" >
                                    <UICell width="12">
                                        <img  src={img} style={{paddingTop:'25px'}}/>
                                    </UICell>
                                </UICell>
                            </UICell>
                            <UICell width="8">
                                <UIText label="保障限额:" io="out" widthAllocation="3,9" value={ct.LimitAmountDescription} layout="horizontal"/>
                                {self.renderSuminsured(ct,self)}
                                <UIText label="保障免赔:" io="out" widthAllocation="3,9" value={ct.DeductibleDescription} layout="horizontal"/>
                                <UIText label="保障描述:" io="out" widthAllocation="3,9" value={ct.Description} layout="horizontal"/>
                            </UICell>
                            <UICell width="2" >
                                <UISwitch  enabled={hasEnabled} onText="要" offText="不要" model={ct} property="Status" onChange={self.calculate.bind(this)}/>
                            </UICell>
                        </UICell>
                      </UICard>
                    );
                });
            }
        }

        returnView.push(this.props.children);

        return returnView;
    }

    renderSuminsured(ct,self){
        if(ct['@type']!="PolicyCoverage-PROPERTY"){
            return   (
                <UIText label="保障保额:" io="out" widthAllocation="3,9" value={ct.SumInsuredAmountDescription} layout="horizontal"/>
            );
        }else{
            return   (
                <UISelect label="保障保额:" layout="horizontal" widthAllocation="3,9" id={"sum"+ct['BusinessObjectId']} codeTableId="935536"  model={ct} property="SumInsuredAmount"  onChange={self.calculate.bind(self)}  />
            );
        }
    }

    componentDidMount(){
        this.calculate();
    }


    movePOI(){
        const fromDate = this.state.policy["EffectiveDate"];
        const expiryDate = DateUtil.add(fromDate,1,'y');
        this.state.policy["ExpiryDate"] = expiryDate;
        this.setState({"policy":this.state.policy});
    }

    calculate(){
            AjaxUtil.show();
            const self = this;
            const url = this.getURL("POLICY_API","CALCULATE");
            AjaxUtil.call(url,this.state.policy,{"method":"POST"}).then((returnPolicy)=>{
                PolicyStore.setPolicy(returnPolicy);
                const coverageList = self.getCoverageList();
                this.state.policy=PolicyStore.getPolicy();
                self.setState({"coverageList":coverageList});
                ComponentContext.forceUpdate("premiumUpdatePanel");
                AjaxUtil.hide();
            });
    }
}
