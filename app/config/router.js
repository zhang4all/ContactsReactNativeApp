import React from 'React';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';

export const ContactsStack = StackNavigator({
    // stack navigator defines Contacts as a screen
    Contacts: {
        screen: Contacts,
        navigationOptions: {
            title: 'Contacts'
        },
    },
    Details: {
        screen: Details,
        navigationOptions: {
            title: 'Details'
        },
    }
});

export const NewContactStack = StackNavigator({
    NewContact: {
        screen: NewContact,
        navigationOptions: {
            headerTitle: 'New Contact'
        }
    }
});

export const Tabs = TabNavigator({
    Contact: {
        screen: ContactsStack,
        navigationOptions: {
            tabBarLabel: 'Contacts',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor}/>
        }
    },
    NewContact: {
        screen: NewContactStack,
        navigationOptions: {
            tabBarLabel: 'NewContact',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-add" size={35} color={tintColor}/>
        }
    }
});
