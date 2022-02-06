import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {icons} from '../../../../assets/icons';
import Button from '../../../../components/Button';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CELL_COUNT = 4;
const CELL_SIZE = 70;
const CELL_BORDER_RADIUS = 8;
const DEFAULT_CELL_BG_COLOR = '#fff';
const NOT_EMPTY_CELL_BG_COLOR = '#27272f';
const ACTIVE_CELL_BG_COLOR = '#f7fafe';

const {Value, Text: AnimatedText} = Animated;

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));

const animateCell = ({hasValue, index, isFocused}) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

export default CodeRecoveryScreen = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({index, symbol, isFocused}) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    setTimeout(() => {
      animateCell({hasValue, index, isFocused});
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[stylesForCodeInput.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };
  return (
    <>
      <View style={styles.background}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgetPasswordScreen')}
          style={styles.backButton}>
          <Image source={icons.leftArrow} style={styles.backIcon} />
        </TouchableOpacity>

        <View>
          <View style={styles.labels}>
            <Text style={styles.title}>Введіть код</Text>
            <Text style={styles.title}>Віддновлення</Text>
            <Text style={styles.subTitle}>На ваш Email було</Text>
            <Text style={styles.subTitle}>надіслано код</Text>
          </View>

          <View style={styles.mb15}></View>

          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={stylesForCodeInput.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={renderCell}
          />

          <View style={stylesForCodeInput.nextButton}>
            <Button
              label={'Підтвердити'}
              route={'NewPasswordScreen'}
              navigation={navigation}
              pink
              bold
            />
          </View>

          <View>
            <TouchableOpacity style={styles.haveAnyQuestion}>
              <Text style={styles.haveAnyQuestionText}>
                Маєте запитання?{' '}
                <Text style={styles.textBlack}>Напишіть нам!</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: w * 0.15,
  },
  labels: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: w * 0.09,
    fontWeight: '700',
    color: '#1A374D',
  },
  subTitle: {
    color: '#a3a3ab',
    fontWeight: '500',
    fontSize: w * 0.041,
    marginTop: w * 0.02,
  },
  mb15: {
    marginBottom: w * 0.15,
  },
  haveAnyQuestion: {
    alignSelf: 'center',
    marginTop: w * 0.2,
  },
  haveAnyQuestionText: {
    color: '#a3a3ab',
    fontSize: w * 0.037,
    fontStyle: 'italic',
  },
  backButton: {
    position: 'absolute',
    top: h * 0.07,
    left: w * 0.07,
  },
  backIcon: {
    width: w * 0.09,
    height: w * 0.09,
  },
  textBlack: {
    color: '#27272f',
    textDecorationLine: 'underline',
  },
});

const stylesForCodeInput = StyleSheet.create({
  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    ...Platform.select({web: {lineHeight: 65}}),
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: '#27272f',
    backgroundColor: '#fff',
    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    // Android
    elevation: 3,
  },
  root: {
    minHeight: 800,
    padding: 20,
  },
  nextButton: {
    marginTop: w * 0.25,
    alignSelf: 'center',
    marginBottom: 100,
  },
});
