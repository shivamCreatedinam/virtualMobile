import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import colors from '../../colors';
import IconI from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconE from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from "@react-navigation/native";

export default function Ringtones() {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.goBack()}>
                    <IconI name={'arrow-back'} size={25} color={colors.white} style={{ marginLeft: 10 }} />
                </TouchableOpacity>
                <View style={{ marginTop: 40, marginLeft: 15 }}>
                    <Text style={styles.glyphTxt}>RINGTONES </Text>
                </View>
                <View style={{ marginLeft: 16, marginTop: 40 }}>
                    <Text style={{ color: colors.lightblue, fontSize: 16 }}>For all contacts</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15, width: '50%', justifyContent: 'space-between' }}>
                    <View style={{ display: 'flex', alignSelf: 'center' }}>
                        <IconI name={'musical-note'} size={20} color={colors.white} style={{ marginLeft: 20 }} />
                    </View>
                    <TouchableOpacity style={{ marginLeft: 20, marginTop: 5 }} onPress={()=> navigation.navigate("selectRingtone")}>
                        <Text style={{ color: colors.white, fontSize: 20 }}>Default ringtone</Text>
                        <Text style={{ color: colors.OffWhite, fontSize: 16 }}>radiate</Text>
                    </TouchableOpacity> 
                </View>
                <View style={{ marginLeft: 16, marginTop: 40, marginBottom: 10 }}>
                    <Text style={{ color: colors.lightblue, fontSize: 16 }}>Custom contacts</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: '40%', justifyContent: 'space-between', marginTop: 10, marginLeft: 20 }}>
                    <View style={{ display: 'flex', alignSelf: 'center', marginTop: 8 }}>
                        <IconI name={'add'} size={24} color={colors.white} />
                    </View>
                    <TouchableOpacity style={{ marginLeft: 20, marginTop: 5 }}>
                        <Text style={{ color: colors.white, fontSize: 20 }}>Add a contact</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', width: '88%', justifyContent: 'space-between', marginTop: 30, alignSelf: 'center' }}>
                    <View>
                        <Text style={{ color: colors.white, fontSize: 20 }}>Abra</Text>
                        <Text style={{ color: colors.lightblue, fontSize: 14 }}>squirrels</Text>
                    </View>
                    <View style={{ display: 'flex', marginTop: 8 }}>
                        <View style={{ borderLeftColor: colors.purple, borderLeftWidth: 2, marginRight: 10 }}>
                            <IconM name={'delete-outline'} size={25} color={colors.white} style={{ marginLeft: 20 }} />
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 25 }}>
                    <IconE name={'exclamation'} size={25} color={colors.white} style={{ marginLeft: 20 }} />
                    <View style={{padding:20}}>
                        <Text style={{color:colors.white}}>
                            Each Nothing ringtone has a unique Glyph pattern. Pair ringtones to individual contacts to know who's calling, even on silent mode.
                        </Text>
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
        height: Dimensions.get('screen').height

    },
    glyphTxt: {
        fontSize: 26,
        color: colors.white
    },
});