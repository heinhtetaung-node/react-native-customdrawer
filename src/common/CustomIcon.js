/**
 * Side Menu (Custom Drawer)
 */

import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { AppStyles } from '../themes';

// import Icon from 'react-native-vector-icons/FontAwesome';
import {createIconSetFromIcoMoon} from "react-native-vector-icons";

import IcomoonConfig from "../themes/fonts/selection.json";
const Icomoon = createIconSetFromIcoMoon(IcomoonConfig);


let $this;
export default class CustomIcon extends Component {
	constructor(props){
        super(props);
    }
    componentWillMount(){                
               
    }
    render() {        
        return (           
        	<Icomoon
                name={this.props.name}
                size={this.props.size}
                color={this.props.color}
            />            
        );
    }
}