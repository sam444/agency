import Customer from "../../components/Customer";
import {UICell,UIPage,UICardGroup,UIBox,UIButton,Param,UICard} from "rainbowui-core";

export default class Index extends React.Component {
    render() {
        return (
            <UIPage>
                    <div className="main">
                        <Customer>
                            <UICard width="12">
                                <UICell type="row">
                                    <UICell width="6">
                                        <UIBox direction="left">
                                            <UIButton value="Back" onClick={this.goto}>
                                                <Param name="path" value="home" />
                                            </UIButton>
                                        </UIBox>
                                    </UICell>
                                    <UICell width="6">
                                        <UIBox>
                                            <UIButton value="Create" onClick={this.goto}>
                                                <Param name="path" value="customer/detail" />
                                            </UIButton>
                                        </UIBox>
                                    </UICell>
                                </UICell>
                            </UICard>
                        </Customer>
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

    goto(event){
      const path = event.getParameter("path");
      window.location.hash="/"+path;
    }

}
