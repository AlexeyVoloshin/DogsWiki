import React, {Component} from 'react';
import {
    View,
    AppRegistry
} from 'react-native';
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux';

const Wrapper = styled.View`
  background-color: papayawhip;
`;
const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20 ;
`;
const Description = styled.Text`
  fontSize: 14;
  color: #000;
  text-align: center;
`;


export default class BreedDetails extends Component {
    render() {
        return(
            <Wrapper>
                <Row>
                  <Description>This is Dog</Description>
                </Row>
            </Wrapper>
        )
    }
}