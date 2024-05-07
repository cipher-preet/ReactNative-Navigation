import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Pressable } from 'react-native'

//React navigation import
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

import ProductItems from '../components/ProductItems'
import Seprator from '../components/Seprator'

import { PRODUCTS_LIST } from '../data/constants'

type HomeProps = NativeStackScreenProps<RootStackParamList,"Home">

const Home = ({navigation}:HomeProps) =>{
    return (
      <View style={styles.container} >
        {/* <Text>Preet</Text> */}
        <FlatList
        showsVerticalScrollIndicator={false}
        // showsHorizontalScrollIndicator={false}
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Seprator}
        renderItem={({item})=>(
            <Pressable
            onPress={() => navigation.navigate('Details',{
                product: item
            })}
            >
        <ProductItems product={item} />
    
        </Pressable>
        )}
        />
      </View>
    )
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: 12,
      backgroundColor: '#FFFFFF',
    },
  });

export default Home;
