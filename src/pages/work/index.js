import {UICell,UIPage,UICardGroup,UICard,UITab,UITabItem,UIDataTable,UILink,UICurrency,UIColumn,UISmartPanelGrid,UIButton,UIBox,UIText,UISelect,UIDateTimePicker,CodeTable,CodeTableSorter} from "rainbowui-core";
export default class Index extends React.Component {
    render() {
        return (
            <UIPage>
                    <div className="main">
                        <UICardGroup>
                            <UICard title="Search Policy Condition"  width="12">
                                <UISmartPanelGrid column="4">
                                     <UISelect label="Priority" codeTable={this.getState}/>
                                     <UIText label="Customer" required="true"/>
                                     <UISelect label="Status" codeTable={this.getState}/>
                                     <UIDateTimePicker label="POI" defaultValue="2015-01-14T00:00:00" />
                                     <UISelect label="Product" codeTable={this.getState}/>
                                </UISmartPanelGrid>
                                <UIBox>
                                      <UIButton value="Search" />
                                      <UIButton value="Reset"/>
                                </UIBox>
                            </UICard>
                            <UICard title="Search Policy Result"  width="12">
                              <UITab id="searchPolicytab01">
                                 <UITabItem title="All">
                                       <UIDataTable id="workList"  value={this.getDataValue()} pageable="true" indexable="false">
                                         <UIColumn headerTitle="Policy Number" value="Period" width="auto">
                                             <UILink  />
                                         </UIColumn>
                                         <UIColumn headerTitle="Priority" value="Company">
                                             <UIText io="out" />
                                         </UIColumn>
                                         <UIColumn headerTitle="Customer" value="Paid">
                                             <UIText io="out" />
                                         </UIColumn>
                                         <UIColumn headerTitle="Status" value="lossos">
                                             <UIText io="out" />
                                         </UIColumn>
                                         <UIColumn headerTitle="Effective Date" value="expenseos">
                                             <UIText io="out" />
                                         </UIColumn>
                                         <UIColumn headerTitle="Product" value="Insured">
                                             <UIText io="out" />
                                         </UIColumn>
                                         <UIColumn headerTitle="Primary State" value="State">
                                             <UIText io="out" />
                                         </UIColumn>
                                         <UIColumn headerTitle="Premium" value="Premium">
                                             <UICurrency io="out" />
                                         </UIColumn>
                                     </UIDataTable>
                                 </UITabItem>
                                 <UITabItem title="Quoting">

                                 </UITabItem>
                                 <UITabItem title="Proposal Sent">

                                 </UITabItem>
                                 <UITabItem title="Bind">

                                 </UITabItem>
                                 <UITabItem title="Issue">

                                 </UITabItem>
                              </UITab>
                            </UICard>
                        </UICardGroup>​
                    </div>
            </UIPage>
        );
    }
    getState(){
       return new CodeTable([
            {id: 1, text: "TX"},
            {id: 2, text: "NY"},
        ], null, new CodeTableSorter());
    }
    getDataValue(){
       return [
         {"Period":"100 AR 0011388-00","Company":"High","Paid":"abc","lossos":"Quoting","expenseos":"2017/01/01","Insured":"CA","Premium":"1000","State":"TX"},
         {"Period":"100 AR 0011388-00","Company":"High","Paid":"abc","lossos":"Quoting","expenseos":"2017/01/01","Insured":"CA","Premium":"1000","State":"TX"},
         {"Period":"100 AR 0011388-00","Company":"High","Paid":"abc","lossos":"Quoting","expenseos":"2017/01/01","Insured":"CA","Premium":"1000","State":"TX"},
         {"Period":"100 AR 0011388-00","Company":"High","Paid":"abc","lossos":"Quoting","expenseos":"2017/01/01","Insured":"CA","Premium":"1000","State":"TX"}

       ];
    }
}
