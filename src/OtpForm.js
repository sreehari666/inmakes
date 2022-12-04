import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Image,
    
} from "react-native";
import Icon from "../assets/icon.svg";
import Contact from "../assets/contactIcon.svg"


export default class OtpForm extends Component{
    render(){
        return(
            <>
                 <View style={style.mainContainer}>
                    <Image style={style.logo} source={require('../assets/inmakeslogo.png')}></Image>
                    <Icon style={style.icon} width={120} height={110} /> 
                    <Text style={{color:'#000',fontSize:24,fontWeight:'bold',}}>Verification Code</Text>
                    <Text style={{color:'#9f9f9f',fontSize:18,}}>Please type the verification sent to</Text>
                    <Text style={{color:'#000',margin:10}}>91+ 9876543210</Text>
                </View>
                <View style={style.mobileNumberContainer}>
                    <View style={{flexDirection:'row'}}>
                        <TextInput style={style.inputSmall} maxLength={1} keyboardType='numeric' color='#fff' fontSize={20}/>
                        <TextInput style={style.inputSmall} maxLength={1} keyboardType='numeric' color='#fff' fontSize={20}/>
                        <TextInput style={style.inputSmall} maxLength={1} keyboardType='numeric' color='#fff' fontSize={20}/>
                        <TextInput style={style.inputSmall} maxLength={1} keyboardType='numeric' color='#fff' fontSize={20}/>
                        <TextInput style={style.inputSmall} maxLength={1} keyboardType='numeric' color='#fff' fontSize={20}/>
                    </View>
                    
                    <TouchableHighlight style={style.button} onPress={()=>this.props.navigation.navigate('StudentDetails')}>
                        <Text style={{color:'#ffffff'}}>Resend OTP</Text>
                    </TouchableHighlight>
                    <Text style={{color:"#446270", fontSize:10}}>Resend after 28s</Text>
                    <Text style={{color:"#00C458",alignItems:"center",marginTop:10}}><Contact /> Contact us</Text>
                </View>

            </>
           
        )
    }
}

const style = StyleSheet.create({
    mainContainer : {
        backgroundColor:'#fff',
        flex:2,
        flexDirection:'column',
        alignItems:'center',
        
    },
    mobileNumberContainer:{
        backgroundColor:'#002333',
        flex:1,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        flexDirection:'column',
        alignItems:'center',
        
        
    },
   
    inputSmall : {
        width:'15%',
        height:55,
        marginTop:24,
        margin:5,
        backgroundColor:'#062E40',
        paddingLeft:18,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        width:'90%',
        backgroundColor:'green',
        height:50,
        margin:20,
        marginBottom:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
    },
    logo :{
        height:55,
        width:'50%',
        marginTop:25,
    },
    icon:{
        marginTop:30,
        marginBottom:50,
    }
    
})