import { View, Text, TextInput, TouchableOpacity  } from 'react-native';
import React, {useState} from 'react'
import axios from 'axios'

export default function App() {
  const [infoCep, setInfoCep] = useState({})
    const [searchCep, setSearchCep] = useState('')

    const getCep = async() =>{
        const {data} = await axios.get(`http://viacep.com.br/ws/${searchCep}/json/`)
        setInfoCep(data)
        console.log(data)
        console.log('CEP pesquiado: '+searchCep)
    }

  return (
    <View style={{flex:1,alignItems:'center', marginTop:35}}>
      <TextInput 
          placeholder="Digite o CEP" 
          value={searchCep}
          keyboardType='numeric'
          onChangeText={text => setSearchCep(text)}
          style={{backgroundColor:'#F5F7F8',width:'90%',height:42,borderRadius:5,alignItems:'center',justifyContent:'center',paddingLeft:10,paddingRight:10}}
      />
      <TouchableOpacity style={{width:'90%',height:42,borderRadius:5,marginTop:25,alignItems:'center',justifyContent:'center',backgroundColor:'#0A4D68'}}
          onPress={getCep}
      >
          <Text style={{color:'white',fontSize:20,fontWeight:500}}>
              Buscar
          </Text>
      </TouchableOpacity>
      <View style={{flex:1, marginTop: 20,width:'90%'}}>
          <Text>Rua: {infoCep.logradouro}</Text>
          <Text>Bairro: {infoCep.bairro}</Text>
          <Text>Cidade: {infoCep.localidade}</Text>
          <Text>Estado: {infoCep.uf}</Text>
      </View>
  </View>
  );
}
