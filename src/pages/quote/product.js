import PopularProducts from "../../components/PopularProducts";
import Component from "../../components/Component";

import {UICell,UIPage,UICardGroup,UIBox,UIButton,Param,UICard} from "rainbowui-core";
export default class Index extends Component {
    render() {
        return (
            <UIPage>
                    <div className="main">
                        <UICell type="row">
                            <UICardGroup>
                                <UICard width="12">
                                    <PopularProducts/>
                                </UICard>
                                <UICard width="12">
                                    <UICell type="row">
                                        <UICell width="6">
                                            <UIBox direction="left">
                                                <UIButton value="Home" onClick={this.goto}>
                                                    <Param name="path" value="home" />
                                                </UIButton>
                                            </UIBox>
                                        </UICell>
                                        <UICell width="6">
                                            <UIBox>
                                                <UIButton value="More" onClick={this.goto}>
                                                    <Param name="path" value="product/list" />
                                                </UIButton>
                                            </UIBox>
                                        </UICell>
                                    </UICell>
                                </UICard>
                            </UICardGroup>
                        </UICell>

                    </div>
            </UIPage>
        );
    }


}
