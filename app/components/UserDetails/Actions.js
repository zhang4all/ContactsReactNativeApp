import React from 'react';
import { Text, View, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { ICON_SIZE } from './styles';
import colors from '../../config/colors';
import { toPhoneNumber } from '../../helpers/string';

const Actions = (contact) => {
    return (
        <View >
            <View style={styles.actionContainer}>
                <View style={styles.actionRow}>
                    <View style={styles.actionInfo}>
                        <Text style={styles.actionLabel}>email</Text>
                        <Text style={styles.actionBody}>{contact.email}</Text>
                    </View>
                    <View style={styles.actionIcons}>
                        <TouchableOpacity
                            onPress={() => null}
                        >
                            <Icon
                                color={colors.link}
                                size={ICON_SIZE}
                                style={styles.actionIcon}
                                name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.actionContainer}>
                <View style={styles.actionRow}>
                    <View style={styles.actionInfo}>
                        <Text style={styles.actionLabel}>cell</Text>
                        <Text style={styles.actionBody}>{contact.cell}</Text>
                    </View>
                    <View style={styles.actionIcons}>
                        <TouchableOpacity
                            onPress={() => null}
                        >
                            <Icon
                                color={colors.link}
                                size={ICON_SIZE}
                                style={styles.actionIcon}
                                name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => null}
                        >
                            <Icon
                                color={colors.link}
                                size={ICON_SIZE}
                                style={styles.actionIcon}
                                name={Platform.OS === 'ios' ? 'ios-text' : 'md-text'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.actionContainer}>
                <View style={styles.actionRow}>
                    <View style={styles.actionInfo}>
                        <Text style={styles.actionLabel}>phone</Text>
                        <Text style={styles.actionBody}>{contact.phone}</Text>
                    </View>
                    <View style={styles.actionIcons}>
                        <TouchableOpacity
                            onPress={() => null}
                        >
                            <Icon
                                color={colors.link}
                                size={ICON_SIZE}
                                style={styles.actionIcon}
                                name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Actions;
