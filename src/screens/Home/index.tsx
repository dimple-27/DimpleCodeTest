import React, {useEffect, useRef, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import styles from './styles';
import ChipComponent from '../../component/ChipComponent';

import {useDispatch, useSelector} from 'react-redux';
import {sagaActions} from '../../saga/sagaActions';
import Strings from '../../utils/Strings';
import NewsItem from '../../component/NewsItem';
import {Screens} from '../../utils/Constants';
import {Searchbar} from 'react-native-paper';
import Images from '../../utils/Images';

export default function Home() {
  const [data, setData] = useState(Strings.topArray);
  const news = useSelector(state => state.news.news);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState('');

  const [selectedCategory, setSelectedCategory] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  useEffect(() => {
    dispatch({
      type: sagaActions.FETCH_DATA_SAGA,
      data: {
        query: 'q=' + searchQuery,
        category: 'category=' + selectedCategory,
      },
    });
  }, [searchQuery]);

  const selection = i => {
    dispatch({
      type: sagaActions.FETCH_DATA_SAGA,
      data: {query: 'q=' + searchQuery, category: 'category=' + data[i].name},
    });
    setSelectedCategory(data[i].name);
    var array = [...data];
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (index === i) {
        array[index].selected = !array[index].selected;
      } else {
        array[index].selected = false;
      }
    }
    setData(array);
  };

  const renderItem = ({item, index}) => (
    <ChipComponent
      chipStyle={styles.chip}
      textStyle={styles.chipText}
      name={item.name}
      selected={item.selected}
      onPress={() => selection(index)}
    />
  );
  const renderItemNews = ({item, index}) => (
    <NewsItem
      onPress={() => navigation.navigate(Screens.Detail, {data: item})}
      data={item}
    />
  );
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        style={{marginHorizontal: 10}}
        onChangeText={onChangeSearch}
        value={searchQuery}
        selectionColor={'black'}
        icon={Images.search}
        clearIcon={Images.close}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.marginTop}
        bounces={false}
        data={data}
        renderItem={renderItem}
      />
      <FlatList
        style={[styles.marginTop, {alignSelf: 'flex-start'}]}
        contentContainerStyle={{alignItems: 'flex-start'}}
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={news}
        renderItem={renderItemNews}
      />
    </View>
  );
}
