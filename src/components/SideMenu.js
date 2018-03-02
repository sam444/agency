import {UISideMenu,UISideMenuItem} from "rainbowui-side-menu";
import {Param} from "rainbowui-core";
import Component from "./Component";

export default class SideMenu extends Component {
    render() {
        return (
                <div id="sideMenu">
                    <UISideMenu>
                        <UISideMenuItem value="主页" onClick={this.gotoHome.bind(this)}>
                             <Param name="path" value="home" />
                        </UISideMenuItem>
                        <UISideMenuItem visibled={this.isAgent()} value="保单列表" icon="glyphicon glyphicon-file" onClick={this.goto}>
                            <Param name="path" value="policy/search" />
                        </UISideMenuItem>
                        <UISideMenuItem visibled={this.isAgent()}  value="用户管理" icon="glyphicon glyphicon-user" onClick={this.gotoUserRole}>
                            <Param name="path" value="userrole" />
                        </UISideMenuItem>
                        <UISideMenuItem visibled={this.isAgent()}  value="产品列表" icon="glyphicon glyphicon-shopping-cart" onClick={this.goto}>
                             <Param name="path" value="product/list" />
                        </UISideMenuItem>
                    </UISideMenu>
                </div>
        );
    }

    gotoHome(event){
        if(this.isAgent()){
            const path = event.getParameter("path");
            window.location.hash="/"+path;

        }else{
            window.location.hash="/";
        }
    }

    gotoUserRole(event){
        const path = event.getParameter("path");
        window.location.href="/"+path
    }

}
