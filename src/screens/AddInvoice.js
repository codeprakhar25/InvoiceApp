import React from 'react'
import { StyleSheet, Text,View,Image, ScrollView,TouchableOpacity } from 'react-native'
import DetailCard from '../components/DetailCard'

const AddInvoice = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
<View style={styles.AddInvoiceHeader}>
<Image style={{marginLeft:'4%'}} source={require('../assets/back.png')}/>
<View style={{width:'70%'}}><Text style={{color: '#FFF',
textAlign: 'center',
fontFamily: 'Open Sans',
fontSize: 16,
fontStyle: 'normal',
fontWeight: 800,
letterSpacing: -0.333}}>Invoice</Text></View> 
<Image style={{}} source={require('../assets/profile.png')}/>
</View>
<View style={{width:'85%',marginLeft:'7.5%',marginTop:20,marginBottom:50}}>
 <Text style={{color: '#8F93A4',fontFamily: 'Open Sans',fontSize: 16,fontStyle: 'normal',fontWeight:700}}>Details</Text>
 <View style={styles.InvoiceCard} elevation={5}>
 <Text style={{color: '#8F93A4',fontWeight: 600, marginTop:5, fontSize: 13,}}>No. #10</Text>
 <Text style={{color: '#374767',fontWeight: 600, marginTop:5, fontSize: 16,}}>Mar 02, 2023</Text>
 <Text style={{color: '#8F93A4',fontWeight: 600, marginTop:5, fontSize: 13,}}>Due on March 09,2023</Text>
 </View>
 <DetailCard img={require('../assets/User.png')} head='Client' text='+ Add Client Details'/>
 <DetailCard img={require('../assets/User.png')} head='Items' text='+ Add Items'/>
 <Text style={{color: '#8F93A4',fontFamily: 'Open Sans',fontSize: 16,fontStyle: 'normal',fontWeight:700,marginTop:15}}>Total</Text>
 <View style={styles.CardsWrapper}>
<View style={styles.cardsTop}>
    <Text style={{color: '#8F93A4',fontWeight: 600,fontSize: 13,}}>SubTotal</Text>
    <View style={{  display:'flex',
    flexDirection:'row',}}>
    <Image style={{marginTop:5}}  source={require('../assets/rupe.png')}/>
    <Text style={{color: '#8F93A4',fontWeight: 600,fontSize: 13,}}>0.0</Text>
    </View> 
    </View>
    <View style={styles.cardsTop}>
    <Text style={{color: '#8F93A4',fontWeight: 600,fontSize: 13,}}>Tax</Text>
 <View style={{  display:'flex',
    flexDirection:'row',}}>
    <Image style={{marginTop:5}}  source={require('../assets/rupe.png')}/>
    <Text style={{color: '#8F93A4',fontWeight: 600,fontSize: 13,}}>0.0</Text>
    </View>  
    </View>
    <View style={styles.cardsTop}>
<Text style={{color: '#374767',fontWeight: 600,fontSize: 16,textAlign: 'center',}}>Total</Text>
<View style={{  display:'flex',
    flexDirection:'row',}}>
    <Image style={{marginTop:5}}  source={require('../assets/rupe.png')}/>
    <Text style={{color: '#374767',fontWeight: 600,fontSize: 14,}}>0.0</Text>
    </View> 
    </View>
    </View>
    <DetailCard img={require('../assets/Note.png')} head='Note' text='+ Add Note'/>
    <DetailCard img={require('../assets/sign.png')} head='Signature' text='+ Add Signature'/>
    <DetailCard img={require('../assets/uploadd.png')} head='Photo' text='+ Add Photo'/>
    <View style={{display:'flex',flexDirection:'row',}}>
    <TouchableOpacity style={styles.button} onPress={()=>{

}}>
      <Text style={styles.buttonText}>Save</Text>
    </TouchableOpacity>
    <TouchableOpacity style={
        { 
        width:'40%',
        marginTop:30,
        marginLeft:'10%',
        padding: 18,
        borderColor:'#1C85E8',
        borderWidth:1,
        borderRadius: 15,}
    } onPress={()=>{

}}>
      <Text style={{color: '#1C85E8',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',}}>Share</Text>
    </TouchableOpacity>
    </View>
</View>
    </ScrollView>
  )
}

export default AddInvoice

const styles=StyleSheet.create({
AddInvoiceHeader:{
    width: '100%',
height: 83,
backgroundColor: '#1C85E8',
display:'flex',
flexDirection:'row',
textAlign:'center',
alignItems:'center',
justifyContent:'center',
},
InvoiceCard:{
    height: 90,
borderRadius: 15,
marginTop:20,
borderWidth:0.5,
borderColor: '#E3F2FF',
borderStyle:'solid',
backgroundColor: '#FFF',
paddingLeft:20,
},

CardsWrapper:{
height: 95,
borderRadius: 15,
borderWidth:0.5,
marginTop:15,
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
fontWeight: 700,},
button: {
    backgroundColor: '#1C85E8',
    width:'40%',
    marginTop:30,
    marginLeft:'10%',
    padding: 18,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})