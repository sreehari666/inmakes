import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableHighlight,
    ScrollView
}from "react-native";
import Icon from "../assets/icon.svg";
import { Dropdown } from 'react-native-element-dropdown';

export default class StudentDeatails extends Component{

    constructor(){
        super();
        this.state = {
            isFocused:false
        }
    }
    handleFocus = () => this.setState({isFocused: true})

    handleBlur = () => this.setState({isFocused: false})

    render(){
        const states = [
            {
            "key": "AN",
            "name": "Andaman and Nicobar Islands"
            },
            {
            "key": "AP",
            "name": "Andhra Pradesh"
            },
            {
            "key": "AR",
            "name": "Arunachal Pradesh"
            },
            {
            "key": "AS",
            "name": "Assam"
            },
            {
            "key": "BR",
            "name": "Bihar"
            },
            {
            "key": "CG",
            "name": "Chandigarh"
            },
            {
            "key": "CH",
            "name": "Chhattisgarh"
            },
            {
            "key": "DH",
            "name": "Dadra and Nagar Haveli"
            },
            {
            "key": "DD",
            "name": "Daman and Diu"
            },
            {
            "key": "DL",
            "name": "Delhi"
            },
            {
            "key": "GA",
            "name": "Goa"
            },
            {
            "key": "GJ",
            "name": "Gujarat"
            },
            {
            "key": "HR",
            "name": "Haryana"
            },
            {
            "key": "HP",
            "name": "Himachal Pradesh"
            },
            {
            "key": "JK",
            "name": "Jammu and Kashmir"
            },
            {
            "key": "JH",
            "name": "Jharkhand"
            },
            {
            "key": "KA",
            "name": "Karnataka"
            },
            {
            "key": "KL",
            "name": "Kerala"
            },
            {
            "key": "LD",
            "name": "Lakshadweep"
            },
            {
            "key": "MP",
            "name": "Madhya Pradesh"
            },
            {
            "key": "MH",
            "name": "Maharashtra"
            },
            {
            "key": "MN",
            "name": "Manipur"
            },
            {
            "key": "ML",
            "name": "Meghalaya"
            },
            {
            "key": "MZ",
            "name": "Mizoram"
            },
            {
            "key": "NL",
            "name": "Nagaland"
            },
            {
            "key": "OR",
            "name": "Odisha"
            },
            {
            "key": "PY",
            "name": "Puducherry"
            },
            {
            "key": "PB",
            "name": "Punjab"
            },
            {
            "key": "RJ",
            "name": "Rajasthan"
            },
            {
            "key": "SK",
            "name": "Sikkim"
            },
            {
            "key": "TN",
            "name": "Tamil Nadu"
            },
            {
            "key": "TS",
            "name": "Telangana"
            },
            {
            "key": "TR",
            "name": "Tripura"
            },
            {
            "key": "UK",
            "name": "Uttar Pradesh"
            },
            {
            "key": "UP",
            "name": "Uttarakhand"
            },
            {
            "key": "WB",
            "name": "West Bengal"
            }
            ]
        return(
            <ScrollView>
            <View style={style.mainContainer}>
                <Image style={style.logo} source={require('../assets/inmakeslogo.png')}></Image>
                <Icon style={style.icon} width={120} height={110} /> 
                <Text style={{fontSize:20,fontWeight:'bold',margin:10,color:"#000000"}}>Student details</Text>
                <View style={style.formContainer}>
                    <TextInput style={[style.input,{
                        borderColor: this.state.isFocused
                            ? '#007345'
                            : '#13394A',
                        borderWidth: 2,
                    }]} 
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur} 
                    placeholder="Full name" 
                    placeholderTextColor="#446270" />

                    <TextInput style={[style.input,{
                        borderColor: this.state.isFocused
                            ? '#007345'
                            : '#13394A',
                        borderWidth: 2,
                    }]} 
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur} 
                    placeholder="Email" 
                    placeholderTextColor="#446270" />

                    <Dropdown
                    style={[style.dropdown]}
                    placeholderStyle={style.placeholderStyle}
                    selectedTextStyle={style.selectedTextStyle}
                    inputSearchStyle={style.inputSearchStyle}
                    data={states}
                    search
                    maxHeight={200}
                    labelField="name"
                    valueField="key"
                    placeholder={'Select state'}
                    searchPlaceholder="Search..."
                    value={null}
                    onFocus={() => null}
                    onBlur={() => null}
                    onChange={item => {
                        console.log(item.name)
                    }}
                    />

                    <TextInput style={[style.input,{
                        borderColor: this.state.isFocused
                            ? '#007345'
                            : '#13394A',
                        borderWidth: 2,
                    }]} 
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur} 
                    placeholder="Pin code" 
                    placeholderTextColor="#446270" />

                    <TouchableHighlight style={style.button} onPress={()=>this.props.navigation.navigate('SchoolBoard')}>
                        <Text style={{color:'#ffffff'}}>Register</Text>
                    </TouchableHighlight>
                </View>
            </View>
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    mainContainer:{
        flex:2,
        backgroundColor:"#ffffff",
        flexDirection:'column',
        alignItems:'center',
    },
    formContainer:{
        flex:1,
        backgroundColor:"#002333",
        width:"100%",
        alignItems:'center',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        
    },
    logo :{
        height:55,
        width:'50%',
        marginTop:20,
    },
    icon:{
        marginTop:20,
        marginBottom:30,
    },
    input:{
        width:'90%',
        backgroundColor:"#062E40",
        paddingLeft:20,
        marginTop:20,
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
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        width:'90%',
        marginTop:20,
        borderColor:'#13394A',
        backgroundColor:'#062E40',
        paddingLeft:20,

    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 14,
        color:'#446270'
    },
    selectedTextStyle: {
        fontSize: 16,
        color:'#446270'
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        backgroundColor:'#062E40',
        borderRadius:5,
    },

})