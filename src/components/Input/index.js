import React from 'react';
import {StyleSheet, Dimensions, TextInput, View, Image} from 'react-native';

import TextBlock from '../TextBlock';

const w = Dimensions.get('window').width;

import {icons} from '../../assets/icons';
import {colors} from '../../assets/colors';

export const Input = ({
  placeholder,
  value,
  onChange,
  keyboardType = 'default',
  error = '',
  isShowIcon = false,
  isShowLabel = false,
  label = '',
  onFocus,
  onBlur,
  width = w * 0.8,
}) => {
  const getStylesOfPosition = () => {
    return isShowIcon ? styles.positionRelative : {};
  };

  const getStylesOfPaddingLeft = () => {
    return {paddingLeft: isShowIcon ? w * 0.1 : w * 0.05};
  };

  return (
    <>
      {isShowLabel && (
        <View style={styles.label}>
          <TextBlock text={label} size={5} bold />
        </View>
      )}
      {error !== '' && (
        <View style={styles.errorMessage}>
          <TextBlock text={error} size={6} red italic />
        </View>
      )}

      <View style={getStylesOfPosition()}>
        <TextInput
          style={[styles.input, {width}, getStylesOfPaddingLeft()]}
          returnKeyType={'done'}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
          value={value}
          onChangeText={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          blurOnSubmit
        />
        {isShowIcon && (
          <Image source={icons.search} style={styles.toRightIcon} />
        )}
      </View>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    fontSize: w * 0.045,
    color: colors.deepBlue,
    paddingRight: w * 0.05,
    paddingTop: w * 0.04,
    paddingBottom: w * 0.04,
    borderRadius: w * 0.02,
    borderWidth: 1,
    borderColor: colors.deepBlue,
  },
  positionRelative: {
    position: 'relative',
    justifyContent: 'center',
  },
  toRightIcon: {
    position: 'absolute',
    width: w * 0.06,
    height: w * 0.06,
    marginLeft: w * 0.03,
  },
  label: {
    marginBottom: w * 0.03,
    marginLeft: w * 0.01,
  },
  errorMessage: {
    marginBottom: w * 0.03,
    marginLeft: w * 0.01,
  },
});
