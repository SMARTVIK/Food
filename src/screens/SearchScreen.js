import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [termText, setTermText] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  return (
    <View style={styles.main}>
      <SearchBar 
      term={termText} 
      onTermChanged={(newTerm) => setTermText(newTerm)} 
      onTermSubmitted={()=> searchApi(termText)}/>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
