import "../../styles/landing.css";
import config from "config";
import {PolicyStore,PolicyAction} from 'rainbow-foundation-sdk';
export default class Index extends React.Component {

    componentWillMount(){
    }

    render(){
        return (
        <div>
            <div id="landingPage" className="intro-header">
                <div className="container">
                  <div className="row">
                        <div className="col-lg-12">
                            <div className="intro-message">
                                <h1>保险代理云</h1>
                                <h3>非同凡响 你值得拥有</h3>
                                <hr className="intro-divider"/>
                                       <ul className="list-inline intro-social-buttons">
                                           {this.renderButton()}
                                      </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>{this.props.children}</div>
        </div>
      );
    }

    renderButton(){
        const config = JSON.parse(sessionStorage.getItem("project_config"));
        const buttonArray = [<li id="quote"><a href="javascript:void(0);" onClick ={this.gotoQuote} className="btn btn-default btn-lg"><span className="network-name">投保</span></a></li>];
        if(config&&config["login"]){
            buttonArray.push(<li id="home"><a href="javascript:void(0);" onClick ={this.gotoHome}  className="btn btn-default btn-lg"> <span className="network-name">主页</span></a></li>);
        }
        return buttonArray;
    }

    componentDidMount(){
      const hight = document.documentElement.clientHeight;
      const landingPage = document.getElementById("landingPage");
      landingPage.style.marginTop = ((hight-732)/2) + "px";
      this.props.router.setRouteLeaveHook(
        this.props.route,
        this.routerWillLeave
      );
      $("#loadings").hide();
      $("#topMenu").hide();
      $("#sideMenu").hide();
    }

    routerWillLeave(nextLocation) {
        $("#landingPage").hide();
        $("#loadings").show();
        $("#topMenu").show();
        $("#sideMenu").show();
    }

    gotoHome(){
      window.location.hash="/home";
    }
    gotoQuote(){
        const configJson = JSON.parse(sessionStorage.getItem("project_config"));
        const createPolicyUrl = configJson['PA_SERVICE']+"/"+config["POLICY_API"]["CREATE_POLICY"];
        const sevePolicyUrl = configJson['PA_SERVICE']+"/"+config["POLICY_API"]["SAVE_POLICY"];
        const param ={
            'productCode':'COSPL_TY',
            'productVersion':'1.0',
            'createPolicyUrl':createPolicyUrl
        };
        AjaxUtil.show();
        PolicyAction.createPolicy(param).then((policy) => {
            PolicyAction.savePolicy(sevePolicyUrl).then((policy) => {
                window.location.hash="/quote/location/rate";
            });
        });
    }

}
