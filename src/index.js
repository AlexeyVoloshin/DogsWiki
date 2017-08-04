import React, {Component} from 'react';
import {
    View,
    AppRegistry
} from 'react-native';
import styled from 'styled-components/native';
import Main from './containers/main';
import BreedDetails from './containers/BreedDetails'
import { Actions, Scene, Router } from 'react-native-router-flux';



export default class Pagestart extends Component {
  render() {
      return(
          <Router>
              <Scene navigationBarStyle={{backgroundColor: '#a16f32' , height: 80,  }}
                 key="root"
                 title="DogsWiki"
                 titleStyle={{color:'#ffffff', fontSize: 25,  flexDirection:'row',  alignSelf:'center', }}
                     leftButtonIcon={1}
              >
              <Scene
                  key="Main"
                  component={Main}
                  initial={true}
              />
              <Scene
                  key="BreedDetails"
                  component={BreedDetails}
              />
              </Scene>
          </Router>
      )
  }
}
