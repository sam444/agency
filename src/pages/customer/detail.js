import cyber from "../../images/cyber.png";
import {UICell,UIPage,UICardGroup,UICard,UITab,UITabItem,UIDataTable,UIBlank,UIEmail,UISplitButton,UIButtonItem,Param,UILink,UICurrency,UIColumn,UISmartPanelGrid,UIButton,UIBox,UIText,UISelect,UIDateTimePicker,CodeTable,CodeTableSorter} from "rainbowui-core";
export default class Index extends React.Component {
    render() {
        return (
            <UIPage>
                    <div className="main">
                        <UICell type="row" >
                            <UICell width="2">
                              <UICard title="ABC CORP"  width="12">
                                    <img src={cyber} />
                                </UICard>
                            </UICell>
                            <UICell width="6">
                                <UICell type="row">
                                    <UICell width="4">
                                        <UIText label="Business Natural" io="out" value="Consulting"/>
                                    </UICell>
                                    <UICell width="4">
                                        <UIText label="Phone" io="out" value="17035202230"/>
                                    </UICell>
                                    <UICell width="4">
                                        <UIText label="Primary Address" io="out" value="No.100 Grow Street Padstow,Tx 78205"/>
                                    </UICell>
                                </UICell>
                                <UICell type="row">
                                    <UICell width="4">
                                        <UIEmail label="E-mail" io="out" widthAllocation="5,7" value="Support@abc.com"/>
                                    </UICell>
                                    <UICell width="4">
                                    </UICell>
                                    <UICell width="4">
                                    </UICell>
                                </UICell>
                            </UICell>
                            <UICell width="4">
                                <UIBox >
                                    <UIButton value="Quote"></UIButton>
                                    <UIButton value="Save"></UIButton>
                                    <UIButton value="Delete"></UIButton>
                                </UIBox>
                            </UICell>
                        </UICell>
                        <UICell type="row">
                            <UICell width="12">
                                <UITab id="customerDetail">
                                   <UITabItem title="Activities">
                                         
                                   </UITabItem>
                                   <UITabItem title="Basic information">
                                       <UICardGroup>
                                           <UICard title="General information"  width="12">
                                               <UISmartPanelGrid column="4">
                                                    <UIText label="Name"/>
                                                    <UIText label="Phone"/>
                                                    <UIText label="Web Address"/>
                                                    <UIText label="Insured DBA"/>
                                                    <UIText label="Address Line 1" colspan="2"/>
                                                    <UIText label="Address Line 2" colspan="2"/>
                                                    <UIText label="Zip Code"/>
                                                    <UISelect label="Primary State" codeTable={this.getState}/>
                                                    <UISelect label="City" codeTable={this.getState}/>
                                               </UISmartPanelGrid>
                                           </UICard>
                                           <UICard title="Additional information"  width="12">

                                           </UICard>
                                      </UICardGroup>
                                   </UITabItem>
                                   <UITabItem title="Policy">
                                       <UIDataTable id="policyList"  value={this.getDataValue()} pageable="true" indexable="false">
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
                                           <UIColumn headerTitle="Action" width="10%"  render = {
                                                          function (data) {
                                                              return (
                                                                  <div>
                                                                      <UISplitButton styleClass="default">
                                                                          <UIButtonItem  value="Endorsement" onClick={this.onClickQuote}/>
                                                                          <UIButtonItem isDropDown="true">
                                                                              <UIButtonItem value='Renewal' onClick={() => {alert('1')}}/>
                                                                              <UIButtonItem value='Close' onClick={() => {alert('2')}}/>
                                                                              <UIButtonItem value='Reopen' onClick={() => {alert('3')}}/>
                                                                              <UIButtonItem value='bind' onClick={() => {alert('4')}}/>
                                                                          </UIButtonItem>
                                                                      </UISplitButton>
                                                                  </div>
                                                              );
                                                          }.bind(this)
                                        }/>
                                     </UIDataTable>
                                   </UITabItem>
                                   <UITabItem title="Biling">

                                   </UITabItem>
                                   <UITabItem title="Claim">

                                   </UITabItem>
                                   <UITabItem title="Communication">

                                   </UITabItem>
                                </UITab>
                            </UICell>
                        </UICell>
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
