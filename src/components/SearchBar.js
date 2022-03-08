import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChanged,onTermSubmitted }) => {
    return <View style={{backgroundColor: 'white'}}>
        <View style={styles.background}>
        <Feather name="search" style={styles.iconStyle}/> 
        <TextInput 
         style={styles.inputStyle} 
         placeholder='Search'
         value={term} 
         onChangeText={(newText) => onTermChanged(newText)}
         onEndEditing={() => onTermSubmitted()}/>
    </View>
    </View>
};

const styles = StyleSheet.create({
    background:{
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle:{
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});


export default SearchBar;