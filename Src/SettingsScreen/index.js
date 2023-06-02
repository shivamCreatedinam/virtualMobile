import React, { useRef } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../../colors';
import { bluetooth, data, ht, bt } from '../../assets/index';



export default function SettingsScreen({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.settingContainer}>
                    <Text style={styles.settingTxt}>SETTINGS</Text>
                </View>
                <View style={{ marginTop: 15 }}>
                    <TextInput style={styles.input} />
                    <View style={{ position: 'absolute', left: 33, top: 16 }}>
                        <Text style={{ fontSize: 18, color: colors.white }}>Search Settings</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: '60%', justifyContent: 'space-between', marginTop: 20, paddingLeft: 15 }}>
                    <View style={{ display: 'flex', justifyContent: 'center', width: '18%', alignSelf: 'center' }}>
                        <Image source={ht} style={styles.htImg} />
                    </View>

                    <View style={{ marginTop: 15, marginBottom: 10 }}>
                        <Text style={{ fontSize: 20, color: colors.white }}>Network & internet</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>Mobile,Wi-Fi,hotspot</Text>
                    </View>

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: '62%', justifyContent: 'space-between', marginTop: 20, paddingLeft: 15 }}>
                    <View style={{ display: 'flex', justifyContent: 'center', width: '18%', alignSelf: 'center' }}>
                        <Image source={ht} style={styles.htImg} />
                    </View>

                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 20, color: colors.white }}>Connected Devices</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>Bluetooth, pairing</Text>
                    </View>

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: '65%', justifyContent: 'space-between', marginTop: 20, paddingLeft: 15 }}>
                    <View style={{ display: 'flex', justifyContent: 'center', width: '18%', alignSelf: 'center' }}>
                        <Image source={ht} style={styles.htImg} />
                    </View>

                    <TouchableOpacity style={{ marginTop: 10, marginBottom: 10 }} onPress={()=> navigation.navigate("apps")}>
                        <Text style={{ fontSize: 20, color: colors.white }}>Apps</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>Recent apps, default apps</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: '80%', justifyContent: 'space-between', marginTop: 20, paddingLeft: 5 }}>
                    <View style={{ display: 'flex', justifyContent: 'center', width: '20%', alignSelf: 'center' }}>
                        <Image source={ht} style={styles.htImg} />
                    </View>

                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 20, color: colors.white }}>Notifications</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>Notification history, conversations</Text>
                    </View>

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: '73%', justifyContent: 'space-between', marginTop: 20, paddingLeft: 10 }}>
                    <View style={{ display: 'flex', justifyContent: 'center', width: '20%', alignSelf: 'center' }}>
                        <Image source={ht} style={styles.htImg} />
                    </View>

                    <TouchableOpacity style={{ marginTop: 10, marginBottom: 10 }} onPress={() => navigation.navigate("glyph")}>
                        <Text style={{ fontSize: 20, color: colors.white }}>Glyph Interface</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>Customise ringtone and more</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: '76%', justifyContent: 'space-between', marginTop: 20, paddingLeft: 10 }}>
                    <View style={{ display: 'flex', justifyContent: 'center', width: '20%', alignSelf: 'center' }}>
                        <Image source={ht} style={styles.htImg} />
                    </View>

                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 20, color: colors.white }}>Battery</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>87%- About 10 hrs, 54 mins left</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: '62%', justifyContent: 'space-between', marginTop: 20, paddingLeft: 10 }}>
                    <View style={{ display: 'flex', justifyContent: 'center', width: '25%', alignSelf: 'center' }}>
                        <Image source={ht} style={styles.htImg} />
                    </View>

                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 20, color: colors.white }}>Storage</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>39% used - 156 GB free</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: '80%', justifyContent: 'space-between', marginTop: 20, paddingLeft: 10 }}>
                    <View style={{ display: 'flex', justifyContent: 'center', width: '20%', alignSelf: 'center' }}>
                        <Image source={ht} style={styles.htImg} />
                    </View>

                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 20, color: colors.white }}>Sound and vibration</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>Volume, vibration, Do Not Disturn</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: '80%', justifyContent: 'space-between', marginTop: 20, paddingLeft: 10 }}>
                    <View style={{ display: 'flex', justifyContent: 'center', width: '20%', alignSelf: 'center' }}>
                        <Image source={ht} style={styles.htImg} />
                    </View>

                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 20, color: colors.white }}>Display</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>Dark theme, font size, brightness</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: '90%', justifyContent: 'space-between', marginTop: 20, paddingLeft: 10 }}>
                    <View style={{ display: 'flex', justifyContent: 'center', width: '20%', alignSelf: 'center' }}>
                        <Image source={ht} style={styles.htImg} />
                    </View>

                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 20, color: colors.white }}>Customisation</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>Wallpapers, colours, iconpack, app grid</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: '66%', justifyContent: 'space-between', marginTop: 20, paddingLeft: 10 }}>
                    <View style={{ display: 'flex', justifyContent: 'center', width: '28%', alignSelf: 'center' }}>
                        <Image source={ht} style={styles.htImg} />
                    </View>

                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 20, color: colors.white }}>Accessibility</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>Display, interaction, audio</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: '84%', justifyContent: 'space-between', marginTop: 20, paddingLeft: 10 }}>
                    <View style={{ display: 'flex', justifyContent: 'center', width: '23%', alignSelf: 'center' }}>
                        <Image source={ht} style={styles.htImg} />
                    </View>

                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 20, color: colors.white }}>Security</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: colors.OffWhite }}>Screen lock, Find My Device, app security</Text>
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
    settingContainer: {
        marginTop: 100,
        marginLeft: 15
    },
    settingTxt: {
        fontSize: 30,
        color: colors.white
    },
    input: {
        width: "95%",
        backgroundColor: colors.DullGrey,
        borderRadius: 100,
        // justifyContent: 'center',
        alignSelf: 'center',
        padding: 15

    },
    htImg: {
        height: Dimensions.get("screen").width - 370,
        width: Dimensions.get("screen").width - 370,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 5
    },
});
