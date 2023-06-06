import React, { useState, useRef } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, Image, Dimensions, Button, ScrollView, FlatList } from 'react-native';
import colors from '../colors';
import { bluetooth, data, ht, bt } from '../assets/index';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);


export default function UpperSheetCarousel() {
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);
    const data = [
        {
            id: 0,
            name: 'gpay',
            img: require('../assets/Icons/stack.png'),
            appIcons: [
                {
                    id: 1,
                    name: 'Hotspot',
                    txt: "Off",
                    image: require('../assets/Icons/ht.png'),
                },
                {
                    id: 2,
                    name: 'Battery Saver',
                    txt: "Off",
                    image: require('../assets/Icons/podcast.png'),
                },
                {
                    id: 3,
                    name: 'Torch',
                    txt: "Off",
                    image: require('../assets/Icons/torch.png'),
                },
                {
                    id: 4,
                    name: 'Wallet',
                    txt: "Unavailable",
                    image: require('../assets/Icons/ola.png'),
                },
                {
                    id: 5,
                    name: 'econtrols',
                    image: require('../assets/Icons/1mg.png'),
                },
                {
                    id: 6,
                    name: 'Glyphs',
                    txt: "On",
                    image: require('../assets/Icons/uber.png'),
                },

            ]
        },
        {
            id: 1,
            name: 'Slack',
            img: require('../assets/Icons/stack.png'),
            appIcons: [
                {
                    id: 1,
                    name: 'Slack',
                    image: require('../assets/Icons/stack.png'),
                },
                {
                    id: 2,
                    name: 'twitter',
                    image: require('../assets/Icons/twitter.png'),
                },
                {
                    id: 3,
                    name: 'KUKU FM',
                    image: require('../assets/Icons/kukufm.png'),
                },
                {
                    id: 4,
                    name: 'Sporthood',
                    image: require('../assets/Icons/sporthood.png'),
                },
                {
                    id: 5,
                    name: 'MFine',
                    image: require('../assets/Icons/mfine.png'),
                },
                {
                    id: 6,
                    name: 'Adobe Scan',
                    image: require('../assets/Icons/adobescan.png'),
                },

            ]
        },
        {
            id: 2,
            name: 'JavaScript',
            url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
            appIcons: [
                {
                    id: 1,
                    name: 'Myntra',
                    image: require('../assets/Icons/myntra.png'),
                },
                {
                    id: 2,
                    name: 'Ola',
                    image: require('../assets/Icons/ola.png'),
                },
                {
                    id: 3,
                    name: 'Slack',
                    image: require('../assets/Icons/stack.png'),
                },
                {
                    id: 4,
                    name: 'Twitter',
                    image: require('../assets/Icons/twitter.png'),
                },
                {
                    id: 5,
                    name: 'JioSaavn',
                    image: require('../assets/Icons/jiosavan.png'),
                },
                {
                    id: 6,
                    name: 'Plugo',
                    image: require('../assets/Icons/plugo.png'),
                },

            ]
        },

    ];
    const renderItem = ({ item }) => {
        return (
            <View
                style={{}}>

                <FlatList
                    style={{}}
                    data={item?.appIcons}
                    renderItem={(item) =>
                        <View style={{ display: "flex", flexDirection: 'row', margin: 5, height: '100%' }}>
                            <View style={styles.HotspotContainer}>

                                <View style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Image source={item?.item?.image} style={styles.htImg} />
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'column' }}>
                                    <View style={styles.BluetoothTxt}>
                                        <Text style={styles.Bluetooth}>{item?.item?.name}</Text>

                                    </View>
                                    <View style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                        <Text style={styles.txt}>{item?.item?.txt}</Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                    }
                    numColumns={2}
                    keyExtractor={item => item.id}
                />

            </View>
        );
    };
    return (
        <View style={styles.container}>
            <Carousel
                //  layout="tinder"
                //  layoutCardOffset={9}
                ref={isCarousel}
                data={data}
                renderItem={renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={index => setIndex(index)}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    // marginHorizontal: 0,
                    marginTop: -10,
                    backgroundColor: '#fff',
                }}

                tappableDots={true}
                inactiveDotStyle={{
                    backgroundColor: colors.inactiveDot,
                    width: 15,
                    height: 15,
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.9}
                inactiveDotScale={0.6}

            />
            <View style={{ position: 'absolute', bottom: 50, right: 30 }}>
                <Octicons name={'pencil'} size={16} color={colors.white} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                <View>
                    <EvilIcons name={'exclamation'} size={20} color={colors.white} style={{ marginLeft: 10 }} />
                </View>
                <View style={{ width: '40%' }}>
                    <Text style={styles.active}>2 apps are active</Text>
                </View>
                <View>
                    <EvilIcons name={'chevron-right'} size={25} color={colors.white} style={{ marginLeft: 10 }} />
                </View>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end', width: '30%' }}>
                    <View>
                        <Ionicons name={'settings-outline'} size={20} color={colors.white} style={{ marginLeft: 10 }} />
                    </View>
                    <View style={{marginLeft:10}}>
                        <Ionicons name={'power'} size={20} color={colors.white} style={{ marginLeft: 10 }} />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        // height: Dimensions.get('screen').width

    },
    htImg: {
        height: Dimensions.get("screen").width - 370,
        width: Dimensions.get("screen").width - 370,
        resizeMode: 'contain'
    },
    Bluetooth: {
        display: 'flex',
        alignSelf: 'center',
        color: colors.white,
        fontSize: 16,
        fontWeight: '700',
    },
    txt: {
        display: 'flex',
        alignSelf: 'center',
        color: colors.white,
        fontSize: 14,
        width: '90%'

    },
    active: {
        display: 'flex',
        alignSelf: 'center',
        color: colors.white,
        fontSize: 16,
        width: '90%'

    },
    HotspotContainer: {
        // marginTop: 25,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.Darkgrey,
        borderRadius: 50,
        padding: 20,
        width: Dimensions.get("screen").width - 210,
        height: Dimensions.get("screen").width - 310,

    },
    BluetoothTxt: {
        display: 'flex',
        flexWrap: 'wrap',
        width: Dimensions.get("screen").width - 200,
        alignSelf: 'center',
        paddingLeft: 10,

    },
});