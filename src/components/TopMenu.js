import {UIMenuBar,UISplitButton,UIButtonItem,Param,UIMenuItem,UISubMenu,UIText,UICell,UILink} from "rainbowui-core";
import logo  from "../images/logo.png";
import Component from "./Component";

export default class TopMenu extends Component {

    render() {
        return (
            <div id="topMenu">
                    <UIMenuBar  logo={this.getLogo} styleClass="primary">
                        <UICell type="row">
                            <UICell width="9">
                            </UICell>

                            <UICell width="3">
                                <div style={{float:'right'}}>
                                    {this.renderLink()}
                                </div>
                            </UICell>
                        </UICell>
                    </UIMenuBar>
            </div>
        );
    }


    renderLink(){
        const linkArray = [];
        if(this.isAgent()){
            linkArray.push(<UILink icon="glyphicon glyphicon-log-out"  onClick={this.onClickLogout}/>);
        }
        return linkArray;
    }


    getLogo(){
        return <img src={logo} width="112px"/>;
    }
    onClickQuote(){
      window.location.hash="/product/list";
    }
    onClick(){

    }
    onClickLogout(){
        const config = JSON.parse(sessionStorage.getItem("project_config"));
        logout(config);
    }



}
