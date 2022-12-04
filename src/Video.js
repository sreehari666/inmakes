import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
} from "react-native";
import LeftArrow from "../assets/LeftArrow.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Play from "../assets/play_btn.svg";
import RightArrow from "../assets/rightArrow.svg";
import Download from "../assets/download.svg";

export default class Video extends Component{
    render(){
        return(
            <View style={style.mainContainer}>
                <View style={style.videoContainer}>
                    <Play />
                </View>
                <View style={{margin:20,alignItems:'center',flexDirection:'row'}}>
                    <Text style={{fontSize:16,color:'#ffffff'}}>Long Chapter Name can be here shown here</Text>
                    <View style={{alignItems:'center',borderLeftWidth:1,borderLeftColor:'#173442',marginLeft:10,paddingLeft:5}}>
                        <Download />
                        <Text style={{color:'#ffffff',fontSize:8}}>Downloads</Text>
                    </View>
                </View>
                <View style={{borderTopWidth:1,borderBottomWidth:1,borderTopColor:'#173442',borderBottomColor:'#173442',height:50,justifyContent:'center'}}>
                    <View style={{flexDirection:'row',marginLeft:20,alignItems:'center'}}>
                        <Text style={{color:'gray'}}>{"<"}</Text>
                        <Text style={{color:'gray',fontSize:8,marginLeft:10}}>Previous</Text>
                        
                        <View style={{flexDirection:'row',marginLeft:100,marginRight:140}}>
                        <View style={{height:14,width:14,borderRadius:7,borderWidth:1,borderColor:'#00C458',alignItems:'center',justifyContent:'center'}}>
                            <View style={{height:10,width:10,backgroundColor:'#00C458',borderRadius:5}}>
                            </View>
                        </View>
                        <Text style={{color:'#00C458',fontSize:8,marginLeft:5}}>Part 1</Text>
                        </View>
                        <Text style={{color:'#ffffff',fontSize:8,}}>Next</Text>
                        <Text style={{color:'#ffffff',marginLeft:10}}>{">"}</Text>
                    </View>
                </View>
                <View style={{height:'100%',width:'100%',alignItems:'center'}}>
                    <TouchableHighlight style={{width:'80%',height:50,backgroundColor:'#000000',marginTop:150,borderRadius:5}}>
                        <Text style={{color:'#ffffff',padding:5,fontSize:12}}>Your sample question can be shown here no matter how long</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={{width:'80%',height:50,backgroundColor:'#062E40',paddingLeft:10,borderRadius:5,marginTop:20}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'#446270'}}>Ask a question?</Text>
                        <TouchableHighlight style={{height:40,width:50,backgroundColor:'#ffffff',alignItems:'center',justifyContent:'center',borderRadius:5,margin:5,marginLeft:150}}>
                            <Text>Post</Text>
                        </TouchableHighlight>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={{width:'80%',height:50,alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:'#00C458',borderRadius:5,marginTop:20}}>
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                            <Whatsapp />
                            <Text style={{color:'#00C458',marginLeft:10}}>Chat with teacher</Text>
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
        backgroundColor:'#00202F'
    },
    videoContainer:{
        height:'30%',
        width:'100%',
        backgroundColor:'gray',
        alignItems:'center',
        justifyContent:'center',
    }
    

})