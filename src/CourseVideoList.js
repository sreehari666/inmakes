import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
} from "react-native";
import LeftArrow from "../assets/LeftArrow.svg";

export default class CourseVideoList extends Component{
    render(){
        return(
            <View style={style.mainContainer}>
                <View style={style.topContainer}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <LeftArrow />
                        <Text style={{fontSize:20,color:'#ffffff',marginLeft:110}}>Biology</Text>
                    </View>
                    <Text style={{fontSize:24,color:'#ffffff',marginTop:20,}}>Long chapter name can be shown here.</Text>
                    <View style={{flexDirection:'row',marginTop:10,}}>
                            <View style={{flexDirection:'row',alignItems:'center',}}>
                                <View style={style.greenRadioOuter}>
                                    <View style={style.greenRadio}/>
                                </View>
                                <Text style={{fontSize:10,color:'#00C458',marginLeft:5}}>12 Chapters</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
                                <View style={style.greenRadioOuter}>
                                    <View style={style.greenRadio}/>
                                </View>
                                <Text style={{fontSize:10,color:'#00C458',marginLeft:5}}>124 hours</Text>
                            </View>
                        </View>
                        <View style={style.topNavContainer}>
                            <Text style={{fontSize:16,color:'#ffffff',marginLeft:10}}>Video</Text>
                            <Text style={{fontSize:16,color:'gray',marginLeft:20}}>Chapter Test</Text>
                            <Text style={{fontSize:16,color:'gray',marginLeft:20}}>Resoures</Text>
                            <Text style={{fontSize:16,color:'gray',marginLeft:20}}>QN Bank</Text>
                        </View>
                    </View>
                    <ScrollView>
                    
                    <View style={{alignItems:'center'}}>

                        <TouchableHighlight underlayColor="transparant" onPress={()=>this.props.navigation.navigate('Video')}>
                        <View style={style.videoContainer}>
                            <View style={style.imageContainer}></View>
                            <View style={{margin:20,}}>
                                <Text style={{fontSize:18,color:'#000000',fontWeight:'bold'}}>Long chapter name can be shown here.</Text>
                                <View style={{flexDirection:'row',marginTop:10,}}>
                                        <View style={{flexDirection:'row',alignItems:'center',}}>
                                            <View style={style.radioOuter}>
                                                <View style={style.radio}/>
                                            </View>
                                            <Text style={{fontSize:10,color:'#9F9F9F',marginLeft:5}}>Chapter 1</Text>
                                        </View>
                                        <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
                                            <View style={style.radioOuter}>
                                                <View style={style.radio}/>
                                            </View>
                                            <Text style={{fontSize:10,color:'#9F9F9F',marginLeft:5}}>part 1</Text>
                                        </View>

                                </View>
                            </View>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="transparant" onPress={()=>this.props.navigation.navigate('Video')}>

                        <View style={style.videoContainer}>
                            <View style={style.imageContainer}></View>
                            <View style={{margin:20,}}>
                                <Text style={{fontSize:18,color:'#000000',fontWeight:'bold'}}>Long chapter name can be shown here.</Text>
                                <View style={{flexDirection:'row',marginTop:10,}}>
                                        <View style={{flexDirection:'row',alignItems:'center',}}>
                                            <View style={style.radioOuter}>
                                                <View style={style.radio}/>
                                            </View>
                                            <Text style={{fontSize:10,color:'#9F9F9F',marginLeft:5}}>Chapter 1</Text>
                                        </View>
                                        <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
                                            <View style={style.radioOuter}>
                                                <View style={style.radio}/>
                                            </View>
                                            <Text style={{fontSize:10,color:'#9F9F9F',marginLeft:5}}>part 1</Text>
                                        </View>

                                </View>
                            </View>
                        </View>
                        </TouchableHighlight>
                        <View style={style.videoContainer}>
                            <View style={style.imageContainer}></View>
                            <View style={{margin:20,}}>
                                <Text style={{fontSize:18,color:'#000000',fontWeight:'bold'}}>Long chapter name can be shown here.</Text>
                                <View style={{flexDirection:'row',marginTop:10,}}>
                                        <View style={{flexDirection:'row',alignItems:'center',}}>
                                            <View style={style.radioOuter}>
                                                <View style={style.radio}/>
                                            </View>
                                            <Text style={{fontSize:10,color:'#9F9F9F',marginLeft:5}}>Chapter 1</Text>
                                        </View>
                                        <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
                                            <View style={style.radioOuter}>
                                                <View style={style.radio}/>
                                            </View>
                                            <Text style={{fontSize:10,color:'#9F9F9F',marginLeft:5}}>part 1</Text>
                                        </View>

                                </View>
                            </View>
                        </View>
                    </View>
                    </ScrollView>
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
        height:'30%',
        width:'100%',
        backgroundColor:'#00202F',
        padding:20
    },
    greenRadio:{
        height:7,
        width:7,
        borderRadius:3.5,
        backgroundColor:'#00C458',
    },
    greenRadioOuter:{
        height:14,
        width:14,
        borderWidth:2,
        borderColor:'#00C458',
        borderRadius:7,
        alignItems:'center',
        justifyContent:'center'
    },
    radio:{
        height:7,
        width:7,
        borderRadius:3.5,
        backgroundColor:'#9F9F9F',
    },
    radioOuter:{
        height:14,
        width:14,
        borderWidth:2,
        borderColor:'#9F9F9F',
        borderRadius:7,
        alignItems:'center',
        justifyContent:'center'
    },
    topNavContainer:{
        height:70,
        marginTop:15,
        flexDirection:'row'
    },
    videoContainer:{
        width:'90%',
        height:200,
        backgroundColor:'#ffffff',
        margin:20,
        marginBottom:0,
        borderRadius:5,
        elevation:2,
        
    },
    imageContainer:{
        height:'50%',
        width:'100%',
        backgroundColor:'gray',
        borderRadius:5,
        
    }

})