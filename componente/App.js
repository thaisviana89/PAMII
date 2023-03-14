import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const Pokemon = () => {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            frontSize: 100,
            alignSelf: "center",
            color: "green",
          }}
          >
            Squirtle, Bulbasaur e Charmander
        </Text>
        <Image        
          source={require('./assets/pokemons.png')}        
          style={{ width: 400, height: 230, alignSelf: "center" }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 5,
          margin: 15,
        }}
        defaultValue="Digite Aquiii!"
      />
    </ScrollView>
  )
}

export default Pokemon;