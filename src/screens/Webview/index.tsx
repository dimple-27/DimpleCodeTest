import React, {useEffect, useRef, useState} from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';

import {useDispatch, useSelector} from 'react-redux';
import {WebView} from 'react-native-webview';

export default function Webview() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {params} = useRoute();
  const {link} = params;

  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: link,
        }}
      />
    </View>
  );
}
