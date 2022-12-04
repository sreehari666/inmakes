import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    ScrollView,   
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Home_icon from "../assets/home.svg";
import Play from "../assets/play.svg";
import Book from "../assets/book.svg";
import Persion from "../assets/persion.svg";
import Email from "../assets/email.svg";
import Button from "../assets/button.svg";
import Dot from "../assets/dot.svg";
import Arr from "../assets/arr.svg";
import Play_btn from "../assets/play_btn.svg";

export default class Home extends Component{
    render(){
        return(
            <View style={style.mainContainer}>
                <View style={style.topContainer}>
                 
                    <View style={{height:55,width:'100%',flexDirection:'row',paddingTop:10,alignItems:'center'}}>
                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('MyDrawer')} style={style.top_btn}>
                            <View>
                                <View style={{flexDirection:'row'}}>
                                    <View style={style.top_btn_small}></View>
                                    <View style={style.top_btn_small}></View>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <View style={style.top_btn_small}></View>
                                    <View style={style.top_btn_small}></View>
                                </View>
                            </View>
                           
                        </TouchableHighlight>

                        <Image source={require("../assets/inmakeslogo.png")} style={{height:26,width:116,marginLeft:20,}} />
                        <TouchableHighlight style={{height:30,width:80,borderWidth:1,borderColor:'#00C458',justifyContent:'center',alignItems:'center',borderRadius:5,marginLeft:110}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <View style={{height:20,width:20,backgroundColor:'#007345',borderRadius:10}}/>
                                <Text style={{fontSize:10,color:'#00C458',marginLeft:5}}>Classes</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <Text style={{fontSize:12,color:'#002333'}}>Goodmorning</Text>
                    <Text style={{fontSize:24,color:'#002333',fontWeight:'bold',marginBottom:5,}}>Aaron Taylor</Text>
                    <TouchableHighlight style={{width:370,height:60}} >
                        <View>
                            
                            <Button style={{}} />
                            <View style={{position:'absolute',marginTop:10,marginLeft:20,}}>
                                <Text style={{fontSize:12,color:'#BAC3C7'}}>Class</Text>
                                <Text style={{fontSize:14,color:'#FFFFFF'}}>Plus two Science</Text>
                            </View>
                            <Arr style={{position:'absolute',marginTop:30,marginLeft:340}} />
                        </View>
                    </TouchableHighlight>
                 
                </View>
                <ScrollView style ={style.middleContainer} horizontal={true}>

                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('CourseDetails')} style={style.btnCourse}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={style.small_circle}></View>
                            <Text style={{fontSize:12,color:'#002333'}}>Biology</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('CourseDetails')} style={style.btnCourse}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={style.small_circle}></View>
                            <Text style={{fontSize:12,color:'#002333'}}>Physics</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('CourseDetails')} style={style.btnCourse}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={style.small_circle}></View>
                            <Text style={{fontSize:12,color:'#002333'}}>Chemistry</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('CourseDetails')} style={style.btnCourse}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={style.small_circle}></View>
                            <Text style={{fontSize:12,color:'#002333'}}>Maths</Text>
                        </View>
                    </TouchableHighlight>

                </ScrollView>
                <Text style={{marginLeft:20,color:'#002333',fontSize:12}}>
                    Recent cources
                </Text>
                <ScrollView style={style.courseContainer} horizontal={true}>
                    <View style={style.courseBox}>
                        <View style={style.play_btn_style}>
                            <Play_btn />
                            <Text style={{fontSize:12, color:'#ffffff', marginLeft:5,}}>Course Title</Text>
                            
                        </View>
                        <View style={style.progressBar}>
                            <View style={{backgroundColor: "#3F57CE", width:'25%',height:'100%',borderRadius:5}}/>
                        </View>
                    </View>

                    <View style={style.courseBox}>
                        <View style={style.play_btn_style}>
                            <Play_btn />
                            <Text style={{fontSize:12, color:'#ffffff', marginLeft:5,}}>Course Title</Text>
                            
                        </View>
                        <View style={style.progressBar}>
                            <View style={{backgroundColor: "#3F57CE", width:'50%',height:'100%',borderRadius:5}}/>
                        </View>
                    </View>

                    <View style={style.courseBox}>
                        <View style={style.play_btn_style}>
                            <Play_btn />
                            <Text style={{fontSize:12, color:'#ffffff', marginLeft:5,}}>Course Title</Text>
                            
                        </View>
                        <View style={style.progressBar}>
                            <View style={{backgroundColor: "#3F57CE", width:'70%',height:'100%',borderRadius:5}}/>
                        </View>
                    </View>
                    
                </ScrollView>

                

                <ScrollView horizontal={true} style={style.bottomContainer}>

                    <View style={style.bottomBox}>
                        <View style={{marginLeft:20,marginRight:30}}>
                            <View style={style.circle}></View>
                            <Text style={{color:'#ffffff',fontWeight:'bold'}}>Target live classes</Text>
                            <Text style={{color:'#446270',fontSize:12,marginTop:5,marginBottom:5,}}>Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention</Text>
                            <TouchableHighlight style={style.button}>
                                <Text style={{color:'#ffffff'}}>Book a free Class</Text>
                            </TouchableHighlight>
                        </View>
                    </View>

                    <View style={style.bottomBox}>    
                        <View style={{marginLeft:20,marginRight:30}}>
                            <View style={style.circle}></View>
                            <Text style={{color:'#ffffff',fontWeight:'bold'}}>Target live classes</Text>
                            <Text style={{color:'#446270',fontSize:12,marginTop:5,marginBottom:5,}}>Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention</Text>
                            <TouchableHighlight style={style.button}>
                                <Text style={{color:'#ffffff'}}>Book a free Class</Text>
                            </TouchableHighlight>
                        </View>
                    </View>

                    <View style={style.bottomBox}>    
                        <View style={{marginLeft:20,marginRight:30}}>
                            <View style={style.circle}></View>
                            <Text style={{color:'#ffffff',fontWeight:'bold'}}>Target live classes</Text>
                            <Text style={{color:'#446270',fontSize:12,marginTop:5,marginBottom:5,}}>Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention</Text>
                            <TouchableHighlight style={style.button}>
                                <Text style={{color:'#ffffff'}}>Book a free Class</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    

                </ScrollView>
                <View style={style.bottomNav}>

                    <TouchableHighlight>
                        <View style={{flexDirection:'column', alignItems:'center',marginRight:20,marginLeft:20}}>
                            <Home_icon/>
                            <Dot style={{marginTop:5,}} />
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

                    <TouchableHighlight underlayColor="transparant" onPress={()=>this.props.navigation.navigate('Profile')}>
                        <View style={style.bottonNavBtn}>
                            <Persion />
                            <Text style={style.bottomNavBtnText}>Profile</Text>
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
    },
    topContainer:{
        height:"25%",
        width:"100%",
        marginLeft:20,
    },
    middleContainer:{
        height:"8%",
        width:'100%',
        marginLeft:15,
        marginTop:20,
    },
    courseContainer:{
        height:"20%",
        width:"100%",

    },
    bottomContainer:{
        height:'45%',
        width:'100%',
        flexDirection:'row'
    },
    bottomBox:{
        height:'100%',
        width:200,
        backgroundColor:'#002333',
        margin:20,
        borderRadius:10,
        marginRight:0,
    },
    circle:{
        height:79,
        width:79,
        backgroundColor:'#002E43',
        borderRadius:39.5,
        margin:20,
        marginLeft:0,
    },
    button:{
        height:50,
        width:'100%',
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        
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
    courseBox:{
        height:'100%',
        width:200,
        backgroundColor:'#000000D9',
        margin:20,
        borderRadius:3,
        marginRight:0,
        marginTop:1,
        
    },
    btnCourse:{
        height:40,
        width:100,
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#002333',
        borderRadius:5,
        marginLeft:5,
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
    play_btn_style:{
        marginTop:75,
        marginLeft:10,
        flexDirection:'row',
        alignItems:'center',
    },
    progressBar:{
        width:'90%',
        height:5,
        backgroundColor:'gray',
        marginLeft:10,
        marginTop:5,
        borderRadius:5,

    },
    small_circle:{
        height:20,
        width:20,
        borderRadius:10,
        backgroundColor:'#00C458',
        marginRight:5,
        
    },
    top_btn:{
        height:32,
        width:32,
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#D5D5D5',
        borderRadius:5,
    },
    top_btn_small:{
        height:5,
        width:5,
        backgroundColor:'green',
        margin:1,
    }

    

})
