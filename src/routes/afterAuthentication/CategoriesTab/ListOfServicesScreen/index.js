import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

import {icons} from '../../../../assets/icons';

import ServiceItem from '../ServiceItem';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default ListOfServicesScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.background}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CategoriesTabScreen')}
          style={styles.backButton}>
          <Image source={icons.leftArrow} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Оберіть послугу</Text>
        <Text style={styles.subTitle}>або скористайтеся пошуком</Text>
        <View style={styles.positionRelative}>
          <TextInput
            returnKeyType={'done'}
            placeholder="Введіть назву послуги"
            placeholderTextColor={'#a3a3ab'}
            style={styles.input}
            value={searchQuery}
            onChangeText={e => setSearchQuery(e)}
          />
          <Image source={icons.search} style={styles.toRightIcon} />
        </View>

        <View style={styles.categoriesContainer}>
          <ServiceItem name="Укладка волосся" navigation={navigation} />
          <ServiceItem name="Фарбування волосся" navigation={navigation} />
          <ServiceItem name="Ламінування брів" navigation={navigation} />
          <ServiceItem name="Укладка волосся" navigation={navigation} />
          <ServiceItem name="Фарбування волосся" navigation={navigation} />
          <ServiceItem name="Ламінування брів" navigation={navigation} />
          <ServiceItem name="Укладка волосся" navigation={navigation} />
          <ServiceItem name="Фарбування волосся" navigation={navigation} />
          <ServiceItem name="Ламінування брів" navigation={navigation} />
          <ServiceItem name="Укладка волосся" navigation={navigation} />
          <ServiceItem name="Фарбування волосся" navigation={navigation} />
          <ServiceItem name="Ламінування брів" navigation={navigation} />
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
    marginLeft: w * 0.1,
  },
  subTitle: {
    color: '#a3a3ab',
    fontWeight: '500',
    fontSize: w * 0.041,
    marginTop: w * 0.01,
    marginBottom: w * 0.05,
  },
  input: {
    width: w * 0.8,
    fontSize: w * 0.045,
    padding: 5,
    color: '#27272f',
    paddingLeft: w * 0.1,
    paddingRight: w * 0.05,
    paddingTop: w * 0.04,
    paddingBottom: w * 0.04,
    borderRadius: w * 0.02,
    borderWidth: 1,
    borderColor: '#27272f',
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
