import React from 'react'
import { StyleSheet, Text,View,Image,TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Cards from '../components/Cards';


const Home = ({navigation}) => {
  return (
    <View >
        <View style={styles.Header}>
        {/* <LinearGradient
        style={styles.topGradient}
        colors={['rgba(255, 255, 255, 0.00)', '#1C85E8']}
      ></LinearGradient> */}
      <View style={{display:'flex',flexDirection:'row',width:'100%'}}>
       <Text style={{color: '#FFF',
textAlign: 'center',
fontFamily: 'Open Sans',
fontSize: 16,
fontStyle: 'normal',
fontWeight: 800,
marginLeft: "44%",
// lineHeight: 'normal',
letterSpacing: -0.333,}}>Invoice</Text>
<Image style={{marginLeft: "28%",}} source={require('../assets/profile.png')}/>
        </View>
          {/* <LinearGradient
        style={styles.topGradient}
        colors={['rgba(255, 255, 255, 0.00)', '#1C85E8']}
      ></LinearGradient> */}
      </View>
      <View style={styles.statsContainer} elevation={25}>
<View style={styles.LeftStats} elevation={5}>
    <Text style={{color: '#374767',
    marginTop:28,
fontFamily: 'Open Sans',
fontSize: 12,
fontStyle: 'normal',
fontWeight: 600,}}>Amount Raised</Text>
<View style={{    display:'flex',flexDirection:'row',marginTop:15}}>
    <Image style={{margin: 5,marginTop:10}} source={require('../assets/rupee.png')}/>
    <Text style={{color: '#374767',
fontFamily: 'Open Sans',
fontSize: 25.5,
fontStyle: 'normal',
fontWeight: 600,}}>10,000</Text>
    </View>
    </View>
     <View style={styles.RightStats}>
     <Text style={{color: '#374767',
fontFamily: 'Open Sans',
marginTop:28,
fontSize: 12,
fontStyle: 'normal',
fontWeight: 600,}}>Amount Paid</Text>
<View style={{    display:'flex',flexDirection:'row',marginTop:15}}>
    <Image style={{margin: 5,marginTop:10}}  source={require('../assets/rupee.png')}/>
    <Text style={{color: '#374767',
fontFamily: 'Open Sans',
fontSize: 25.5,
fontStyle: 'normal',
fontWeight: 600,}}>5,000</Text>
    </View>
     </View>
      </View>
<View style={styles.cardsContainer}>
<View style={{color: '#374767',
fontFamily: 'Open Sans',
marginTop:28,

fontStyle: 'normal',
display:'flex',
flexDirection:'row',
justifyContent:'space-between',
marginLeft:'10%',
width:'80%',
fontWeight: 700,}}>
     <Text style={{color: '#8F93A4',fontWeight: 700,fontSize: 16,}}>Recent</Text>
<Text style={{color: '#374767',fontWeight: 700,fontSize: 16,}}>View All</Text>
 </View>
 <Cards/> 
 <Cards/> 
 <Cards/> 
</View>
<TouchableOpacity style={styles.button} onPress={()=>{
navigation.navigate('addinvoice')
}}>
      <Text style={styles.buttonText}>+ Create new invoice</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Home

styles= StyleSheet.create({
  Header:{
width: '100%',
height: 207,
borderBottomRightRadius: 35,
borderBottomLeftRadius:35,
backgroundColor: '#1C85E8',
alignItems:'center',
  },
  statsContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center',
    width: '86%',
height: 148,
borderRadius: 15,
backgroundColor: '#FFF',
marginLeft:"7.5%",
marginTop:-75,
// zIndex:500,
// position:'absolute'
  },
  LeftStats:{
    width: '50%',
height: 126,
borderRadius: 15,
backgroundColor: '#BFD8FF',
textAlign:'center',
alignItems:'center',

  },
  RightStats:{
     width: '40%',
height: 126,
textAlign:'center',
alignItems:'center',
  },
  button: {
    backgroundColor: '#1C85E8',
    width:'80%',
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