import {UIBar} from "rainbowui-charts";
import Component from "./Component";

export default class BarCharts extends Component {
    constructor() {
        super();
        this.state ={
            option:{}
        };
    }
    render() {
        return (
            <UIBar id="UIBar" style={{width:550,height:400}} option={this.state.option}/>
        );
    }

    componentDidMount(){
        const self =  this;
        const url = this.getURL("HOME_API","POLICY_BAR");
        AjaxUtil.call(url).then((returnOption)=>{
            const option =  {
                xAxis: {
                    data: ["询价中","待支付","已出单","拒绝单"]
                },
                yAxis: {},
                series: [{
                    name: 'Count',
                    type: 'bar',
                    data: [returnOption["Quote"],returnOption["Bind"],returnOption["Issue"],returnOption["Cancel"]]
                }]
            };
            self.setState({"option":option});
        })
    }
}

