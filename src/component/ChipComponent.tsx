import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  Text,
  ViewStyle,
} from 'react-native';
import {Chip} from 'react-native-paper';

interface Props extends TextInputProps {
  onPress?: () => void;
  selected: boolean;
  chipStyle: ViewStyle;
  textStyle: ViewStyle;
  name: string;
}

const ChipComponent: React.FC<Props> = props => {
  const {selected, onPress, chipStyle, textStyle, name} = props;

  return (
    <View>
    <Chip
      style={[
        styles.chip,
        textStyle,
        textStyle,
        {backgroundColor: selected ? 'black' : 'lightgray'},
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.chipText,
          textStyle,
          {color: selected ? 'white' : 'black'},
        ]}>
        {name}
      </Text>
    </Chip>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    margin: 4,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  chipText: {
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
});

export default ChipComponent;
