import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Filter extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text>All</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Done</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Pendent</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        backgroundColor: 'green',
        justifyContent: "space-around",
        flexDirection: 'row',
        alignItems: 'center',
    }
})
