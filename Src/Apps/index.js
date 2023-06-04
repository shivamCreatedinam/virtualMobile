import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IconI from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../colors';

export default function Apps() {
    const navigation = useNavigation();
    const [recentApps, sRecentApps] = useState([
        {
            id: 1,
            img: require('../../assets/Icons/photo.png'),
            name: "Photos",
            Time: 1
        },
        {
            id: 2,
            img: require('../../assets/Icons/whatsap.png'),
            name: "WhatsApp Business",
            Time: 2
        },
        {
            id: 3,
            img: require('../../assets/Icons/photo.png'),
            name: "Flipkart",
            Time: 3
        },
        {
            id: 4,
            img: require('../../assets/Icons/photo.png'),
            name: "Google News",
            Time: 24
        },

    ])
    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.goBack()}>
                    <IconI name={'arrow-back'} size={25} color={colors.white} style={{ marginLeft: 10 }} />
                </TouchableOpacity>
                <View style={{ marginTop: 40, marginLeft: 15 }}>
                    <Text style={styles.glyphTxt}>APPS</Text>
                </View>
                <View style={{ marginTop: 30, marginLeft: 16 }}>
                    <Text style={{ color: colors.white, fontSize: 14 }}>Recently opened apps</Text>
                </View>
                {recentApps?.map(it => {
                    return (
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20, marginLeft: 15 }}>
                            <View style={{ display: 'flex', alignSelf: 'center' }}>
                                <Image source={it?.img} style={styles.PhotoImg} />
                            </View>
                            <TouchableOpacity style={{ marginLeft: 20, marginTop: 5 }} onPress={() => navigation.navigate("selectRingtone")}>
                                <View style={{ width: '100%', display: 'flex' }}>
                                    <Text style={{ color: colors.white, fontSize: 20 }}>{it?.name}</Text>
                                </View>
                                <Text style={{ color: colors.OffWhite, fontSize: 16 }}>{it?.Time} min ago</Text>
                            </TouchableOpacity>

                        </View>
                    );

                })}
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 15, marginTop: 20 }}>
                    <View>
                        <Feather name={'chevron-right'} size={23} color={colors.white} style={{ marginLeft: 10 }} />
                    </View>
                    <View style={{ marginLeft: 25 }}>
                        <Text style={{ color: colors.lightPurple, fontSize: 20 }}>See all 224 apps</Text>
                    </View>
                </View>
                <View style={{ marginTop: 30, marginLeft: 16 }}>
                    <Text style={{ color: colors.white, fontSize: 14 }}>General </Text>
                </View>
                <View style={{ marginTop: 30, marginLeft: 16 }}>
                    <View>
                        <Text style={{ color: colors.white, fontSize: 20 }}>Default apps</Text>
                        <Text style={{ color: colors.white, fontSize: 14 }}>Chrome, Phone and Messages</Text>
                    </View>
                </View>
                <View style={{ marginTop: 30, marginLeft: 16 }}>
                    <View>
                        <Text style={{ color: colors.white, fontSize: 20 }}>Assistant</Text>
                    </View>
                </View>
                <View style={{ marginTop: 30, marginLeft: 16 }}>
                    <View>
                        <Text style={{ color: colors.white, fontSize: 20 }}>Screen time</Text>
                        <Text style={{ color: colors.white, fontSize: 14 }}>1 hr, 5 mins today</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.theme,
        height: Dimensions.get('screen').height + 450

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
});