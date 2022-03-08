import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultDetails from '../components/ResultDetails';

const ResultList = ({title, results, navigation}) => {
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({item}) => {
            return (
                <TouchableOpacity onPress={() => {navigation.navigate('ResultShow')}}>
                    <ResultDetails item={item}/>
                </TouchableOpacity>
            )
        }}
        />
    </View>
};


const styles = StyleSheet.create({
title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 5
},
container:{
    marginBottom: 10
}
});

export default ResultList;