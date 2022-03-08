import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = ({navigation}) => {

  const [termText, setTermText] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
      return results.filter(result=>{
        return result.price === price;
      })
  }

  return (
    <>
      <SearchBar 
      term={termText} 
      onTermChanged={(newTerm) => setTermText(newTerm)} 
      onTermSubmitted={()=> searchApi(termText)}/>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView style={{backgroundColor: 'white'} }>
      <ResultList navigation={navigation} results={filterResultsByPrice('$')} title="Cost Effective"/>
      <ResultList navigation={navigation} results={filterResultsByPrice('$$')} title="Bit Pricer"/>
      <ResultList navigation={navigation} results={filterResultsByPrice('$$')} title="Bit Pricer"/>
      </ScrollView>
      
    </>
  )
}

const styles = StyleSheet.create({
  main:{
    backgroundColor: 'white',
    flex: 1
  }
})

export default SearchScreen
