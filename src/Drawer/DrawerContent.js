import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import RightArrow from "../../assets/rightArrow.svg";
import MenuIcon from "../../assets/Menu.svg";



export default class DrawerContent extends Component{
    render(){
        return(
            <View style={style.container}>
                <View style={{margin:20,}}>
                    <TouchableHighlight>
                        <MenuIcon />
                    </TouchableHighlight>
                    <View style={style.profileContainer}>
                        <View style ={style.profile}>

                        </View>
                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('Profile')}>
                        <View style={{marginLeft:20,}}>
                            <Text style={{fontSize:14,color:'#ffffff', fontWeight:'bold'}}>Aaron Taylor</Text>
                            <Text style={{fontSize:12,color:'#6A828E'}}>ID:1234</Text>
                        </View>
                        </TouchableHighlight>
                        <RightArrow style={{marginLeft:30}} />
                    </View>

                    <ScrollView horizontal={false} style={{marginTop:20,}}>
                        <TouchableHighlight style={{marginTop:20}}>
                            <View style={style.item}>
                                <View style={style.box} />
                                <Text style={style.itemText}>Exam corner</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{marginTop:20}}>
                            <View style={style.item}>
                                <View style={style.box} />
                                <Text style={style.itemText}>Subscriptions</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{marginTop:20}}>
                            <View style={style.item}>
                                <View style={style.box} />
                                <Text style={style.itemText}>Analytics</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{marginTop:20}}>
                            <View style={style.item}>
                                <View style={style.box} />
                                <Text style={style.itemText}>Downloads</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{marginTop:20}}>
                            <View style={style.item}>
                                <View style={style.box} />
                                <Text style={style.itemText}>Notifications</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{marginTop:20}}>
                            <View style={style.item}>
                                <View style={style.box} />
                                <Text style={style.itemText}>Referrals</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{marginTop:20}}>
                            <View style={style.item}>
                                <View style={style.box} />
                                <Text style={style.itemText}>Share app</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{marginTop:20}}>
                            <View style={{flexDirection:'row',alignItems:'center',}}>
                                <View style={style.boxLogout} />
                                <Text style={style.itemText}>Logout</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight style={style.bottonBtn}>
                            <Text style={{color:'#00C458'}}>Enquire now</Text>
                        </TouchableHighlight>

                    </ScrollView>
                   
                </View>
               
            </View>
        )
    }
}

const style = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#002333',
    },
    profileContainer:{
        height:70,
        width:'100%',
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
    },
    profile:{
        height:50,
        width:50,
        borderRadius:25,
        marginLeft:20,
        borderWidth:3,
        borderColor:'#00C458'
    },
    box:{
        height:30,
        width:30,
        borderRadius:5,
        borderWidth:2,
        borderColor:'#00C458',
        marginBottom:10
    },
    boxLogout:{
        height:30,
        width:30,
        borderRadius:5,
        borderWidth:2,
        borderColor:'red',
        marginBottom:10
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:2,
        borderBottomColor:'#6A828E'
    },
    itemText:{
        marginBottom:10,
        marginLeft:20,
        color:'#FFFFFF',
    },
    bottonBtn:{
        height:50,
        width:200,
        borderWidth:3,
        borderColor:'#00C458',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginTop:20,
        marginBottom:200,
    }


})