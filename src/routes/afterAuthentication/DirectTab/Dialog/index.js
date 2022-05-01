import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {colors} from '../../../../assets/colors';
import {Message} from './Message';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const w = Dimensions.get('window').width;

const messages = [
  {
    id: '12',
    typeOfUser: 1,
    time: new Date(),
    text: 'Different things not the same thing all the time.',
    status: 0,
  },
  {
    id: '11',
    typeOfUser: 0,
    time: new Date(),
    text: 'Whats "variety?',
    status: 0,
  },
  {
    id: '10',
    typeOfUser: 1,
    time: new Date(),
    text: 'Because you need variety.',
    status: 0,
  },
  {
    id: '9',
    typeOfUser: 1,
    time: new Date(),
    text: 'So why cant I have pizza for dinner?',
    status: 0,
  },
  {
    id: '8',
    typeOfUser: 1,
    time: new Date(),
    text: 'Everybody loves pizza.',
    status: 0,
  },
  {
    id: '7',
    typeOfUser: 0,
    time: new Date(),
    text: 'But I love pizza.',
    status: 0,
  },
  {
    id: '6',
    typeOfUser: 1,
    time: new Date(),
    text: 'You had pizza for lunch.',
    status: 0,
  },
  {
    id: '5',
    typeOfUser: 0,
    time: new Date(),
    text: 'How about a pizza?',
    status: 0,
  },
  {
    id: '4',
    typeOfUser: 1,
    time: new Date(),
    text: 'I am not sure',
    status: 0,
  },
  {
    id: '3',
    typeOfUser: 0,
    time: new Date(),
    text: 'Whats for dinner?',
    status: 0,
  },
  {
    id: '2',
    typeOfUser: 1,
    time: new Date(),
    text: 'Hello!',
    status: 0,
  },
  {
    id: '1',
    typeOfUser: 0,
    time: new Date(),
    text: 'Hi!',
    status: 0,
  },
];

export const Dialog = () => {
  const renderItem = ({item}) => <Message item={item} />;

  return (
    <View style={styles.background}>
      <FlatList
        style={styles.chat}
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        inverted={true}
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
    </View>
  );
};

export default Dialog;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
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
