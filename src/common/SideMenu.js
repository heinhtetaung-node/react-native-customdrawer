/**
 * Side Menu (Custom Drawer)
 */

import React, { Component } from 'react';
import { Dimensions, StyleSheet, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';

export default class SideMenu extends Component {
	constructor(props){
		super(props);
	}

	render() {        
        return (           
        	<ScrollView>
        		<View>
                    {/* <Icon
                        image={require('../../resources/icons/home.png')}
                        tintColor={Colors.yellow}
                        onPress={() => this.props.navigation.navigate("Home")}
                    /> */}
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Dashboard")} >
                        <Text>
                            Dashboard
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {/* <Icon
                        image={require('../../resources/icons/home.png')}
                        tintColor={Colors.yellow}
                        onPress={() => this.props.navigation.navigate("Home")}
                    /> */}
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Payment")} >
                        <Text>
                            Payment
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {/* <Icon
                        image={require('../../resources/icons/home.png')}
                        tintColor={Colors.yellow}
                        onPress={() => this.props.navigation.navigate("Home")}
                    /> */}
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Transfer")} >
                        <Text>
                            Transfer
                        </Text>
                    </TouchableOpacity>
                </View>
        	</ScrollView>
        );
    }
}