import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../../../assets/colors';

const w = Dimensions.get('window').width;

export const Message = ({item}) => {
  //   const {typeOfUser, time, text, status} = item;
  const {typeOfUser, text} = item;

  const getMessagePosition = () => {
    return {alignItems: typeOfUser === 1 ? 'flex-end' : 'flex-start'};
  };

  const getTextStyle = () => {
    return {
      paddingLeft: w * 0.01,
      paddingRight: w * 0.01,
      paddingTop: w * 0.02,
      paddingBottom: w * 0.02,
      textAlign: typeOfUser === 1 ? 'right' : 'left',
      color: typeOfUser === 1 ? colors.deepBlue : colors.white,
    };
  };

  const getMessageItemStyle = () => {
    return {
      borderRadius: w * 0.02,
      paddingLeft: w * 0.01,
      paddingRight: w * 0.01,
      backgroundColor: typeOfUser === 1 ? colors.pink : colors.lightBlue,
    };
  };

  return (
    <View style={[styles.item, getMessagePosition()]}>
      <View style={getMessageItemStyle()}>
        <Text style={[getTextStyle()]}>{text}</Text>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  item: {
    marginBottom: w * 0.05,
  },
});
