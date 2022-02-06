import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

import {icons} from '../../../assets/icons';

import DialogItem from './DialogItem';
import Input from '../../../components/Input';

const w = Dimensions.get('window').width;

export default DirectTabScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.background}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.positionRelative}>
          <Input
            placeholder="Введіть назву категорії"
            value={searchQuery}
            isShowIcon={true}
            onChangeText={e => setSearchQuery(e)}
          />
          <Image source={icons.search} style={styles.toRightIcon} />
        </View>

        <Text style={styles.title}>Ваші чати</Text>

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

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: w * 0.07,
    fontWeight: '700',
    color: '#1A374D',
    marginTop: w * 0.07,
  },
  positionRelative: {
    position: 'relative',
    justifyContent: 'center',
    marginTop: w * 0.05,
  },
  toRightIcon: {
    position: 'absolute',
    width: w * 0.06,
    height: w * 0.06,
    marginLeft: w * 0.03,
  },
  categoriesContainer: {
    width: w * 0.8,
    marginTop: w * 0.07,
  },
});
