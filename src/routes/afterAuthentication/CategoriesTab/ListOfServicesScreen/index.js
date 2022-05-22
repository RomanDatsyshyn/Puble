import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

import {icons} from '../../../../assets/icons';
import {colors} from '../../../../assets/colors';

import ServiceItem from '../ServiceItem';
import Input from '../../../../components/Input';
import TextBlock from '../../../../components/TextBlock';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export const ListOfServicesScreen = ({route, navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const {services} = route.params;

  return (
    <View style={styles.background}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CategoriesTabScreen')}
          style={styles.backButton}>
          <Image source={icons.leftArrow} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.title}>
          <TextBlock text={'Оберіть послугу'} size={2} lightBlue boldest />
        </View>
        <View style={styles.subTitle}>
          <TextBlock text={'або скористайтеся пошуком'} size={5} grey bolde />
        </View>
        <View style={styles.positionRelative}>
          <Input
            placeholder="Введіть назву послуги"
            isShowIcon={true}
            value={searchQuery}
            onChangeText={e => setSearchQuery(e)}
          />
          <Image source={icons.search} style={styles.toRightIcon} />
        </View>

        <View style={styles.categoriesContainer}>
          {services.map(({name, id}, index) => (
            <ServiceItem
              id={id}
              name={name}
              navigation={navigation}
              services={services}
              key={index}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ListOfServicesScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  title: {
    marginTop: w * 0.07,
    marginLeft: w * 0.1,
  },
  subTitle: {
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
    marginTop: w * 0.05,
  },
  backButton: {
    position: 'absolute',
    top: h * 0.03,
  },
  backIcon: {
    width: w * 0.09,
    height: w * 0.09,
  },
});
