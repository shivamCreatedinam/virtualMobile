import React, { useRef } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, Image, Dimensions, Button, TouchableOpacity } from 'react-native';
import IconF from 'react-native-vector-icons/Feather';
import IconI from 'react-native-vector-icons/Ionicons';
import colors from '../../colors';
import { bacakgroundImage, google, camera, chrome, mic, lenses } from '../../assets/index'
import Slider from '../../Common/Slider';
import RBSheet from "react-native-raw-bottom-sheet";
import { useNavigation } from '@react-navigation/native';
import { Directions, GestureHandlerRootView, FlingGestureHandler, State } from 'react-native-gesture-handler';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function HomeScreen() {
    const refRBSheet = useRef();
    const navigation = useNavigation();

    const onFlingHandler = (event) => {
        // console.log('addEventListener', JSON.stringify(event.nativeEvent) + " --- " + State.END);
        if (event.nativeEvent.state === State.END) {
            const { absoluteX, absoluteY } = event.nativeEvent;
            // console.log('addEventListener', absoluteX + " --- " + absoluteY);
            if (Math.abs(absoluteX) > Math.abs(absoluteY)) {
                if (absoluteX > 0) {
                    // Handle right fling gesture
                    refRBSheet.current.open();
                    console.log('addEventListener', 'Handle right');
                } else {
                    // Handle left fling gesture
                    console.log('addEventListener', 'Handle left');
                }
            } else {
                if (absoluteY > 0) {
                    // Handle down fling gesture
                    console.log('addEventListener', 'Handle down');
                } else {
                    // Handle up fling gesture
                    refRBSheet.current.open();
                    console.log('addEventListener', 'Handle up');
                }
            }
        }
    };

    return (

        <GestureHandlerRootView style={{ flex: 1 }}>
            <FlingGestureHandler
                direction={Directions.UP | Directions.DOWN}
                onHandlerStateChange={onFlingHandler}>

                <View style={styles.container}>

                    <ImageBackground source={bacakgroundImage} style={styles.Imagecontainer}>
                        <View style={styles.bottomIcons}>
                            <TouchableOpacity onPress={() => navigation.navigate("upper")}>
                                <Image source={chrome} style={styles.cameraIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("setting")}>
                                <Image source={chrome} style={styles.cameraIcon} />
                            </TouchableOpacity>
                            <View>
                                <Image source={chrome} style={styles.cameraIcon} />
                            </View>

                            <View>
                                <Image source={camera} style={styles.cameraIcon} />
                            </View>
                        </View>
                        <View>
                            <Slider />
                        </View>
                        <View style={styles.inputContainer}>
                            <View>
                                <TextInput style={styles.input} />
                            </View>

                            <View style={{ position: 'absolute', left: 33, top: 15 }}>
                                <Image source={google} style={styles.google} />
                            </View>
                            <View style={{ position: 'absolute', top: 13, right: 90 }}>
                                <Image source={mic} style={styles.mic} />
                            </View>
                            <View style={{ position: 'absolute', top: 13, right: 45 }}>
                                <Image source={lenses} style={styles.mic} />
                            </View>
                        </View>
                        {/* <Button title="OPEN BOTTOM SHEET" onPress={() => } /> */}
                        <RBSheet
                            ref={refRBSheet}
                            closeOnDragDown={true}
                            closeOnPressMask={false}
                            customStyles={{
                                wrapper: {
                                    backgroundColor: "transparent"
                                },
                                draggableIcon: {
                                    backgroundColor: "#000"
                                }
                            }}
                        >
                            <Text>hi</Text>
                        </RBSheet>
                    </ImageBackground>
                </View>
            </FlingGestureHandler>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Imagecontainer: {
        flex: 1
    },
    bottomIcons: {
        position: 'absolute',
        bottom: 30,
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-around',
        alignSelf: 'center',
        zIndex: 1,
    },
    inputContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 110
    },
    input: {
        width: "90%",
        backgroundColor: colors.grey,
        borderRadius: 100,
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10

    },
    google: {
        width: Dimensions.get('screen').width - 370,
        height: Dimensions.get('screen').width - 370,
        resizeMode: 'contain'
    },
    mic: {
        width: Dimensions.get('screen').width - 370,
        height: Dimensions.get('screen').width - 370,
        resizeMode: 'contain'
    },
    cameraIcon: {
        width: Dimensions.get('screen').width - 330,
        height: Dimensions.get('screen').width - 330,
        resizeMode: 'contain'
    },
})