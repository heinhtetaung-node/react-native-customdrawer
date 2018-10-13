import React, { Component } from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

import { AppStyles } from '../themes';

export default class HeaderBar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }

    navigatorOpen(){
        this.props.navigation.openDrawer();
    }
    
    render() {
        return (
            <View style={[ AppStyles.headerBar ]}>  
                <View>    
                    <TouchableOpacity onPress={() => { this.navigatorOpen() }}>      
                        <Image
                            style={[ AppStyles.menuicon, AppStyles.center ]}
                            source={require('../themes/images/menu2.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={[ AppStyles.headertitleDiv ]}>
                    <Text style={[ AppStyles.headertitle ]}>
                        { this.props.title }
                    </Text>
                </View>
            </View>
        );
    }
}