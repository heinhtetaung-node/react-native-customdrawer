import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

export default class HeaderBar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }

    render() {
        return (
            <View>
                <View>
                    {/* <Icon
                            onPress={() => {                                                                
                                this.props.navigation.openDrawer();
                            }}
                            image={require('../../resources/icons/menu.png')}
                    /> */}
                    <TouchableOpacity 
                        onPress={() => {                                                                
                            this.props.navigation.openDrawer();
                        }}>
                        <Text>=</Text>
                    </TouchableOpacity>
                </View>                
            </View>
            );
    }
}