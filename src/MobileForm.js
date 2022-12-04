import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Image
} from "react-native";

export default class MobileForm extends Component{
    render(){
        return(
            <>
                 <View style={style.mainContainer}>
                    <Image style={style.logo} source={require('../assets/inmakeslog.webp')}></Image>
                    <Text style={{color:'black',fontSize:24,fontWeight:'bold',}}>Enter your mobile number</Text>
                    <Text style={{color:'#9f9f9f',fontSize:18,}}>We will sent you an OTP to verify</Text>
                </View>
                <View style={style.mobileNumberContainer}>
                    <View style={{flexDirection:'row'}}>
                        <TextInput style={style.inputSmall} placeholder="+91" placeholderTextColor={'#ffffff'} maxLength={2} />
                        <TextInput style={style.inputMain} placeholder="Mobile Number" placeholderTextColor={'#446270'} keyboardType='numeric' color='#fff' maxLength={10} />
                    </View>
                    
                    
                    <TouchableHighlight style={style.button} onPress={()=>this.props.navigation.navigate('OtpForm')}>
                        <Text style={{color:'#ffffff'}}>Continue</Text>
                    </TouchableHighlight>
                </View>

            </>
           
        )
    }
}

const style = StyleSheet.create({
    mainContainer : {
        backgroundColor:'#fff',
        flex:3,
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
    inputMain :{
        backgroundColor:'#062E40',
        marginTop:20,
        marginRight:20,
        marginLeft:10,
        width:'75%',
        height:50,
        paddingLeft:20,
        
    },
    inputSmall : {
        width:'15%',
        height:50,
        marginTop:20,
        marginLeft:20,
        backgroundColor:'#062E40',
        paddingLeft:18,
        borderRadius:5,
    },
    button:{
        width:'90%',
        backgroundColor:'green',
        height:50,
        margin:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
    },
    logo :{
        marginTop:'30%',
        marginBottom:30,
    }
    
})