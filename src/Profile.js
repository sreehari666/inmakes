import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
} from "react-native";
import Card from "../assets/card.svg";
import Notification from "../assets/notification.svg";
import Menu from "../assets/Menu.svg";
import Home_icon from "../assets/home.svg";
import Play from "../assets/play.svg";
import Book from "../assets/book.svg";
import Persion from "../assets/persion.svg";
import Email from "../assets/email.svg";
import Dot from "../assets/dot.svg";


export default class Profile extends Component{
    render(){
        return(
            <View style={style.mainContainer}>
                <View style={style.topContainer}>
                    <View style={{flexDirection:'row',margin:20,}}>
                        <Text style={{fontSize:20, color:'#ffffff', marginRight:80}}>Profile</Text>
                        <Notification style={{marginLeft:20,}} />
                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('Home')}>
                            <Menu style={{marginLeft:20,}} />
                        </TouchableHighlight>
                        
                    </View>
                    
                </View>
                <View style={style.profileContainer}>
                    <View style={{flexDirection:'row',alignItems:'center' ,margin:20,}}>
                        <View style={style.profileIcon} />
                        <View style={{marginLeft:20,}}>
                            <Text style={{fontWeight:'bold',color:'#000000'}}>Jone Deo</Text>
                            <Text>ID:12345678</Text>
                        </View>
                    </View>
                    <View style={{margin:20}}>
                        <Text style={{fontWeight:'bold',color:'#000000'}}>Personal info</Text>
                        <View style={style.infoRow}>
                            <Text style={style.leftText}>Account Settings</Text>
                            <Text style={style.rightText}>Aron Taylor</Text>
                        </View>
                        <View style={style.infoRow}>
                            <Text style={style.leftText}>Email</Text>
                            <Text style={style.rightText}>emaidid123@server.com</Text>
                        </View>
                        <View style={style.infoRow}>
                            <Text style={style.leftText}>Number</Text>
                            <Text style={style.rightText}>+91 9876543210</Text>
                        </View>
                    </View>

                    <View style={{margin:20}}>
                        <Text style={{fontWeight:'bold',color:'#000000'}}>Course info</Text>
                        <View style={style.infoRow}>
                            <Text style={style.leftText}>Center</Text>
                            <Text style={style.rightText}>Inmakes edu</Text>
                        </View>
                        <View style={style.infoRow}>
                            <Text style={style.leftText}>Course</Text>
                            <Text style={style.rightText}>Plus two science</Text>
                        </View>
                        <View style={style.infoRow}>
                            <Text style={style.leftText}>Payment status</Text>
                            <Text style={style.rightText}>Free</Text>
                        </View>
                        <View style={style.infoRow}>
                            <Text style={style.leftText}>Expire Date</Text>
                            <Text style={style.rightText}>Not Applicable</Text>
                        </View>
                    </View>

                    <TouchableHighlight style={style.paymentBtn}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Card />
                            <Text style={{marginLeft:20,color:'#ffffff'}}>Custom Payment</Text>
                        </View>
                    </TouchableHighlight>

                   

                </View>
                <View style={style.bottomNav}>

                    <TouchableHighlight>
                        <View style={{flexDirection:'column', alignItems:'center',marginRight:20,marginLeft:20}}>
                            <Home_icon/>
                        </View>
                    </TouchableHighlight>

                    
                    <TouchableHighlight>
                        <View style={style.bottonNavBtn}>
                            <Play />
                            <Text style={style.bottomNavBtnText}>Recents</Text>
                        </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight>
                        <View style={style.bottonNavBtn}>
                            <Book />
                            <Text style={style.bottomNavBtnText}>Exams</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight>
                        <View style={style.bottonNavBtn}>
                            <View style={{alignItems:'center'}}>
                                <Persion />
                                <Dot style={{marginTop:5,}} />
                            </View>
                            
                            {/* <Text style={style.bottomNavBtnText}>Profile</Text> */}
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight>
                        <View style={style.bottonNavBtn}>
                            <Email />
                            <Text style={style.bottomNavBtnText}>Contact</Text>
                        </View>
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
        alignItems:'center'
    },
    topContainer:{
        height:'40%',
        width:'100%',
        backgroundColor:'#00202F',
        alignItems:'flex-end'
    },
    profileContainer:{
        height:'85%',
        width:'80%',
        backgroundColor:'#ffffff',
        position:'absolute',
        marginTop:100,
        borderRadius:5,
        elevation:1,
        
    },
    profileIcon:{
        height:40,
        width:40,
        borderWidth:2,
        borderColor:'green',
        borderRadius:20,

    },
    infoRow:{
        flexDirection:'row',
        marginTop:20
    },
    rightText:{
        fontWeight:'bold',
        color:'#000000',
        marginLeft:20,
        alignItems:'flex-end'
    },
    paymentBtn:{
        height:50,
        width:'90%',
        backgroundColor:'#00C458',
        justifyContent:'center',
        paddingLeft:20,
        margin:20,
        marginTop:0,
        borderRadius:5,
    },
    bottonNavBtn:{
        flexDirection:'row',
        marginRight:20,
        alignItems:'center'
    },
    bottomNavBtnText:{
        fontSize:8,
        color:'#C2C2C2',
        marginLeft:2,
    },
    bottomNav:{
        position:'absolute',
        width:'90%',
        height:80,
        backgroundColor:'#ffffff',
        zIndex:3,
        elevation:3,
        marginTop:500,
        margin:20,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
   
})