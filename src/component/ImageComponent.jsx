import { Component } from "react";
export class ImageComponent extends Component{
    render(){
        return ( 
        <> 
        <img src={this.props.kikko}
        alt={this.props.frassica}/>
         <p>{this.props.gatto}</p>
         <a href = {this.props.link}> {this.props.nomeLink}</a>
        </>
        
       
        )
    }

}
