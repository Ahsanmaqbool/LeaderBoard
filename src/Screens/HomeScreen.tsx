import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {TextInput, Button} from 'react-native-paper';
const DATA = require('../resources/leaderboard.json');
const DATA1 = Object.values(DATA);
const HomeScreen = props => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text style={styles.headerTitle}>Name</Text>
        <Text style={styles.headerTitle}>Name</Text>
        <Text style={styles.headerTitle}>Name</Text>
      </View>
    );
  };
  const renderList = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          width: '33%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.listText}>{item.name}</Text>
        {/* <Text>{item.bananas}</Text> */}
      </View>
    );
  };

  const handleSearch = () => {
    const filteredItems = DATA1.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    props.navigation.navigate('SearchScreen', {
      filteredData: filteredItems,
      searchName: searchText,
    });
  };

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-around',
          height: hp(8),
        }}>
        <TextInput
          label="Name"
          placeholder="Enter Name"
          mode="outlined"
          value={searchText}
          onChangeText={searchText => setSearchText(searchText)}
          style={{width: '65%'}}
          left={<TextInput.Icon icon="eye" />}
        />
        <Button
          //   icon="camera"
          mode="contained"
          style={{width: '30%'}}
          onPress={() => handleSearch()}>
          Search
        </Button>
      </View>
      <FlatList
        data={searchText ? filteredData : DATA1}
        ListHeaderComponent={() => renderHeader()}
        renderItem={item => renderList(item)}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {},
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0000000',
  },
  listText: {color: '#000000'},
});
