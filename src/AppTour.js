import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
} from "react-native";

export default class AppTour extends Component{
    render(){
        return(
            <View style={style.mainContainer}>
                
               <Image 
               style={style.image}
               source={
                {
                    uri:"https://mobimg.b-cdn.net/v3/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg"
                }
               }/> 
               <Text style={style.heading}>App tour title</Text>
               <Text style={{color:'#9F9F9F'}}>Your app description goes here</Text>
               <View style={style.buttonOuter}>
               <TouchableHighlight style={style.button} onPress={()=>this.props.navigation.navigate('Home')}>
                    <Image style={style.arrow} source={require('../assets/Arrow.png')} ></Image>
               </TouchableHighlight>
               </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    mainContainer:{
        
        height:'100%',
        width:'100%',
        alignItems:'center',
        
    },
    image:{
        height:'70%',
        width:'90%',
        marginTop:20,
        borderRadius:5,
    },
    heading:{
        fontSize:18,
        margin:20,
        color:'#000000',
        marginBottom:2,
    },
    button:{
        height:'100%',
        width:'100%',
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        borderWidth:2,
        borderColor:'#ffffff'
    },
    buttonOuter:{
        height:60,
        width:60,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderColor:'#E5E5E5',
        borderRadius:5,
        marginTop:10
    },
    arrow:{
        height:20,
        width:20,
    }
})