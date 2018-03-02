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
                                        <UIText label="Product Code" io="out" value="CYBER"/>
                                    </UICell>
                                    <UICell width="4">
                                        <UIText label="Product Name" io="out" value="cyber"/>
                                    </UICell>
                                    <UICell width="4">
                                        <UIText label="Product Type" io="out" value="Commercial"/>
                                    </UICell>
                                </UICell>
                                <UICell type="row">
                                    <UICell width="4">
                                        <UIText label="Product Eff Date" io="out"  value="2017/01/01"/>
                                    </UICell>
                                    <UICell width="4">
                                        <UIText label="Product Exp Date" io="out"  value="2017/01/01"/>
                                    </UICell>
                                    <UICell width="4">
                                        <UIText label="Product Status" io="out"  value="Active"/>
                                    </UICell>
                                </UICell>
                            </UICell>
                            <UICell width="4">
                                <UIBox >
                                    <UIButton value="Quote"></UIButton>
                                </UIBox>
                            </UICell>
                        </UICell>
                        <UICell type="row">
                            <UICell width="12">
                                <UITab id="produtDetail">
                                   <UITabItem title="Overview">
                                         
                                   </UITabItem>
                                   <UITabItem title="Benefit">

                                   </UITabItem>
                                   <UITabItem title="Underwriting Guideline">

                                   </UITabItem>
                                   <UITabItem title="Document">

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
