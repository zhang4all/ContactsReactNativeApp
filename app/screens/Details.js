import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Header, Actions } from '../components/UserDetails';
import colors from '../config/colors';
import styles from '../components/UserDetails/styles';

class Details extends Component {

  render() {
      const contact = this.props.navigation.state.params;

    return (
      <ScrollView style={{ backgroundColor: colors.background }}>
        <Header {...contact}/>
        <Actions {...contact}/>
        <View style={styles.actionRow}>
            <View style={styles.actionInfo}>
                <Text style={styles.actionLabel}>city</Text>
                <Text style={styles.actionBody}>{contact.location.city}</Text>
            </View>
        </View>
        <View style={styles.actionRow}>
            <View style={styles.actionInfo}>
                <Text style={styles.actionLabel}>birthday</Text>
                <Text style={styles.actionBody}>{contact.dob}</Text>
            </View>
        </View>
        <View style={styles.actionRow}>
            <View style={styles.actionInfo}>
                <Text style={styles.actionLabel}>registered</Text>
                <Text style={styles.actionBody}>{contact.registered}</Text>
            </View>
        </View>
        <View style={styles.actionRow}>
            <View style={styles.actionInfo}>
                <Text style={styles.actionLabel}>username</Text>
                <Text style={styles.actionBody}>{contact.login.username}</Text>
            </View>
        </View>
      </ScrollView>
    );
  }
}

export default Details;
