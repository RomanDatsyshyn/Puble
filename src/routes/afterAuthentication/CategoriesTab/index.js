import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';

import {colors} from '../../../assets/colors';

const w = Dimensions.get('window').width;

import Input from '../../../components/Input';
import TextBlock from '../../../components/TextBlock';

import CategoryItem from './CategoryItem';

import DataService from '../../../API/HTTP/services/data.service';

export const CategoriesTab = ({navigation}) => {
  const [catagoriesList, setCatagoriesList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const getCategories = async () => {
    await DataService.getCategories()
      .then(res => {
        if (res.data.success) {
          setCatagoriesList([...res.data.data]);
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={styles.background}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.title}>
          <TextBlock text={'Оберіть категорію'} size={2} lightBlue boldest />
        </View>
        <View style={styles.subTitle}>
          <TextBlock text={'або скористайтеся пошуком'} size={5} grey bolde />
        </View>

        <Input
          placeholder="Введіть назву категорії"
          isShowIcon={true}
          value={searchQuery}
          onChange={e => setSearchQuery(e)}
        />

        <View style={styles.categoriesContainer}>
          {catagoriesList.map(({name, icon, services}, index) => (
            <CategoryItem
              name={name}
              icon={icon}
              services={services}
              navigation={navigation}
              key={index}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoriesTab;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  title: {
    marginTop: w * 0.07,
  },
  subTitle: {
    marginTop: w * 0.01,
    marginBottom: w * 0.05,
  },
  categoriesContainer: {
    width: w * 0.8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: w * 0.07,
  },
});
