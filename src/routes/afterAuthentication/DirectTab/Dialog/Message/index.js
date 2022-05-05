import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../../../assets/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const w = Dimensions.get('window').width;

export const Message = ({item}) => {
  const {typeOfUser, text, time, status, id} = item;

  const getMessagePosition = () => {
    return {alignItems: typeOfUser === 1 ? 'flex-end' : 'flex-start'};
  };

  const getStatusOfTheMessage = () => {
    if (typeOfUser === 1 && status) {
      return (
        <FontAwesomeIcon
          icon={Icons.faCheck}
          size={w * 0.035}
          style={{
            color: colors.deepBlue,
            marginLeft: w * 0.01,
          }}
        />
      );
    }
  };

  const getDateFormat = () => {
    const date = new Date(time);
    const hoursAndMinutes = date.getHours() + ':' + date.getMinutes();

    return hoursAndMinutes;
  };

  const getTextStyle = () => {
    return {
      paddingLeft: w * 0.01,
      paddingRight: w * 0.01,
      paddingTop: w * 0.02,
      paddingBottom: w * 0.02,
      textAlign: 'center',
      color: typeOfUser === 1 ? colors.deepBlue : colors.white,
    };
  };

  const getMessageItemStyle = () => {
    return {
      minWidth: w * 0.1,
      borderRadius: w * 0.02,
      paddingLeft: w * 0.01,
      paddingRight: w * 0.01,
      backgroundColor: typeOfUser === 1 ? colors.pink : colors.lightBlue,
    };
  };

  const getStyleForRow = () => {
    return {
      flexDirection: 'row',
      position: 'absolute',
      right: w * 0.01,
      bottom: -w * 0.04,
    };
  };

  const getTimeColor = () => {
    return {
      color: colors.differentGrey,
      fontSize: w * 0.03,
    };
  };

  const getItemMargin = () => {
    if (id > 0) {
      return {
        marginBottom: w * 0.07,
      };
    } else {
      return {
        position: 'relative',
        marginTop: w * 0.05,
        marginBottom: w * 0.05,
      };
    }
  };

  const getLineWidth = () => {
    return {width: w * (0.45 - item.currentDate.length / 100)};
  };

  return (
    <>
      {item.currentDate && (
        <View style={styles.row}>
          <View style={[styles.line, getLineWidth()]} />
          <Text style={styles.date}>{item.currentDate}</Text>
          <View style={[styles.line, getLineWidth()]} />
        </View>
      )}
      <View style={[getItemMargin(), getMessagePosition()]}>
        <View style={getMessageItemStyle()}>
          <Text style={[getTextStyle()]}>{text}</Text>
          <View style={[getStyleForRow()]}>
            <Text style={getTimeColor()}>{getDateFormat()}</Text>
            {getStatusOfTheMessage()}
          </View>
        </View>
      </View>
    </>
  );
};

export default Message;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: w * 0.05,
    marginTop: w * 0.05,
    width: '100%',
    alignSelf: 'center',
  },
  line: {
    height: 1,
    backgroundColor: colors.grey,
    opacity: 0.3,
  },
  date: {
    fontSize: w * 0.033,
    color: colors.differentGrey,
  },
});
