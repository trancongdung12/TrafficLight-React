import  React,{ Component } from "react";
import './TrafficLight.css';
import classNames from 'classnames';
const RED = 0;
const GREEN = 1;
const ORANGE = 2;
class TrafficLight extends Component{
   
    render(){
        const {currentColor} = this.props;
        return(
            <div>
            <div className="TrafficLight">
                
                <div className={classNames('round','red',{ active:currentColor === RED})}/>
                <div className={classNames('round','orange',{active:currentColor === ORANGE})}/>
                <div className={classNames('round','green',{active:currentColor === GREEN})}/>
                
            </div>
            <div className="column">
                
            </div>

            </div>
        );
    }
}
export default TrafficLight;