import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';


const ResultDetails = ({item}) => {
    return <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.image_url}}/>
        <Text style={styles.name}>{item.name}</Text>      
        <Text>{item.rating} Stars, {item.review_count} Reviews</Text>      
    </View>
};

const styles = StyleSheet.create({
    container:{
        marginLeft: 10
    },
    image:{
        width: 250,
        borderRadius: 5,
        height: 100,
        marginBottom: 5
    },
    name:{
        fontWeight: 'bold'
    }
});

export default ResultDetails;