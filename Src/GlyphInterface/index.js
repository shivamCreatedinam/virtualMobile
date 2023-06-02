import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, Image,TouchableOpacity } from "react-native";
import IconI from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconS from 'react-native-vector-icons/SimpleLineIcons';
import colors from '../../colors';
import { glyphLight } from '../../assets/index';
import Slider from "react-native-slider";
import { useNavigation } from "@react-navigation/native";


export default function GlyphInterface() {
    const navigation = useNavigation();
    const [value, svalue] = useState(0.2)
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ marginTop: 15 }} onPress={()=> navigation.goBack()}>
                <IconI name={'arrow-back'} size={25} color={colors.white} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
            <View style={{ marginTop: 40, marginLeft: 10 }}>
                <Text style={styles.glyphTxt}>GLYPH INTERFACE </Text>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.mainContent}>
                    <Text style={{ color: colors.black, fontSize: 18 }}>Glyph lights</Text>
                </View>
                <View style={{ marginTop: 22 }}>
                    <View style={{ borderRadius: 20, backgroundColor: colors.lightPurple, width: '14%', padding: 13, position: 'absolute', right: 25, bottom: 43 }}>

                    </View>
                    <View style={{ backgroundColor: colors.lightblue, borderRadius: 50, width: '3%', padding: 10, position: 'absolute', right: 27, bottom: 45 }}>

                    </View>
                </View>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <View style={{ marginTop: 20,display:'flex',alignSelf:'center',width:'100%'}}>
                        <Image source={glyphLight} style={styles.Img} />
                    </View>
                    <View style={{display:'flex',justifyContent:'flex-end'}}>
                        <IconS name={'arrow-left'} size={35} color={colors.white} style={{}} />
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: 8 }}>
                    <View style={{ marginTop: 20 }}>
                        <IconM name={'brightness-low'} size={25} color={colors.white} style={{ marginLeft: 10 }} />
                    </View>
                    <View style={{ padding: 15, width: '80%' }}>
                        <Slider
                            value={value}
                            onValueChange={(value) => svalue(value)} />
                    </View>
                    <View style={{ marginTop: 20, marginRight: 10 }}>
                        <IconI name={'settings-outline'} size={25} color={colors.white} style={{ marginLeft: 10 }} />
                    </View>
                </View>
                <View style={{ marginLeft: 18 }}>
                    <Text style={{ color: colors.white, fontSize: 20 }}>Ringtones</Text>
                    <Text style={{ color: colors.OffWhite, fontSize: 16 }}>radiate</Text>
                </View>
                <View style={{ marginLeft: 18, marginTop: 15 }}>
                    <Text style={{ color: colors.white, fontSize: 20 }}>Notification sounds</Text>
                    <Text style={{ color: colors.OffWhite, fontSize: 16 }}>radiate</Text>
                </View>
            </View>



        </View>
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
        color: colors.white
    },
    mainContainer: {
        marginTop: 30, display: 'flex',
        justifyContent: 'center',

    },
    mainContent: {
        backgroundColor: colors.lightblue,
        padding: 25,
        borderRadius: 20,
        width: '95%',
        display: 'flex',
        alignSelf: 'center'
    },
    ImgBackground: {
        backgroundColor: colors.DarkGray, width: '40%', alignSelf: 'center'
    },
    Img: {
        height: Dimensions.get("screen").width - 100,
        width: Dimensions.get("screen").width - 100,
        resizeMode: 'contain',
        alignSelf: 'center'
    }
});
