/**
 * Side Menu (Custom Drawer)
 */

import React, { Component } from 'react';
import { ImageBackground, Dimensions, StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Image from 'react-native-remote-svg';
import { AppStyles } from '../themes';
let $this;
export default class SideMenu extends Component {
	constructor(props){
        super(props);
        this.state = { currentPage : 'Dashboard'}
        $this = this;
    }
    componentWillMount(){                
               
    }
    navigateScreen(screen){
        this.setState({ currentPage : screen, refresh: true });
        this.props.navigation.navigate(screen);        
    }
	render() {        
        return (           
        	<ScrollView>
                <ImageBackground
                    source={require("../themes/images/menu-header-bg.png")}
                    style={[ AppStyles.menuHeader ]}
                    > 

                    <Image
                        style={[ AppStyles.useraccimg ]}
                        source={require('../themes/images/johndoe.png')}
                    />
                    <Text style={[ AppStyles.useraccname ]}>John Doe</Text>
                </ImageBackground>
                <View style={[ AppStyles.menuContainer ]}>
                    <TouchableOpacity onPress={() => this.navigateScreen('Dashboard')} >                                    
                        <View style={[ AppStyles.menuRow, { backgroundColor: (this.state.currentPage=='Dashboard')? '#f7f0fc' : '#ffffff' } ]}>
                            <Image
                                style={[ AppStyles.menuIcon ]}
                                source={require('../themes/images/ic-dashboard.svg')}
                            />
                            <Text style={[ AppStyles.menuText ]}>Dashboard</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.navigateScreen('Accounts')} >
                        <View style={[ AppStyles.menuRow, { backgroundColor: (this.state.currentPage=='Accounts')? '#f7f0fc' : '#ffffff' } ]}>
                            <Image
                                style={[ AppStyles.menuIcon ]}
                                source={require('../themes/images/ic-accounts.svg')}
                            />
                            <Text style={[ AppStyles.menuText ]}>Accounts</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.navigateScreen('Cards')} >
                        <View style={[ AppStyles.menuRow, { backgroundColor: (this.state.currentPage=='Cards')? '#f7f0fc' : '#ffffff' } ]}>
                            <Image
                                style={[ AppStyles.menuIcon ]}
                                source={require('../themes/images/ic-cards.svg')}
                            />
                            <Text style={[ AppStyles.menuText ]}>Cards</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.navigateScreen('Payment')} >
                        <View style={[ AppStyles.menuRow, { backgroundColor: (this.state.currentPage=='Payment')? '#f7f0fc' : '#ffffff' } ]}>
                            <Image
                                style={[ AppStyles.menuIcon ]}
                                source={require('../themes/images/ic-payments.svg')}
                            />
                            <Text style={[ AppStyles.menuText ]}>Payment</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.navigateScreen('Transfer')} >
                        <View style={[ AppStyles.menuRow, { backgroundColor: (this.state.currentPage=='Transfer')? '#f7f0fc' : '#ffffff' } ]}>
                            <Image
                                style={[ AppStyles.menuIcon ]}
                                source={require('../themes/images/ic-transfers.svg')}
                            />
                            <Text style={[ AppStyles.menuText ]}>Transfers</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.navigateScreen('Airtime')} >
                        <View style={[ AppStyles.menuRow, { backgroundColor: (this.state.currentPage=='Airtime')? '#f7f0fc' : '#ffffff' } ]}>
                            <Image
                                style={[ AppStyles.menuIcon ]}
                                source={require('../themes/images/ic-airtime.svg')}
                            />
                            <Text style={[ AppStyles.menuText ]}>Airtime</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.navigateScreen('Settings')} >
                        <View style={[ AppStyles.menuRow, { backgroundColor: (this.state.currentPage=='Settings')? '#f7f0fc' : '#ffffff' } ]}>
                            <Image
                                style={[ AppStyles.menuIcon ]}
                                source={require('../themes/images/ic-settings.svg')}
                            />
                            <Text style={[ AppStyles.menuText ]}>Settings</Text>
                        </View>
                    </TouchableOpacity>

                </View>                
        	</ScrollView>
        );
    }
}