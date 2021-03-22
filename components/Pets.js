import React from 'react'
import{ View,Text,Image,StyleSheet} from 'react-native'

export default function Pets({image,name,type,age,location,id}) {
    return (
       <View style={styles.container}>
           <View>
               <Image source={image} style={styles.image}/>
           </View>
           <View style={styles.textContainer}>
               <Text style={styles.petName}>{name}</Text>
               <Text style={styles.petDetails}>{type}</Text>
               <Text style={styles.petDetails}>{age}</Text>
               <Text style={styles.petDetails}>{location}</Text>

           </View>
       </View>
    )
}

const styles=StyleSheet.create(
    {
        container:{
            flexDirection:"row",

        },
        image:{
            width:130,
            height:150,
            borderRadius:10,
            marginVertical:20
        },
        textContainer:{
            backgroundColor:"#f2f2f2",
            height:100,
            width:100,
            marginVertical:45,
            borderRadius:7,
            
        },
        petName:{
            fontSize:20,
            color:"blue",
            marginHorizontal:10,
            fontWeight:"bold"
        },
        petDetails:{
            color:"#BEB8C7",
            marginHorizontal:10,
            fontSize:12
        }
    }
)