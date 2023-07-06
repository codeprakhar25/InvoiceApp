import React from 'react'
import { StyleSheet, Text,View,Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


const Home = () => {
  return (
    <View>
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

      </View>

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
    // alignItems:'center',
    // textAlign:'center',
    // justifyContent:'center',
    width: '85%',
height: 148,
borderRadius: 15,
backgroundColor: '#FFF',
marginLeft:"7.5%",
marginTop:-75,
// zIndex:500,
// position:'absolute'
  }
})