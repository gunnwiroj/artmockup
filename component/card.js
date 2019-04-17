import React,{Component} from 'react'
import {View,Text, Image} from 'react-native'

class Card extends Component{

  constructor(props){
    super(props)
    this.state = {
      picture: this.props.uri !== undefined ? this.props.uri : '',
      productname: this.props.productname !== undefined ? this.props.productname : '',
      productprice: this.props.productprice !== undefined ? this.props.productprice: ''
    }
  }
  render(){
    return(
      <View style={{width:"47%",height:247, marginLeft:'2%', marginBottom:"3%",backgroundColor:'#fff'}}>
        <Image
          source={{uri:this.state.picture}}
          style={{width:'95%', height:180, marginTop:5, alignSelf:'center'}}
        />
        <Text>{this.state.productname}</Text>
        <View style={{flexDirection:'row'}}>
        <Text>{this.state.productprice}</Text>
        </View>
      </View>
    )
  }
}

export default Card;