import React, {useEffect, useRef, useState} from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
import ChipComponent from '../../component/ChipComponent';

import {useDispatch, useSelector} from 'react-redux';
import Moment from 'moment';
import Images from '../../utils/Images';
import {Screens} from '../../utils/Constants';
import Strings from '../../utils/Strings';
import { timeConvert } from '../../utils/Functions';

export default function Detail() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {params} = useRoute();
  const {data} = params;
  const CustomTextLast = (message: string) => {
    const text = message?.split(' ');
    const newtext = text.slice(0, text.length - 2);

    return (
      <Text style={styles.textContent}>
        {newtext.map((name, index) => {
          if (index === newtext.length - 1) {
            return (
              <Text
                style={styles.textread}
                onPress={() =>
                  navigation.navigate(Screens.Webview, {link: data.url})
                }>
                Read more{' '}
              </Text>
            );
          }
          return `${name} `;
        })}
      </Text>
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          resizeMode="contain"
          source={Images.return}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <Text style={styles.textTitle}>{data.title}</Text>
      <Text style={styles.textDate}>
      {timeConvert(data?.publishedAt,"DD MMM, YYYY")}
      </Text>
      <Image
        resizeMode="contain"
        source={{
          uri: data?.urlToImage ? data.urlToImage : Images.default,
        }}
        style={styles.imageContainer}
      />
      <Text style={styles.textDec}>{data.description}</Text>
      <Text style={styles.textAuther}>
        {data?.author ? Strings.by + data?.author : ''}
      </Text>
      {CustomTextLast(data.content)}
    </View>
  );
}
