import {UICell,UIPage,UICardGroup,UICard,UITab,UIFileDownload,UITabItem,UIDataTable,UILink,Param,UISplitButton,UIButtonItem,UICurrency,UIColumn,UISmartPanelGrid,UIButton,UIBox,UIText,UISelect,UIDateTimePicker,CodeTable,CodeTableSorter} from "rainbowui-core";
import Component from "../../components/Component";
import {PolicyStore,PolicyAction} from 'rainbow-foundation-sdk';

export default class Index extends Component {
    constructor() {
        super();
        this.query =  {
            "Module":"Policy",
            "PageNo":1,
            "PageSize":50,
            "SortField":"index_time",
            "SortType":"desc",
            "Conditions":{
                "NewbizStatus":null,
                "QuotationNo":null,
                "City":null,
                "IdNo":null,
            },
            "FuzzyConditions":{
                "PCName":null,
                "LocationName":null,
            }
        };
        this.state = {
            "policyList":[]
        };
    }
    render() {
      const self = this;
        return (
            <UIPage>
                    <div className="main">
                        <UICardGroup>
                            <UICard title="查询保单条件"  width="12">
                                <UISmartPanelGrid column="4">
                                     <UIText label="保单号码" model={this.query.Conditions} property="QuotationNo"/>
                                     <UIText label="客户姓名／公司名称" model={this.query.FuzzyConditions} property="PCName"/>
                                     <UIText label="证件号码" model={this.query.Conditions} property="IdNo"/>
                                     <UISelect id="PolicyStatus" label="保单状态" codeTable={this.getStatus} model={this.query.Conditions} property="NewbizStatus"/>
                                     <UIText label="场所名称" model={this.query.FuzzyConditions} property="LocationName"/>
                                     <UISelect label="场所地址" codeTable={this.getlocationType} model={this.query.Conditions} property="City"/>
                                </UISmartPanelGrid>
                                <UIBox>
                                      <UIButton value="搜索" styleClass="primary" onClick={this.search.bind(this)}/>
                                      <UIButton value="重置" onClick={this.reset.bind(this)}/>
                                </UIBox>
                            </UICard>
                            <UICard title="查询保单结果"  width="12">
                                <UIDataTable id="searchPolicyList"   value={this.state.policyList} pageable="true" indexable="false">
                                    <UIColumn headerTitle="保单号码" value="customerName" width="auto" render={(data)=>{
                                        return <UILink  value={data.QuotationNo} onClick={self.next.bind(this)}>
                                            <Param name="policy" value={data}/>
                                        </UILink>
                                    }}/>
                                    <UIColumn headerTitle="生效日期" value="EffectiveDate">
                                        <UIDateTimePicker io="out" />
                                    </UIColumn>
                                    <UIColumn headerTitle="失效日期" value="ExpiryDate">
                                        <UIDateTimePicker io="out" />
                                    </UIColumn>
                                    <UIColumn headerTitle="客户姓名" value="PCName">
                                        <UIText io="out" />
                                    </UIColumn>

                                    <UIColumn headerTitle="证件号码" value="IdNo">
                                        <UIText io="out" />
                                    </UIColumn>
                                    <UIColumn headerTitle="场所名称" value="LocationName">
                                        <UIText io="out" />
                                    </UIColumn>
                                    <UIColumn headerTitle="场所地址"  render={(data)=>{
                                        return   (
                                            <UISelect io="out"  id={"address"+data.PolicyId} codeTable={self.getlocationType}  model={data} property="City"  />
                                        );
                                    }}/>
                                    <UIColumn headerTitle="保单状态" render={(data)=>{
                                        return   (
                                            <UISelect io="out"  id={"status"+data.PolicyId} codeTable={self.getStatus}  model={data} property="NewbizStatus"  />
                                        );
                                    }}/>
                                    <UIColumn headerTitle="保费" value="PremiumDue">
                                        <UICurrency io="out" />
                                    </UIColumn>
                                    <UIColumn headerTitle="操作" width="10%"  render = {
                                        function (data) {
                                            return (
                                                <div>
                                                    <UILink  value="继续" onClick={self.next.bind(this)}>
                                                        <Param name="policy" value={data}/>
                                                    </UILink>
                                                    {
                                                        data.NewbizStatus == 120 ? <UIFileDownload value="数据下载" styleClass="default" url={self.getURL('POLICY_API','DOWNLOAD_POLICY')+data.PolicyId}/> :null
                                                    }
                                                </div>
                                            );
                                        }.bind(this)
                                    }/>
                                </UIDataTable>
                            </UICard>
                        </UICardGroup>​
                    </div>
            </UIPage>
        );
    }



    reset(){
        this.query = {
            "Module":"Policy",
            "PageNo":1,
            "PageSize":50,
            "SortField":"index_time",
            "SortType":"desc",
            "Conditions":{
                "NewbizStatus":null,
                "QuotationNo":null,
                "City":null,
                "IdNo":null,
            },
            "FuzzyConditions":{
                "PCName":null,
                "LocationName":null,
            }
        };
        this.setState({"policyList":[]});
    }

    search(){
        const self = this;
        const url = this.getURL("POLICY_API","QUERY_POLICY");
        if(this.query["Conditions"]["NewbizStatus"]){
            this.query["Conditions"]["NewbizStatus"] = Number(this.query["Conditions"]["NewbizStatus"]);
        }
        AjaxUtil.call(url,this.query,{"method":"POST","block":false}).then((policyList)=>{
            if(policyList["Results"]){
                self.setState({"policyList":policyList["Results"][0]["SolrDocs"]});
            }else{
                self.setState({"policyList":[]});
            }
        })
    }

    next(event){
        AjaxUtil.show();
        const policy = event.getParameter("policy");
        const pagePath = super.getPageRouter(Number(policy["Notes"]));
        const url = this.getURL("POLICY_API","LOAD_POLICY");
        PolicyAction.loadPolicy(`${url}${policy['PolicyId']}`).then((policy) => {
            super.gotoPath(pagePath);
        });
    }

}
