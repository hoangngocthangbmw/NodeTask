import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import Header from './Header';
import Filter from './Filter';
import TaskList from './TaskList';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header />
                <TaskList />
                <Filter />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
