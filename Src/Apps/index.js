import React from "react";
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IconI from 'react-native-vector-icons/Ionicons';

export default function Apps() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.goBack()}>
                <IconI name={'arrow-back'} size={25} color={colors.white} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.theme,
        height: Dimensions.get('screen').height + 450

    },
});