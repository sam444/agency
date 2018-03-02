import SideMenu from "./components/SideMenu";
import TopMenu from "./components/TopMenu";
export default class AppRoot extends React.Component {


    render(){
        return (
            <div>
                <SideMenu/>
                <TopMenu/>
                {this.props.children}
            </div>
      );
    }



}
