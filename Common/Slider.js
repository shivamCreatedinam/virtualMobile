import React, { useState, useRef } from 'react';
import { Text, View, Dimensions, Image, FlatList } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import colors from '../colors';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const data = [
  {
    id: 0,
    name: 'gpay',
    img: require('../assets/Icons/stack.png'),
    appIcons: [
      {
        id: 1,
        name: 'GPay',
        image: require('../assets/Icons/Gpay.png'),
      },
      {
        id: 2,
        name: 'Podcasts',
        image: require('../assets/Icons/podcast.png'),
      },
      {
        id: 3,
        name: 'Myntra',
        image: require('../assets/Icons/myntra.png'),
      },
      {
        id: 4,
        name: 'Ola',
        image: require('../assets/Icons/ola.png'),
      },
      {
        id: 5,
        name: 'Tata 1mg',
        image: require('../assets/Icons/1mg.png'),
      },
      {
        id: 6,
        name: 'Uber',
        image: require('../assets/Icons/uber.png'),
      },
      {
        id: 7,
        name: 'JioSavvn',
        image: require('../assets/Icons/jiosavan.png'),
      },
      {
        id: 8,
        name: 'PlugO',
        image: require('../assets/Icons/plugo.png'),
      },
      {
        id: 9,
        name: 'Lens',
        image: require('../assets/Icons/lence.png'),
      },
      {
        id: 10,
        name: 'PhonePe',
        image: require('../assets/Icons/phonepay.png'),
      },
      {
        id: 11,
        name: 'IntrCity Bus',
        image: require('../assets/Icons/intercity.png'),
      },
      {
        id: 12,
        name: 'Revv',
        image: require('../assets/Icons/navi.png'),
      },
      {
        id: 13,
        name: 'SC Mobile',
        image: require('../assets/Icons/scmobile.png'),
      },
      {
        id: 14,
        name: 'Calculator',
        image: require('../assets/Icons/calc.png'),
      },
    
      {
        id: 16,
        name: 'MX Player',
        image: require('../assets/Icons/mxpalyer.png'),
      },
      {
        id: 17,
        name: 'redBus',
        image: require('../assets/Icons/redbus.png'),
      },
      {
        id: 18,
        name: 'INDmoney',
        image: require('../assets/Icons/indmoney.png'),
      },
      {
        id: 19,
        name: 'devRant',
        image: require('../assets/Icons/devrant.png'),
      },
      {
        id: 20,
        name: 'Google',
        image: require('../assets/Icons/google.png'),
      },
      {
        id: 15,
        name: 'Zomato',
        image: require('../assets/Icons/zomato.png'),
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
      {
        id: 7,
        name: 'Paytm',
        image: require('../assets/Icons/paytm.png'),
      },
      {
        id: 8,
        name: 'Discord',
        image: require('../assets/Icons/discord.png'),
      },
      {
        id: 9,
        name: 'JioMart',
        image: require('../assets/Icons/joimart.png'),
      },
      {
        id: 10,
        name: 'Zoom',
        image: require('../assets/Icons/zoom.png'),
      },
      {
        id: 11,
        name: 'Forem',
        image: require('../assets/Icons/forem.png'),
      },
      {
        id: 12,
        name: 'Navi',
        image: require('../assets/Icons/navi.png'),
      },
      {
        id: 13,
        name: 'Dunzo Mo',
        image: require('../assets/Icons/dunzomo.png'),
      },
      {
        id: 14,
        name: 'UMANG',
        image: require('../assets/Icons/umang.png'),
      },
      {
        id: 15,
        name: 'Rapido',
        image: require('../assets/Icons/rapido.png'),
      },
      {
        id: 16,
        name: 'LXG',
        image: require('../assets/Icons/lxg.png'),
      },
      {
        id: 17,
        name: 'Lens',
        image: require('../assets/Icons/lense.png'),
      },
      {
        id: 18,
        name: '12% Club',
        image: require('../assets/Icons/12.png'),
      },
      {
        id: 19,
        name: 'RentoMojo',
        image: require('../assets/Icons/rentmojo.png'),
      },
      {
        id: 20,
        name: 'Splitwise',
        image: require('../assets/Icons/splitwise.png'),
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
      {
        id: 7,
        name: 'MFine',
        image: require('../assets/Icons/mfine.png'),
      },
      {
        id: 8,
        name: 'Adobe Scan',
        image: require('../assets/Icons/adobescan.png'),
      },
      {
        id: 9,
        name: 'IntrCity Bus',
        image: require('../assets/Icons/intercity.png'),
      },
      {
        id: 10,
        name: 'Revv',
        image: require('../assets/Icons/zoom.png'),
      },
      {
        id: 11,
        name: 'JioMart',
        image: require('../assets/Icons/joimart.png'),
      },
      {
        id: 12,
        name: 'Zoom',
        image: require('../assets/Icons/zoom.png'),
      },
      {
        id: 13,
        name: 'MX Player',
        image: require('../assets/Icons/mxpalyer.png'),
      },
      {
        id: 14,
        name: 'redBus',
        image: require('../assets/Icons/redbus.png'),
      },
      {
        id: 13,
        name: 'Dunzo Mo',
        image: require('../assets/Icons/dunzomo.png'),
      },
      {
        id: 16,
        name: 'UMANG',
        image: require('../assets/Icons/umang.png'),
      },
  
      {
        id: 18,
        name: 'Google',
        image: require('../assets/Icons/google.png'),
      },
      {
        id: 19,
        name: 'Zomato',
        image: require('../assets/Icons/zomato.png'),
      },
      {
        id: 17,
        name: 'Lens',
        image: require('../assets/Icons/lense.png'),
      },
      {
        id: 18,
        name: '12% Club',
        image: require('../assets/Icons/12.png'),
      },
    ]
  },
  {
    id: 3,
    name: 'Node JS',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png',
    appIcons: [
      {
        id: 1,
        name: 'Play Games',
        image: require('../assets/Icons/playgames.png'),
      },
      {
        id: 2,
        name: 'MakeMytrip',
        image: require('../assets/Icons/mmt.png'),
      },
      {
        id: 3,
        name: 'Telegram',
        image: require('../assets/Icons/telgram.png'),
      },
      {
        id: 4,
        name: 'CRED',
        image: require('../assets/Icons/cred.png'),
      },
      {
        id: 5,
        name: 'WazirX',
        image: require('../assets/Icons/wazirx.png'),
      },
      {
        id: 6,
        name: 'Facebook',
        image: require('../assets/Icons/fb.png'),
      },
      {
        id: 7,
        name: 'Xiaomi Home',
        image: require('../assets/Icons/xaomi.png'),
      },
      {
        id: 8,
        name: 'Swiggy',
        image: require('../assets/Icons/swigy.png'),
      },
      {
        id: 9,
        name: 'Truecaller',
        image: require('../assets/Icons/truecaller.png'),
      },
      {
        id: 10,
        name: 'Airbnb',
        image: require('../assets/Icons/airbnb.png'),
      },
      {
        id: 11,
        name: 'NoBroker',
        image: require('../assets/Icons/nobroker.png'),
      },
      {
        id: 12,
        name: 'Hotstar',
        image: require('../assets/Icons/ht.png'),
      },
      {
        id: 13,
        name: 'Nestaway',
        image: require('../assets/Icons/mxpalyer.png'),
      },
      {
        id: 14,
        name: 'Assistant',
        image: require('../assets/Icons/redbus.png'),
      },
      {
        id: 13,
        name: 'My Spectra',
        image: require('../assets/Icons/dunzomo.png'),
      },
      {
        id: 16,
        name: 'LaundroKart',
        image: require('../assets/Icons/umang.png'),
      },
  
      {
        id: 18,
        name: 'Translate',
        image: require('../assets/Icons/google.png'),
      },
      {
        id: 19,
        name: 'Simpl',
        image: require('../assets/Icons/simply.png'),
      },
      {
        id: 17,
        name: 'LazyPay',
        image: require('../assets/Icons/lense.png'),
      },
      {
        id: 18,
        name: 'Instagram',
        image: require('../assets/Icons/instagram.png'),
      },
    ]
  },
];

const renderItem = ({ item }) => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>

      <FlatList
        style={{
          width: Dimensions.get("screen").width - 50, height: "100%",marginTop:8
        }}
        data={item?.appIcons}
        renderItem={(item) =>
          // console.log("inside",item?.item?.name)
          <View style={{ flex: 1, padding: 5, margin: 10 }}>

            <Image source={item?.item?.image} style={{ width: 58, height: 58, resizeMode: 'cover', backgroundColor: '#fff', borderRadius: 100 }} />
            <View style={{marginTop:10}}>
              <Text style={{ fontSize: 10,fontWeight:'700' ,color: colors.black, alignSelf: 'center' }}>
                {item?.item?.name}
              </Text>
            </View>
          </View>
        }
        numColumns={4}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const Slider = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View style={{ marginVertical: 10 }}>
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
          marginHorizontal: 8,
          backgroundColor: '#F4BB41',
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'black',
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default Slider;