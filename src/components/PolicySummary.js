import {UICell,UIText,UICurrency} from "rainbowui-core";
import Component from "./Component";

export default class PolicySummary extends Component {

    render() {
        return (
            <UICell type="row" >
                <UICell width="2">
                    <UIText label="Customer" io="out" value="ABC CORP" layout="horizontal"/>
                </UICell>
                <UICell width="2">
                    <UIText label="Product" io="out" value="Cyber" layout="horizontal"/>
                </UICell>
                <UICell width="2">
                    <UIText label="POI" io="out" value="2017/01/01" layout="horizontal"/>
                </UICell>
                <UICell width="3">
                    <UICurrency id="summaryCommission" label="Commission" io="out" value="100"  layout="horizontal" />
                </UICell>
                <UICell width="3">
                    <UICurrency id="summaryPremium" label="Premium" io="out" value="1000"  layout="horizontal" />
                </UICell>
            </UICell>
        );
    }


}
