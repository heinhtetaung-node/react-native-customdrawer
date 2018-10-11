import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import HeaderBar  from '../common/HeaderBar';
export default class Dashboard extends Component {
	constructor(props){
		super(props);
	}

	render() {        
        return (           
			<ScrollView>
				<HeaderBar {...this.props} />                
				<View>
					<Text>Dashboard</Text>
				</View>
			</ScrollView>
        );
    }
}

