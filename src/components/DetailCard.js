import React from 'react'
import { StyleSheet,Image,View,Text } from 'react-native'

const DetailCard = (props) => {
    const image=props.img;
  return (
    <>
     <Text style={{color: '#8F93A4',fontFamily: 'Open Sans',fontSize: 16,fontStyle: 'normal',fontWeight:700,marginTop:15}}>{props.head}</Text>
 <View style={styles.DetailsCards}>
    <Image source={image} />
    <Text style={{color: '#374767',fontFamily: 'Open Sans',fontSize: 16,fontStyle: 'normal',fontWeight:700,marginLeft:10}}>{props.text}</Text>
 </View></>
  )
}

export default DetailCard

const styles=StyleSheet.create({
    DetailsCards:{
        height: 57,
        borderRadius: 15,
        marginTop:15,
        borderWidth:0.5,
        borderColor: '#E3F2FF',
        borderStyle:'solid',
        backgroundColor: '#FFF',
        paddingLeft:20,
        display:'flex',
        flexDirection:'row',
    alignItems:'center'
    },
})