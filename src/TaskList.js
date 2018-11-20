import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TaskListÏ extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.contianer}>
                <Text> TaskList </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        backgroundColor: 'grey',
    }
})