import cyber from "../../images/cyber.png";
import {UICell,UIPage,UICardGroup,UICard,UITab,UITabItem,UIDataTable,UIBlank,UIEmail,UISplitButton,UIButtonItem,Param,UILink,UICurrency,UIColumn,UISmartPanelGrid,UIButton,UIBox,UIText,UISelect,UIDateTimePicker,CodeTable,CodeTableSorter} from "rainbowui-core";
export default class Index extends React.Component {
    render() {
        return (
            <UIPage>
                    <div className="main">
                        <UICell type="row" >
                            <UICell width="2">
                              <UICard title="Cyber"  width="12">
                                    <img src={cyber} />
                                </UICard>
                            </UICell>
                            <UICell width="6">
                                <UICell type="row">
                                    <UICell width="4">
                                        <UIText label="Customer" io="out" value="ABC CORP"/>
                                    </UICell>
                                    <UICell width="4">
                                        <UIText label="Policy Status" io="out" value="Quoting"/>
                                    </UICell>
                                    <UICell width="4">
                                        <UICurrency label="Premium" io="out" value="10000"/>
                                    </UICell>
                                </UICell>
                                <UICell type="row">
                                    <UICell width="4">
                                        <UICurrency label="Commission" io="out"  value="1000"/>
                                    </UICell>
                                    <UICell width="4">
                                        <UIText label="Policy Eff Date" io="out"   value="2017/01/01"/>
                                    </UICell>
                                    <UICell width="4">
                                        <UIText label="Policy Exp Date" io="out"  value="2018/01/01"/>
                                    </UICell>
                                </UICell>
                            </UICell>
                            <UICell width="4">
                                <UIBox >
                                    <UIButton value="Endorsement"></UIButton>
                                    <UIButton value="Renewal"></UIButton>
                                    <UIButton value="Claim"></UIButton>
                                </UIBox>
                            </UICell>
                        </UICell>
                        <UICell type="row">
                            <UICell width="12">
                                <UITab id="produtDetail">
                                   <UITabItem title="Activities">

                                   </UITabItem>
                                   <UITabItem title="Policy Detail">

                                   </UITabItem>
                                   <UITabItem title="Billing">

                                   </UITabItem>
                                   <UITabItem title="Claim">

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
