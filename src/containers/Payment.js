import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import HeaderBar  from '../common/HeaderBar';

export default class Payment extends Component {
	constructor(props){
		super(props);
	}

	render() {        
        return (  
			<View>
				<HeaderBar {...this.props} />               
				<View><Text>Payment</Text></View>
			</View>
        );
    }
}

