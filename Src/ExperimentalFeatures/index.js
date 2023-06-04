import React from "react";
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native";
import colors from '../../colors';
import IconI from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { bluetooth, data, ht, bt } from '../../assets/index';
import IconE from 'react-native-vector-icons/EvilIcons';

export default function ExperimentalFeatures({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.goBack()}>
                <IconI name={'arrow-back'} size={25} color={colors.white} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
            <View style={{ marginTop: 40, marginLeft: 15, marginBottom:5 }}>
                <Text style={styles.glyphTxt}>EXPEPIMENTAL</Text>

            </View>
            <View style={{ marginLeft:8, marginBottom: 15 }}>
                <Text style={styles.glyphTxt}> FEATURES</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20, marginLeft: 10 }}>
                <View style={{ display: 'flex', width: '15%', alignSelf: 'center' }}>
                    <Feather name={'headphones'} size={22} color={colors.white} style={{ marginLeft: 10 }} />
                </View>

                <TouchableOpacity style={{ marginTop: 10, marginBottom: 10, marginLeft: 5 }} onPress={() => navigation.navigate("experimental")}>
                    <Text style={{ fontSize: 20, color: colors.white }}>Connect to Tesla</Text>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: colors.OffWhite }}>Control your Tesla easily from phone (1)</Text>
                </TouchableOpacity>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20, marginLeft: 10, width: '100%' }}>
                <View style={{ display: 'flex', width: '15%', alignSelf: 'center' }}>
                    <Feather name={'headphones'} size={22} color={colors.white} style={{ marginLeft: 10 }} />
                </View>

                <TouchableOpacity style={{ marginTop: 10, marginBottom: 10, marginLeft: 5 }} onPress={() => navigation.navigate("experimental")}>
                    <Text style={{ fontSize: 20, color: colors.white }}>AirPods support</Text>
                    <View style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Text style={{ fontSize: 14, fontWeight: '500', color: colors.OffWhite, width: '70%' }}>Show AirPods icon and battery info in your settings</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ borderRadius: 20, backgroundColor: colors.lightPurple, width: '14%', padding: 13, position: 'absolute', right: 25, bottom: 43, top: 30 }}>

                </View>
                <View style={{ backgroundColor: colors.lightblue, borderRadius: 50, width: '3%', padding: 10, position: 'absolute', right: 27, bottom: 43, top: 33 }}>

                </View>

            </View>
            <View style={{ position: 'absolute', bottom: 15 }}>
                <IconE name={'exclamation'} size={25} color={colors.white} style={{ marginLeft: 20 }} />
                <View style={{ padding: 20 }}>
                    <Text style={{ color: colors.white }}>
                        Experimental features are features that will be released in the future. You can try them out in advance and give us feedback. Since they're still being tested, there may be some stability issues.
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.theme,
        height: Dimensions.get('screen').height + 1100

    },
    glyphTxt: {
        fontSize: 26,
        color: colors.white,
        fontFamily: "LED_Dot"

    },
    htImg: {
        height: Dimensions.get("screen").width - 370,
        width: Dimensions.get("screen").width - 370,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 5
    },
})
