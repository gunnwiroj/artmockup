import React from 'react';
import { StyleSheet, Text, View, SafeAreaView , ScrollView, TouchableOpacity} from 'react-native';
import Card from './component/card'
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeCategory:1
    }
  }

  onCategory = (id) => {
    console.log(id)
    this.setState({activeCategory:id})
  }
  render() {
    const Data = [
      {pictureuri:'https://scontent.fbkk20-1.fna.fbcdn.net/v/t1.0-9/48387676_105743197149976_4106981692760129536_n.jpg?_nc_cat=106&_nc_ht=scontent.fbkk20-1.fna&oh=4998ccf639e2f3668f113b64c9cdc8c2&oe=5D4B3BE3',
      productname:'Cupcake',
      productprice: '120'},
      {
        pictureuri:'https://scontent.fbkk20-1.fna.fbcdn.net/v/t1.0-9/51644408_121523208905308_8615660492620300288_o.jpg?_nc_cat=102&_nc_ht=scontent.fbkk20-1.fna&oh=5249978102354f0352067def156a731d&oe=5D3AD392',
        productname:'Magaron',
        productprice:'150'
      },
      {
        pictureuri:'https://scontent.fbkk20-1.fna.fbcdn.net/v/t1.0-9/50309855_120544459003183_8170447021690322944_o.jpg?_nc_cat=106&_nc_ht=scontent.fbkk20-1.fna&oh=d8997ca376073212c31e5b1186a89ec4&oe=5D3E71A8',
        productname:'Raspberry Layer Cake',
        productprice:'150'
      }
    ]
    // const category = [
    //   {name:'Cupcake',id:1},
    //   {name:'Cake',id:2},
    //   {name:'Cookies',id:3},
    //   {name:'Pie',id:4}
    // ]
    return (
      <View style={{backgroundColor:'#000',height:'100%'}}>
        <SafeAreaView/>
        
          <View style={{height:"7%", backgroundColor:'#dfaea9', width:'100%', justifyContent:'center',alignItems:'center'}}>
          <View style={{width:80, flexDirection:'row'}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
            <TouchableOpacity style={{marginRight:10, alignSelf:'center'}} onPress={() => this.onCategory(1)}>
              <Text style={{color:this.state.activeCategory === 1 ? '#ffffff' : '#ffffff88'}}>Cup Cake</Text>
            </TouchableOpacity>        
            <TouchableOpacity style={{marginRight:10, alignSelf:'center'}} onPress={() => this.onCategory(2)}>
              <Text style={{color:this.state.activeCategory === 2 ? '#ffffff' : '#ffffff88'}}>Cake</Text>
            </TouchableOpacity>        
            <TouchableOpacity style={{marginRight:10, alignSelf:'center'}} onPress={() => this.onCategory(3)}>
              <Text style={{color:this.state.activeCategory === 3 ? '#ffffff' : '#ffffff88'}}>Cookies</Text>
            </TouchableOpacity>        
            <TouchableOpacity style={{marginRight:10, alignSelf:'center'}} onPress={() => this.onCategory(4)}>
              <Text style={{color:this.state.activeCategory === 4 ? '#ffffff' : '#ffffff88'}}>Pie</Text>
            </TouchableOpacity>        
            </ScrollView>
            </View>
          </View>        
        <ScrollView>
          <View style={{flexDirection:'row', flexWrap:'wrap',marginTop:5}}>
            {
              Data.map( (object,id) => {
                return(<Card
                  key={id}
                  uri={object.pictureuri}
                  productname={object.productname}
                  productprice={object.productprice}
                />)
              })
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
});
