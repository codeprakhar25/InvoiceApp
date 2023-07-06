import React from 'react'
import { Image, StyleSheet, Text ,View} from 'react-native'

const Cards = () => {
  return (
    <View style={styles.CardsWrapper}>
<View style={styles.cardsTop}>
    <Text style={{color: '#8F93A4',fontWeight: 600,fontSize: 13,}}>No. #10</Text>
    <Text style={{color: '#8F93A4',fontWeight: 600,fontSize: 13,}}>Loreum Ipsum</Text>
    </View>
    <View style={styles.cardsTop}>
    <Text style={{color: '#8F93A4',fontWeight: 600,fontSize: 13,}}>Mar 02, 2023</Text>
 <View style={{  display:'flex',
    flexDirection:'row',}}>
    <Image style={{marginTop:5}}  source={require('../assets/rupe.png')}/>
    <Text style={{color: '#374767',fontWeight: 600,fontSize: 13,}}>100.0</Text>
    </View>  
    </View>
    <View style={styles.cardsTop}>
    <View style={{width: 54,height: 18,borderRadius: 15,textAlign: 'center',
borderWidth:0.5,
borderColor: '#BFD8FF',
borderStyle:'solid',}}><Text style={{color: '#8F93A4',fontWeight: 400,fontSize: 10,textAlign: 'center',}}>Saved</Text></View>
    <Text style={{color: '#8F93A4',fontWeight: 600,fontSize: 13,}}>Due in 4 days</Text>
    </View>
    </View>
  )
}

export default Cards

const styles= StyleSheet.create({
    CardsWrapper:{
        width: '80%',
        marginTop:20,
height: 90,
borderRadius: 15,
marginLeft:'10%',
borderWidth:0.5,
borderColor: '#E3F2FF',
borderStyle:'solid',
backgroundColor: '#FFF',
    },
    cardsTop:{
        marginTop:8,
        color: '#9497A6',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:'4%',
    width:'92%',
    fontWeight: 700,}
})