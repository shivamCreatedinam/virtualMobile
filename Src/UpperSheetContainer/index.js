import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, Image, Dimensions, Button } from 'react-native';
import colors from '../../colors';
import { bluetooth, data, ht, bt } from '../../assets/index';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function UpperSheetContainer() {
    return (
        <View style={styles.container}>
            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
                <View style={styles.subContainer}>
                    {/* <View style={styles.jio}></View> */}
                    <View style={{ marginTop: 4 }}>
                        <Image source={data} style={styles.bluetoothImg} />
                    </View>
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
                        <View style={{ display: 'flex', flexDirection: 'row', width: '60%', justifyContent: 'space-between', }}>
                            <View style={styles.icon}>
                                <Image source={ht} style={styles.htImg} />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'column' }}>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <View>
                                        <Text style={styles.Screen}>Screen Recorder .</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.Screen}>00:08</Text>
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
                    backgroundColor: colors.theme, borderRadius: 15, height: Dimensions.get("screen").width - 315,
                    width: "95%",display:'flex',alignSelf:'center' }}>
                    <View>

                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        backgroundColor: colors.bloodRed,
        borderRadius: 15,
        margin: 15,
        display: 'flex',
        alignSelf: 'center',

    },
    icon: {
        height: Dimensions.get("screen").width - 365,
        width: Dimensions.get("screen").width - 365,
        resizeMode: 'contain'
    },
    Screen: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.white
    },
    up: {
        height: Dimensions.get("screen").width - 365,
        width: Dimensions.get("screen").width - 365,
        resizeMode: 'contain',
        backgroundColor: colors.white,
        borderRadius: 50
    }

})