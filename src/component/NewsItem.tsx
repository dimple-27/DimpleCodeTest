import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  Text,
  ViewStyle,
  Image,
  Dimensions,
} from 'react-native';
import Images from '../utils/Images';
import {timeConvert} from '../utils/Functions';

interface Props extends TextInputProps {
  onPress?: () => void;
  data: object;
}

const NewsItem: React.FC<Props> = props => {
  const {onPress, data} = props;

  return (
    <View>
      <TouchableOpacity
        style={styles.cardContainer}
        activeOpacity={1}
        onPress={onPress}>
        <Image
          source={{
            uri: data?.urlToImage
              ? data.urlToImage
              : Images.default,
          }}
          style={styles.imageContainer}
        />
        <Text style={styles.textTitle} numberOfLines={2}>
          {data?.title}
        </Text>
        <Text style={styles.textDec}>
          {data?.description?.length < 80
            ? `${data?.description}`
            : `${data?.description?.substring(0, 80)}...`}
        </Text>
        <Text style={styles.textDate}>
          {timeConvert(data?.publishedAt,"DD MMM, YYYY")}
        </Text>
        <Text style={styles.textAuther}>{data?.author?"By - "+data?.author:""}</Text>

      </TouchableOpacity>
      <View style={{backgroundColor: 'lightgray', height: 2, width: Dimensions.get("window").width}} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 15,
  },
  imageContainer: {borderRadius: 15, width: '100%', height: 200},
  textTitle: {
    color: 'black',
    fontSize: 20,
    marginTop: 10,
  },
  textDec: {
    color: 'gray',
    fontSize: 14,
    marginTop: 5,
  },
  textDate: {
    color: 'gray',
    fontSize: 12,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  textAuther: {
    color: 'red',
    fontSize: 16,
    marginTop: 5,
    marginLeft:"40%",
    alignSelf:'flex-end',
    fontStyle:'italic'
  },
});

export default NewsItem;
