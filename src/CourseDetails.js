import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
} from "react-native";
import LeftArrow from "../assets/LeftArrow.svg";

export default class CoureseDetails extends Component{
    render(){
        return(
            <View style={style.mainContainer}>
                <View style={style.topContainer}>
                    <View style={style.innerContainer}>
                       <TouchableHighlight>
                            <LeftArrow />
                       </TouchableHighlight>

                       <Text style={{fontSize:24,color:'#ffffff',fontWeight:'bold', marginTop:30,}}>Biology</Text>
                        
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

                    </View>
                </View>

                    <View style={style.courseContainer}>
                        <ScrollView style={style.innerCourseContainer}>
                                <TouchableHighlight underlayColor='transparant' onPress={()=>this.props.navigation.navigate('CourseVideoList')}>
                                    <View style={style.itemContainer}>
            
                                            <Text style={{fontSize:18,color:'#000000'}}>Long chapter name can be shown here</Text>
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
                                                        <Text style={{fontSize:10,color:'#9F9F9F',marginLeft:5}}>3 parts</Text>
                                                    </View>

                                            </View>
                                    </View>
                                </TouchableHighlight>
                                
                                    <View style={style.itemContainer}>
            
                                            <Text style={{fontSize:18,color:'#000000'}}>Long chapter name can be shown here</Text>
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
                                                        <Text style={{fontSize:10,color:'#9F9F9F',marginLeft:5}}>3 parts</Text>
                                                    </View>

                                            </View>
                                    </View>
                                
                                <TouchableHighlight underlayColor='transparant' onPress={()=>this.props.navigation.navigate('CourseVideoList')}>
                                <View style={style.itemContainer}>
        
                                        <Text style={{fontSize:18,color:'#000000'}}>Long chapter name can be shown here</Text>
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
                                                    <Text style={{fontSize:10,color:'#9F9F9F',marginLeft:5}}>3 parts</Text>
                                                </View>

                                        </View>
                                </View>
                                </TouchableHighlight>

                                <TouchableHighlight onPress={()=>this.props.navigation.navigate('CourseVideoList')}>
                                <View style={style.itemContainer}>
        
                                        <Text style={{fontSize:18,color:'#000000'}}>Long chapter name can be shown here</Text>
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
                                                    <Text style={{fontSize:10,color:'#9F9F9F',marginLeft:5}}>3 parts</Text>
                                                </View>

                                        </View>
                                </View>
                                </TouchableHighlight>
                                <View style={style.itemContainer}>
        
                                        <Text style={{fontSize:18,color:'#000000'}}>Long chapter name can be shown here</Text>
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
                                                    <Text style={{fontSize:10,color:'#9F9F9F',marginLeft:5}}>3 parts</Text>
                                                </View>

                                        </View>
                                </View>

                                <View style={style.itemContainer}>
        
                                        <Text style={{fontSize:18,color:'#000000'}}>Long chapter name can be shown here</Text>
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
                                                    <Text style={{fontSize:10,color:'#9F9F9F',marginLeft:5}}>3 parts</Text>
                                                </View>

                                        </View>
                                </View>
                        </ScrollView>
                        
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
        height:'30%',
        width:'100%',
        backgroundColor:'#00202F',
    },
    innerContainer:{
        margin:20,
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
    courseContainer:{
        height:'70%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    innerCourseContainer:{
        height:'100%',
        width:'90%',
        backgroundColor:'#EEEEEE',
        borderRadius:8,
        flexDirection:'column',
    },
    itemContainer:{
        margin:20,
        backgroundColor:'#ffffff',
        padding:20,
        borderRadius:8,
        marginBottom:0,
    }
})