import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { contacts } from '../config/data';
import colors from '../config/colors';
import { ListItem } from '../components/ListItem';

class Contacts extends Component {
    handleRowPress = (item) => {
        // each component that is used in a stack, drawer navigator has this.props.navigation
        // each screen in app automatically contains a navigation props
        // this.props.navigation contains navigate, goBack, state, ...
        this.props.navigation.navigate('Details', item);
    };

    render() {
        return (
            <FlatList
                style = {{ backgroundColor: colors.background }}
                data = { contacts }
                renderItem={({ item }) =>
                    <ListItem contact={item} onPress={() => this.handleRowPress(item)} />
                }
                keyExtractor={(item) => item.email}
            />
        );
    }
};

export default Contacts;
