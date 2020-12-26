import React, { Component } from 'react';
import { css } from "@emotion/core";
import { ClipLoader } from 'react-spinners';

import './loading.scss';

export default class LoadingComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: this.props.state
        }
    }

    render(){
        return(
            <div className="sweet-loading loading loading--size">
                <ClipLoader 
                    size={100} 
                    color={"#fffff"} 
                    loading={this.state.loading}/>
            </div>
        )
    }
    
}