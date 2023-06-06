import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, Image, Dimensions, Button, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../../colors';
import { bluetooth, data, ht, bt } from '../../assets/index';
import Slider from "react-native-slider";
import UpperSheetCarousel from '../../Common/UpperSheetCarousel';


export default function UpperSheetContainer() {
    const [btnClicked, sBtnClicked] = useState(false)
    const [value, svalue] = useState(0.2)
    return (
        <ScrollView>
            {btnClicked != true ? <View>
                <View style={styles.container}>

                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
                        <View style={styles.subContainer}>
                            {/* <View style={styles.jio}></View> */}
                            <TouchableOpacity style={{ marginTop: 4 }} onPress={() => sBtnClicked(!btnClicked)}>
                                <Image source={data} style={styles.bluetoothImg} />
                            </TouchableOpacity>
                            <View style={styles.networkTxt}>
                                <Text style={styles.network}>JIO 3G-JIo 4G</Text>
                            </View>
                        </View>
                        <View style={styles.subContainers}>
                            {/* <View style={styles.jio}></View> */}
                            <View style={{ marginTop: 4 }}>
                                <Image source={bluetooth} style={styles.bluetoothImg} />
                            </View>
                            <View style={styles.BluetoothTxt}>
                                <Text style={styles.Bluetooth}>Bluetooth</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: 10 }}>
                        <View style={styles.HotspotContainer}>

                            <View style={{ display: 'flex', justifyContent: 'center' }}>
                                <Image source={ht} style={styles.htImg} />
                            </View>
                            <View style={styles.BluetoothTxt}>
                                <Text style={styles.Bluetooth}>Hotspot</Text>
                            </View>

                        </View>
                        <View style={styles.HotspotContainer}>

                            <View style={{ display: 'flex', justifyContent: 'center' }}>
                                <Image source={bt} style={styles.htImg} />
                            </View>
                            <View style={styles.BluetoothTxt}>
                                <Text style={styles.Bluetooth}>Battery Saver</Text>
                            </View>

                        </View>
                    </View>
                    <View>
                        <View style={styles.screenRecorder}>
                            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: 18 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', width: '50%', justifyContent: 'space-around', }}>
                                    <View style={{ width: '40%' }}>
                                        <Image source={ht} style={styles.htImg} />
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                                            <View>
                                                <Text style={styles.Screens}>Screen Recorder .</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.Screens}>00:08</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: 15 }}>
                                            <Text style={styles.Screen}>Recording screen and audio</Text>
                                        </View>
                                        <View style={{ marginTop: 15 }}>
                                            <Text style={styles.Screen}>STOP</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.up}>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: colors.theme, borderRadius: 15,
                            width: "95%", display: 'flex', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between'
                        }}>
                            <View style={{ display: 'flex', flexDirection: 'row', width: '75%', justifyContent: 'space-around' }}>
                                <View style={{ marginTop: 20 }}>
                                    <Image source={bt} style={styles.htImg} />
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'column' }}>
                                    <View style={{ marginTop: 20 }}>
                                        <Text style={{ color: colors.white, fontWeight: '500' }}>lokesh's Nothing ear(1)</Text>
                                    </View>
                                    <View style={{ marginTop: 10 }}>
                                        <Text style={{ color: colors.white, fontWeight: '500', marginBottom: 10 }}>Left 80% Cases 80% Right 70%</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.down}>
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', width: '93%', justifyContent: 'space-between', marginTop: 13 }}>
                            <View style={{ backgroundColor: colors.theme, borderRadius: 50, padding: 10, width: '24%', marginLeft: 25 }}>
                                <Text style={{ color: colors.white, fontWeight: '500', display: 'flex', alignSelf: 'center' }}>Manage</Text>
                            </View>
                            <View style={{ backgroundColor: colors.theme, borderRadius: 50, padding: 10, width: '24%' }}>
                                <Text style={{ color: colors.white, fontWeight: '500', display: 'flex', alignSelf: 'center' }}>Clear all</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View> : <View style={{backgroundColor:colors?.black}}>
                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
                    <View style={styles.subContainerElse}>
                        {/* <View style={styles.jio}></View> */}
                        <TouchableOpacity style={{ display: 'flex', alignSelf: 'center', marginTop: 8 }} onPress={() => sBtnClicked(true)}>
                            <Image source={data} style={styles.bluetoothImg} />
                        </TouchableOpacity>
                        <View style={{
                            display: 'flex',
                            // flexWrap: 'wrap',
                            // width: Dimensions.get("screen").width - 200,
                            width: '100%',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                marginTop: 10,
                                color: colors.white,
                                fontSize: 14,
                                fontWeight: '700',
                                display: 'flex',
                                flexWrap: 'wrap',
                                // width: "60%",
                                alignSelf: 'center',
                                paddingLeft: 8,
                            }}>JIO 3G-JIo 4G</Text>
                            <Text style={{
                                color: colors.white,
                                fontSize: 14,
                                fontWeight: '700',
                                display: 'flex',
                                flexWrap: 'wrap',
                                // width: "50%",
                                paddingLeft: 8,
                                alignSelf: 'center'
                            }}>5.72 GB used</Text>
                        </View>
                    </View>
                    <View style={styles.subContainerElse}>
                        {/* <View style={styles.jio}></View> */}
                        <TouchableOpacity style={{ display: 'flex', alignSelf: 'center', marginTop: 8 }} onPress={() => sBtnClicked(true)}>
                            <Image source={bluetooth} style={styles.bluetoothImg} />
                        </TouchableOpacity>
                        <View style={{
                            marginTop: 10,
                            display: 'flex',
                            // flexWrap: 'wrap',
                            width: Dimensions.get("screen").width - 200,
                            alignSelf: 'center',
                            paddingLeft: 10
                        }}>
                            <Text style={{
                                display: 'flex',
                                alignSelf: 'center',
                                color: colors.white,
                                fontSize: 16,
                                fontWeight: '700',
                            }}>Bluetooth</Text>
                            <Text style={{
                                display: 'flex',
                                alignSelf: 'center',
                                color: colors.white,
                                fontSize: 16,
                                fontWeight: '700',
                            }}>On</Text>
                        </View>
                    </View>
                </View>
                <View style={{ padding: 15 }}>
                    <Slider
                        value={value}
                        onValueChange={(value) => svalue(value)} />
                </View>
                {/* <View> */}
                    <UpperSheetCarousel />
                {/* </View> */}
            </View>

            }

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        marginTop: 25,
        // marginLeft: 15,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.theme,
        borderRadius: 50,
        padding: 8,
        width: Dimensions.get("screen").width - 210,
        height: Dimensions.get("screen").width - 310,
        justifyContent: 'space-between'
    },
    subContainerElse: {
        marginTop: 25,
        // marginLeft: 15,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.Darkgrey,
        borderRadius: 100,
        padding: 20,
        width: Dimensions.get("screen").width - 205,
        height: Dimensions.get("screen").width - 210,

    },
    subContainers: {
        marginTop: 25,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.theme,
        borderRadius: 50,
        padding: 8,
        width: Dimensions.get("screen").width - 210,
        height: Dimensions.get("screen").width - 310,
        justifyContent: 'space-between'
    },
    HotspotContainer: {
        // marginTop: 25,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.theme,
        borderRadius: 50,
        padding: 20,
        width: Dimensions.get("screen").width - 210,
        height: Dimensions.get("screen").width - 320,

    },
    Hotspot: {
        marginTop: 25,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.theme,
        borderRadius: 50,
        padding: 8,
        width: Dimensions.get("screen").width - 210,
        height: Dimensions.get("screen").width - 310,
        justifyContent: 'space-between'
    },
    jio: {
        display: 'flex',
        backgroundColor: colors.white,
        borderRadius: 50,
        height: Dimensions.get("screen").width - 335,
        width: Dimensions.get("screen").width - 335,
        justifyContent: 'center',
        marginTop: 5
    },
    networkTxt: {
        display: 'flex',
        flexWrap: 'wrap',
        width: Dimensions.get("screen").width - 200,

    },
    network: {
        marginTop: 10,
        color: colors.white,
        fontSize: 16,
        fontWeight: '700',
        display: 'flex',
        flexWrap: 'wrap',
        width: "50%",
        paddingLeft: 8,

    },
    networks: {
        marginTop: 10,
        color: colors.white,
        fontSize: 14,
        fontWeight: '700',
        display: 'flex',
        flexWrap: 'wrap',
        width: "50%",
        paddingLeft: 8,
        alignSelf: 'center'
    },
    Bluetooth: {
        display: 'flex',
        alignSelf: 'center',
        color: colors.white,
        fontSize: 16,
        fontWeight: '700',
    },
    BluetoothTxt: {
        display: 'flex',
        flexWrap: 'wrap',
        width: Dimensions.get("screen").width - 200,
        alignSelf: 'center',
        paddingLeft: 10
    },
    bluetoothImg: {
        height: Dimensions.get("screen").width - 335,
        width: Dimensions.get("screen").width - 335,
        resizeMode: 'cover'
    },
    htImg: {
        height: Dimensions.get("screen").width - 365,
        width: Dimensions.get("screen").width - 365,
        resizeMode: 'contain'
    },
    screenRecorder: {
        height: Dimensions.get("screen").width - 285,
        width: "95%",
        backgroundColor: colors.orange,
        borderRadius: 15,
        margin: 15,
        display: 'flex',
        alignSelf: 'center',

    },
    icon: {
        height: Dimensions.get("screen").width - 400,
        width: Dimensions.get("screen").width - 400,
        resizeMode: 'contain'
    },
    Screen: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.white
    },
    Screens: {
        fontSize: 12,
        fontWeight: '500',
        color: colors.white
    },
    up: {
        height: Dimensions.get("screen").width - 370,
        width: Dimensions.get("screen").width - 370,
        resizeMode: 'contain',
        backgroundColor: colors.white,
        borderRadius: 50,
        marginTop: 5,
        marginRight: 0
    },

    down: {
        height: Dimensions.get("screen").width - 370,
        width: Dimensions.get("screen").width - 370,
        resizeMode: 'contain',
        backgroundColor: colors.black,
        borderRadius: 50,
        marginTop: 45,
        marginRight: 35
    }
})