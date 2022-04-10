import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';

import {icons} from '../../../assets/icons';
import {colors} from '../../../assets/colors';

import DialogItem from './DialogItem';
import Input from '../../../components/Input';
import TextBlock from '../../../components/TextBlock';

const w = Dimensions.get('window').width;

export const DirectTabScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.background}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.positionRelative}>
          <Input
            placeholder="Введіть ім'я для пошуку"
            value={searchQuery}
            isShowIcon={true}
            width={w * 0.91}
            onChangeText={e => setSearchQuery(e)}
          />
        </View>

        <View style={styles.title}>
          <TextBlock text={'Чати'} size={2} lightBlue boldest />
        </View>

        <View style={styles.categoriesContainer}>
          <DialogItem
            name={'Орися'}
            message={'Доброго дня! Скидаю вам ціну...'}
            navigation={navigation}
          />
          <DialogItem
            name={'Тетяна'}
            message={'Доброго дня! Скидаю вам ціну...'}
            navigation={navigation}
          />
          <DialogItem
            name={'Оля'}
            message={'Доброго дня! Скидаю вам ціну...'}
            navigation={navigation}
          />
          <DialogItem
            name={'Орися'}
            message={'Доброго дня! Скидаю вам ціну...'}
            navigation={navigation}
          />
          <DialogItem
            name={'Тетяна'}
            message={'Доброго дня! Скидаю вам ціну...'}
            navigation={navigation}
          />
          <DialogItem
            name={'Оля'}
            message={'Доброго дня! Скидаю вам ціну...'}
            navigation={navigation}
          />
          <DialogItem
            name={'Орися'}
            message={'Доброго дня! Скидаю вам ціну...'}
            navigation={navigation}
          />
          <DialogItem
            name={'Тетяна'}
            message={'Доброго дня! Скидаю вам ціну...'}
            navigation={navigation}
          />
          <DialogItem
            name={'Оля'}
            message={'Доброго дня! Скидаю вам ціну...'}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DirectTabScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  title: {
    marginTop: w * 0.07,
  },
  positionRelative: {
    alignItems: 'center',
    marginTop: w * 0.05,
  },
  categoriesContainer: {
    width: w * 0.92,
    marginTop: w * 0.07,
  },
});
