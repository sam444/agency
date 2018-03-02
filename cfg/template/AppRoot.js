import {UIPage} from 'RainbowUI';


export default class AppRoot extends React.Component {

    render(){
        return (
             <UIPage>
                  {this.props.children}
             </UIPage>
        );
    }
}