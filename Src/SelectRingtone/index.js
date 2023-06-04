import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import colors from '../../colors';
import IconI from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

export default function SelectRingtone() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.goBack()}>
                <IconI name={'arrow-back'} size={25} color={colors.white} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
            <View style={{ marginTop: 40, marginLeft: 15 }}>
                <Text style={styles.glyphTxt}> SELECT RINGTONE</Text>
            </View>
            <View style={{ marginTop: 30, marginLeft: 20 }}>
                <Text style={{ color: colors.white, fontSize: 14 }}>Set a custom ringtone for Abra</Text>
            </View>
            <View style={{ backgroundColor: colors.lightblack, width: '95%', borderRadius: 15, display: 'flex', alignSelf: 'center',marginTop:15 ,padding:10}}>
                <View style={{ display: 'flex', flexDirection: 'row', width: '45%', justifyContent: 'space-between' }}>
                    <View style={{ display: 'flex', alignSelf: 'center' }}>
                        <IconI name={'musical-note'} size={20} color={colors.white} style={{ marginLeft: 10 }} />
                    </View>
                    <TouchableOpacity style={{ marginLeft: 20, marginTop: 5 }} onPress={() => navigation.navigate("selectRingtone")}>
                        <Text style={{ color: colors.white, fontSize: 20 }}>Squirrels</Text>
                        <Text style={{ color: colors.OffWhite, fontSize: 16 }}>currently selected</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 30, marginLeft: 20 }}>
                <Text style={{ color: colors.white, fontSize: 14 }}>Sound library</Text>
            </View>
            <View style={{ backgroundColor: colors.lightblack, width: '95%', borderRadius: 15, display: 'flex', alignSelf: 'center',marginTop:10 ,padding:10}}>
                <View style={{ display: 'flex', flexDirection: 'column', width: '65%', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ marginLeft: 20, marginTop: 5 }} onPress={() => navigation.navigate("selectRingtone")}>
                        <Text style={{ color: colors.white, fontSize: 20 }}>Nothing Machines (1)</Text>
                        <Text style={{ color: colors.OffWhite, fontSize: 16 }}>10 sounds</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', width: '65%', justifyContent: 'space-between',marginTop:14}}>
                    <TouchableOpacity style={{ marginLeft: 20, marginTop: 5 }} onPress={() => navigation.navigate("selectRingtone")}>
                        <Text style={{ color: colors.white, fontSize: 20 }}>Nothing Machines (2)</Text>
                        <Text style={{ color: colors.OffWhite, fontSize: 16 }}>11 sounds</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', width: '65%', justifyContent: 'space-between',marginTop:14}}>
                    <TouchableOpacity style={{ marginLeft: 20, marginTop: 5 }} onPress={() => navigation.navigate("selectRingtone")}>
                        <Text style={{ color: colors.white, fontSize: 20 }}>My sounds</Text>
                        <Text style={{ color: colors.OffWhite, fontSize: 16 }}>Add your own sounds</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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