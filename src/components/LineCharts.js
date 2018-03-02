import {UIBar,UILine} from "rainbowui-charts";
import Component from "./Component";


export default class LineCharts extends Component {
    constructor() {
        super();
        this.state ={
            option:{}
        };
    }
    render() {
        return (
                <UILine id="UILine" style={{width:550,height:400}} option={this.state.option}/>
        );
    }

    componentDidMount(){
        const self =  this;
        const url = this.getURL("HOME_API","POLICY_LINE");
        AjaxUtil.call(url).then((returnOption)=>{
            if(returnOption){
                const xAxisData = [];
                const xAxisDataSet = new Set();
                const series = [];
                returnOption.forEach(function(option){
                    for(let key in option){
                        for(let itemKey in option[key]){
                            xAxisDataSet.add(itemKey+'');
                        }
                    }
                    for(let key in option){
                        const seriesData={type:'line',data:[]};
                        for(let itemKey in option[key]){
                            seriesData["data"].push(option[key][itemKey]);
                        }
                        series.push(seriesData);
                    }
                });
                xAxisDataSet.forEach((data) => xAxisData.push(data));
                const option = {
                    xAxis:  {
                        type: 'category',
                        boundaryGap: false,
                        data: xAxisData
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    series: series
                };
                self.setState({"option":option});
            }

        })
    }
}

