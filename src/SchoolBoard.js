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

export default class SchoolBoard extends Component{

    constructor(){
        super();
        this.state = {
            isFocused:false
        }
    }
    handleFocus = () => this.setState({isFocused: true})

    handleBlur = () => this.setState({isFocused: false})

    render(){
        const boards = [
            {
                "key": 1,
                "name": "Kerala Board of higher Secondary Education"
            },
            {
                "key": 2,
                "name":" Central Board of Secondary Education"
            }
            
        ]
        const dep = [
            {
                "key":1,
                "name":"1",
            },
            {
                "key":2,
                "name":"2",
            },
            {
                "key":3,
                "name":"3",
            },
            {
                "key":4,
                "name":"4",
            },
            {
                "key":5,
                "name":"5",
            },
            {
                "key":6,
                "name":"6",
            },
            {
                "key":7,
                "name":"7",
            },
            {
                "key":8,
                "name":"8",
            },
            {
                "key":9,
                "name":"9",
            },
            {
                "key":10,
                "name":"10",
            },
            {
                "key":11,
                "name":"11",
            },
            {
                "key":12,
                "name":"12",
            }

        ]
        return(
            <ScrollView>
            <View style={style.mainContainer}>
                <Image style={style.logo} source={require('../assets/inmakeslogo.png')}></Image>
                <Icon style={style.icon} width={120} height={110} /> 
                
                <Text style={{fontSize:20,fontWeight:'bold',margin:10,color:"#000000"}}>Select your school board</Text>
                <View style={style.formContainer}>
                    
                <Dropdown
                    style={[style.dropdown]}
                    placeholderStyle={style.placeholderStyle}
                    selectedTextStyle={style.selectedTextStyle}
                    inputSearchStyle={style.inputSearchStyle}
                    data={boards}
                    search
                    maxHeight={200}
                    labelField="name"
                    valueField="key"
                    placeholder={'Select board'}
                    searchPlaceholder="Search..."
                    value={null}
                    onFocus={() => null}
                    onBlur={() => null}
                    onChange={item => {
                        console.log(item.name)
                    }}
                    />

                <Dropdown
                    style={[style.dropdown]}
                    placeholderStyle={style.placeholderStyle}
                    selectedTextStyle={style.selectedTextStyle}
                    inputSearchStyle={style.inputSearchStyle}
                    data={dep}
                    search
                    maxHeight={200}
                    labelField="name"
                    valueField="key"
                    placeholder={'Select class'}
                    searchPlaceholder="Search..."
                    value={null}
                    onFocus={() => null}
                    onBlur={() => null}
                    onChange={item => {
                        console.log(item.name)
                    }}
                    />

                    

                    <TouchableHighlight style={style.button} onPress={()=>this.props.navigation.navigate('AppTour')}>
                        <Text style={{color:'#ffffff'}}>Continue</Text>
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
        marginTop:100,
        marginBottom:100,
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