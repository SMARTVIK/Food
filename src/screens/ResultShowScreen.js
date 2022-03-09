import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({navigation}) => {

    const id = navigation.getParam('id');
    
    const [results, setResults] = useState(null);

    const fetchDatafromId = async (id) =>{
          try {
            const response = await yelp.get(`/${id}`);
            setResults(response.data);
          } catch (error) {
             console.log(error) 
          }
    };

    useEffect(()=> {
        fetchDatafromId(id)
    }, []);


    if(!results) {
        return null
    }

    return <View>
        <Text>{results.name}</Text>
        <FlatList
        data={results.photos}
        keyExtractor={(photo)=> photo}
        renderItem={({item})=>{
            return <Image style={styles.image} source={{uri: item}}/>
        }}
        />
    </View>
};

const styles = StyleSheet.create({
    image:{
        width: 300,
        height: 200
    }
});

export default ResultShowScreen;