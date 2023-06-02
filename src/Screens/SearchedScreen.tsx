import {View, Text, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const SearchedScreen = ({route}) => {
  const DATA = route.params.filteredData;
  const searchText = route.params.searchName;
  console.log(searchText);

  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginBottom: 10,
          marginTop: 5,
        }}>
        <Text style={styles.headerTitle}>Name</Text>
        <Text style={styles.headerTitle}>Rank</Text>
        <Text style={styles.headerTitle}>No of Bananas</Text>
        <Text style={styles.headerTitle}>Searched</Text>
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    console.log('item', item);
    return (
      <View style={styles.listView}>
        <Text style={styles.listText}>{item.name}</Text>
        <Text style={styles.listText}>{item.bananas}</Text>
        <Text style={styles.listText}>{index + 1}</Text>
        <Text style={styles.listText}>true</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={DATA}
        ListHeaderComponent={renderHeader}
        renderItem={item => renderItem(item)}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default SearchedScreen;
const styles = StyleSheet.create({
  container: {},
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: 'red',
  },
  listView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  listText: {color: '#000000', width: '25%', marginVertical: 5},
});
