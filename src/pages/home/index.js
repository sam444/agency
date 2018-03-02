import BarCharts from "../../components/BarCharts";
import WorkList from "../../components/WorkList";
import Activities from "../../components/Activities";
import PopularProducts from "../../components/PopularProducts";
import LineCharts from "../../components/LineCharts";
import {UICardGroup,UICard,UIPage} from "rainbowui-core";
export default class Index extends React.Component {


    render() {
        return (
            <UIPage>
                    <div className="main">
                        <UICardGroup gap="15">
                            <UICard title="保单状态"  width="3">
                                <WorkList/>
                            </UICard>
                            <UICard title="产品"  width="6">
                                <PopularProducts/>
                            </UICard>
                            <UICard title="最近保单"  width="3">
                                <Activities/>
                            </UICard>

                            <UICard title="最近6个月的保单"  width="6">
                                <BarCharts/>
                            </UICard>
                            <UICard title="最近6个月的保费"  width="6">
                                <LineCharts/>
                            </UICard>

                        </UICardGroup>​

                    </div>
            </UIPage>
        );
    }
}

