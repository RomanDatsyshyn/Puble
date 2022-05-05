import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  TextInput,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {TypingAnimation} from 'react-native-typing-animation';

import {colors} from '../../../../assets/colors';
import {Message} from './Message';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const w = Dimensions.get('window').width;

const messages = [
  {
    id: '12',
    typeOfUser: 1,
    time: new Date(2022, 6, 8),
    text: 'Different things not the same thing all the time .',
    status: 0,
    isDelivered: true,
  },
  {
    id: '11',
    typeOfUser: 0,
    time: new Date(2022, 6, 8),
    text: 'Whats "variety?',
    status: 0,
    isDelivered: true,
  },
  {
    id: '10',
    typeOfUser: 1,
    time: new Date(2022, 6, 7),
    text: 'Because you need variety.',
    status: 0,
    isDelivered: true,
  },
  {
    id: '9',
    typeOfUser: 1,
    time: new Date(2022, 6, 7),
    text: 'So why cant I have pizza for dinner?',
    status: 1,
    isDelivered: true,
  },
  {
    id: '8',
    typeOfUser: 1,
    time: new Date(2022, 6, 6),
    text: 'Everybody loves pizza.',
    status: 1,
    isDelivered: true,
  },
  {
    id: '7',
    typeOfUser: 0,
    time: new Date(2022, 6, 5),
    text: 'But I love pizza.',
    status: 1,
    isDelivered: true,
  },
  {
    id: '6',
    typeOfUser: 1,
    time: new Date(2022, 6, 4),
    text: 'You had pizza for lunch.',
    status: 1,
    isDelivered: true,
  },
  {
    id: '5',
    typeOfUser: 0,
    time: new Date(2022, 6, 4),
    text: 'How about a pizza?',
    status: 1,
    isDelivered: true,
  },
  {
    id: '4',
    typeOfUser: 1,
    time: new Date(2022, 6, 4),
    text: 'I am not sure',
    status: 1,
    isDelivered: true,
  },
  {
    id: '3',
    typeOfUser: 0,
    time: new Date(2022, 6, 4),
    text: 'Whats for dinner?',
    status: 1,
    isDelivered: true,
  },
  {
    id: '2',
    typeOfUser: 1,
    time: new Date(2022, 6, 4),
    text: 'Hello!',
    status: 1,
    isDelivered: true,
  },
  {
    id: '1',
    typeOfUser: 0,
    time: new Date(2022, 6, 4),
    text: 'Hi!',
    status: 1,
    isDelivered: true,
  },
  {
    id: '0',
    typeOfUser: 0,
    time: new Date(2022, 6, 4),
    text: '.',
    status: 1,
    isDelivered: true,
  },
];

export const Dialog = () => {
  const [data, setData] = useState([]);

  const getNameOfTheMonth = month => {
    switch (month) {
      case 1:
        return 'Січня';
      case 2:
        return 'Лютого';
      case 3:
        return 'Березня';
      case 4:
        return 'Квітня';
      case 5:
        return 'Травня';
      case 6:
        return 'Червня';
      case 7:
        return 'Липня';
      case 8:
        return 'Серпня';
      case 9:
        return 'Вересня';
      case 10:
        return 'Жовтня';
      case 11:
        return 'Листопада';
      case 12:
        return 'Грудня';
    }
  };

  useEffect(() => {
    if (messages.length) {
      let arr = [...messages];
      let date = messages[0].time;

      for (let i = 0; i < arr.length - 1; i++) {
        let d1 = new Date(date);
        let d2 = new Date(arr[i].time);

        var month1 = d1.getUTCMonth() + 1;
        var day1 = d1.getUTCDate();
        var year1 = d1.getUTCFullYear();

        var month2 = d2.getUTCMonth() + 1;
        var day2 = d2.getUTCDate();
        var year2 = d2.getUTCFullYear();

        if (day1 !== day2) {
          date = d2;
          arr[i].currentDate = `${day2} ${getNameOfTheMonth(month2)}`;
        }
      }

      setData(arr);
    }
  }, []);

  const renderItem = ({item}) => <Message item={item} />;

  return (
    <>
      <View style={styles.header}>
        <SafeAreaView style={styles.headerContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            <FontAwesomeIcon
              icon={Icons.faChevronLeft}
              size={w * 0.05}
              style={{color: colors.deepBlue}}
            />
          </TouchableOpacity>

          <View style={styles.row}>
            <Text style={styles.name}>Roman Datsyshyn</Text>
            {/* <Text style={styles.status}>набирає повідомлення</Text> */}
            <Text style={styles.status}>онлайн</Text>
            {/* <Text style={styles.status}>був тут в 14:27</Text> */}
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <FontAwesomeIcon
              icon={Icons.faEllipsisVertical}
              size={w * 0.05}
              style={{color: colors.deepBlue}}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
      <SafeAreaView style={styles.background}>
        <FlatList
          style={styles.chat}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          inverted={true}
          ListHeaderComponent={
            <TypingAnimation
              dotColor={colors.lightBlue}
              dotRadius={6.5}
              dotX={w * 0.07}
              dotMargin={13}
            />
          }
          ListHeaderComponentStyle={styles.typing}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            returnKeyType={'done'}
            keyboardType={'default'}
            placeholder={'Send message'}
            placeholderTextColor={colors.grey}
            multiline={true}
            // value={value}
            // onChangeText={onChange}
            // onFocus={onFocus}
            // onBlur={onBlur}
            // blurOnSubmit
          />
          <TouchableOpacity activeOpacity={0.7} style={styles.icon}>
            <FontAwesomeIcon
              icon={Icons.faPaperPlane}
              size={w * 0.08}
              style={{color: colors.white}}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Dialog;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  header: {
    width: w,
    backgroundColor: colors.pink,
    height: w * 0.25,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
    height: w * 0.13,
  },
  row: {
    alignItems: 'center',
  },
  name: {
    color: colors.deepBlue,
    marginRight: w * 0.02,
    fontSize: w * 0.04,
  },
  status: {
    color: colors.differentGrey,
    marginRight: w * 0.02,
    fontSize: w * 0.035,
  },
  chat: {
    width: w * 0.95,
  },
  input: {
    width: w * 0.95,
    fontSize: w * 0.045,
    color: colors.deepBlue,
    paddingRight: w * 0.14,
    paddingTop: w * 0.03,
    paddingLeft: w * 0.03,
    paddingBottom: w * 0.03,
    borderRadius: w * 0.02,
    borderWidth: 1,
    borderColor: colors.deepBlue,
  },
  inputContainer: {
    position: 'relative',
    marginBottom: w * 0.02,
    justifyContent: 'center',
  },
  typing: {
    alignSelf: 'flex-start',
    height: w * 0.1,
  },
  icon: {
    position: 'absolute',
    right: 1,
    height: '100%',
    justifyContent: 'center',
    paddingLeft: w * 0.02,
    paddingRight: w * 0.02,
    borderTopRightRadius: w * 0.02,
    borderBottomRightRadius: w * 0.02,
    backgroundColor: colors.lightBlue,
  },
});
