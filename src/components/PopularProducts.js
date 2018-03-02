import {UICard,UICell,UICardGroup,UIButtonItem,UIMenuItem,UISubMenu,UIButton,Param,UIBox,UILink,UIMessageHelper} from "rainbowui-core";
import prod01 from "../images/prod01.svg";
import prod02 from "../images/prod02.svg";
import prod03 from "../images/prod03.svg";
import Component from "./Component";
import {PolicyStore,PolicyAction} from 'rainbow-foundation-sdk';

export default class PopularProducts extends Component {

    render() {
        return (
            <UICardGroup gap="15">
                <UICard  imageSrc={prod01}>
                    <UICell type="row" style={{textAlign:'center'}}>
                        <h6 style={{width:'100%'}}></h6>
                    </UICell>
                    <UIBox direction="center">
                        <UIButton value="美容场所险询价" onClick={this.quote.bind(this)} styleClass="primary">
                            <Param name="path" value="quote/location/rate" />
                            <Param name="code" value="COSPL_TY" />
                            <Param name="version" value="1.0" />
                        </UIButton>
                    </UIBox>
                </UICard>
                <UICard  imageSrc={prod02}>
                    <UICell type="row" style={{textAlign:'center'}}>
                        <h6 style={{width:'100%'}}></h6>
                    </UICell>
                    <UIBox direction="center">
                        <UIButton value="餐饮饭店险询价" onClick={this.info.bind(this)} styleClass="warning">
                            <Param name="name" value="餐饮饭店保险" />
                        </UIButton>
                    </UIBox>
                </UICard>
                <UICard  imageSrc={prod03}>
                    <UICell type="row" style={{textAlign:'center'}}>
                        <h6 style={{width:'100%'}}></h6>
                    </UICell>
                    <UIBox direction="center">
                        <UIButton value="创业公司险询价" onClick={this.info.bind(this)} styleClass="success">
                            <Param name="name" value="创业公司保险" />
                        </UIButton>
                    </UIBox>
                </UICard>
            </UICardGroup>
        )
    }

    info(event){
        const name = event.getParameter("name");
        UIMessageHelper.info(`${name}产品正在开发.`,null, null);
    }


}
