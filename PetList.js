import React from 'react';
import Pets from './components/Pets';
import{View, FlatList,Text}  from 'react-native'

export default function PetList() {
    const pets = [
        {
            name:"Luna",
            age:"2",
            location:"Turkey",
            type:"dog",
            id:"1",
            image:require('./assets/dog.jpg')
            
        },
        {
            name:"kiwi",
            age:"4",
            location:"Texas",
            type:"parrot",
            id:"2", 
            image:require('./assets/parrot.jpg')
        },
        {
            name:"Chloe",
            age:"1",
            location:"California",
            type:"cat",
            id:"3",
            image:require('./assets/cat.jpg') 
        }

    ]
    return (
        <View >
            <FlatList
            data={pets}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>{
                 return<Pets name={item.name} 
                 age={item.age}
                 location={item.location}
                 type={item.type}
                 id={item.id}
                 image={item.image}
                 
                 />
            }}
                />
         
        </View>
      );
    }