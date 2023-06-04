import React from "react";
import { View, Text, ImageBackground, StyleSheet, TextInput, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../../colors';
import IconI from 'react-native-vector-icons/Ionicons';
import { glyphLight, phone } from '../../assets/index';

export default function AboutPhone({navigation}) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.goBack()}>
                    <IconI name={'arrow-back'} size={25} color={colors.white} style={{ marginLeft: 10 }} />
                </TouchableOpacity>
                <View style={{ marginTop: 40, marginLeft: 15, marginBottom: 15 }}>
                    <Text style={styles.glyphTxt}>ABOUT PHONE</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>

                    <View style={{ marginTop: 50, marginLeft: -30 }}>
                        <Image source={phone} style={styles.Img} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', marginTop: 40, marginLeft: -10 }}>
                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontSize: 20, color: colors.white }}>Device name</Text>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>Nothing phone (1)</Text>
                        </View>
                        <View style={{ marginTop: 23 }}>
                            <Text style={{ fontSize: 20, color: colors.white }}>Software info</Text>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>Nothing OS 1.5.3</Text>
                        </View>
                        <View style={{ marginTop: 23 }}>
                            <Text style={{ fontSize: 20, color: colors.white }}>Storage</Text>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>100 GB used / 256 GB</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 33, marginLeft: 15 }}>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>Device details</Text>
                </View>
                <View style={{ marginTop: 25, marginLeft: 15 }}>
                    <Text style={{ fontSize: 20, color: colors.white }}>Processor</Text>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>Qualcomm® Snapdragon 778G+</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: '70%', justifyContent: 'space-between' }}>
                    <View style={{ marginTop: 25, marginLeft: 15 }}>
                        <Text style={{ fontSize: 20, color: colors.white }}>RAM</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>8GB</Text>
                    </View>
                    <View style={{ marginTop: 25, marginLeft: 15 }}>
                        <Text style={{ fontSize: 20, color: colors.white }}>Battery</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>87%</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: '84%', justifyContent: 'space-between' }}>
                    <View style={{ marginTop: 25, marginLeft: 15 }}>
                        <Text style={{ fontSize: 20, color: colors.white }}>Model number</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>A063</Text>
                    </View>
                    <View style={{ marginTop: 25, marginLeft: 15 }}>
                        <Text style={{ fontSize: 20, color: colors.white }}>Serial number</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>P2226T000754</Text>
                    </View>
                </View>
                <View style={{ marginTop: 25, marginLeft: 15 }}>
                    <Text style={{ fontSize: 20, color: colors.white }}>Android version</Text>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>13</Text>
                </View>
                <View style={{ marginTop: 33, marginLeft: 15 }}>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>Device identifiers</Text>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.theme,
        height: Dimensions.get('screen').height + 300

    },
    glyphTxt: {
        fontSize: 26,
        color: colors.white,
        fontFamily: "LED_Dot"

    },
    PhotoImg: {
        width: Dimensions.get('screen').width - 350,
        height: Dimensions.get('screen').width - 350,
        resizeMode: 'contain'
    },
    Img: {
        height: Dimensions.get("screen").width - 200,
        width: Dimensions.get("screen").width - 200,
        resizeMode: 'cover',

    }
})