import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native";
import colors from '../../colors';
import IconI from 'react-native-vector-icons/Ionicons';

export default function Network({ navigation }) {
    const [network, sNetwork] = useState([
        {
            id: 1,
            img: require('../../assets/Icons/photo.png'),
            name: "Internet",
            Time: "JIO 2704"
        },
        {
            id: 2,
            img: require('../../assets/Icons/whatsap.png'),
            name: "SIMs",
            Time: "JIO"
        },
        {
            id: 3,
            img: require('../../assets/Icons/photo.png'),
            name: "Aeroplane mode",
        },
        {
            id: 4,
            img: require('../../assets/Icons/photo.png'),
            name: "Hotspot and tethering",
            Time: "Off"
        },
        {
            id: 5,
            img: require('../../assets/Icons/photo.png'),
            name: "Data Saver",
            Time: "Off"
        },
        {
            id: 6,
            img: require('../../assets/Icons/photo.png'),
            name: "VPN",
            Time: "None"
        },

    ])
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.goBack()}>
                <IconI name={'arrow-back'} size={25} color={colors.white} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
            <View style={{ marginTop: 40, marginLeft: 15, marginBottom: 15 }}>
                <Text style={styles.glyphTxt}>NETWORK & INTERNET</Text>
            </View>

            {network?.map(it => {
                return (
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20, marginLeft: 15 }}>
                        <View style={{ display: 'flex', alignSelf: 'center' }}>
                            <Image source={it?.img} style={styles.PhotoImg} />
                        </View>
                        <TouchableOpacity style={{ marginLeft: 20, marginTop: 5 }} onPress={() => navigation.navigate("selectRingtone")}>
                            <View style={{ width: '100%', display: 'flex' }}>
                                <Text style={{ color: colors.white, fontSize: 20 }}>{it?.name}</Text>
                            </View>
                            <Text style={{ color: colors.OffWhite, fontSize: 16 }}>{it?.Time}</Text>
                        </TouchableOpacity>

                    </View>
                );

            })}
            <View style={{ marginTop: 22 }}>
                <View style={{ borderRadius: 20, backgroundColor: colors.lightPurple, width: '14%', padding: 13, position: 'absolute', right: 25, bottom: 43 }}>

                </View>
                <View style={{ backgroundColor: colors.lightblue, borderRadius: 50, width: '3%', padding: 10, position: 'absolute', right: 27, bottom: 45 }}>

                </View>
            </View>
            <View style={{ marginLeft: 25, marginTop: 30 }}>
                <Text style={{ color: colors.white, fontSize: 20 }}>Mobile plan</Text>
            </View>
            <View style={{ marginLeft: 25, marginTop: 30 }}>
                <Text style={{ color: colors.white, fontSize: 20 }}>Private DNS</Text>
                <Text style={{ color: colors.OffWhite, fontSize: 16 }}>Automatic</Text>
            </View>
        </View>
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
    }
})