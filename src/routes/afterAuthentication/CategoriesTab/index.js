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

import Input from '../../../components/Input';
import CategoryItem from './CategoryItem';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default CategoriesTab = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.background}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Оберіть категорію</Text>
        <Text style={styles.subTitle}>або скористайтеся пошуком</Text>

        <Input
          placeholder="Введіть назву категорії"
          isShowIcon={true}
          value={searchQuery}
          onChange={e => setSearchQuery(e)}
        />

        <View style={styles.categoriesContainer}>
          <CategoryItem
            name="Краса та здоров'я"
            icon={icons.beauty}
            navigation={navigation}
          />
          <CategoryItem
            name="Краса та здоров'я"
            icon={icons.beauty}
            navigation={navigation}
          />
          <CategoryItem
            name="Краса та здоров'я"
            icon={icons.beauty}
            navigation={navigation}
          />
          <CategoryItem
            name="Краса та здоров'я"
            icon={icons.beauty}
            navigation={navigation}
          />
          <CategoryItem
            name="Краса та здоров'я"
            icon={icons.beauty}
            navigation={navigation}
          />
          <CategoryItem
            name="Краса та здоров'я"
            icon={icons.beauty}
            navigation={navigation}
          />
          <CategoryItem
            name="Краса та здоров'я"
            icon={icons.beauty}
            navigation={navigation}
          />
          <CategoryItem
            name="Краса та здоров'я"
            icon={icons.beauty}
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
  subTitle: {
    color: '#a3a3ab',
    fontWeight: '500',
    fontSize: w * 0.041,
    marginTop: w * 0.01,
    marginBottom: w * 0.05,
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
  categoriesContainer: {
    width: w * 0.8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: w * 0.07,
  },
});
