import React, {Component} from 'react';
import { Text, ListView } from 'react-native';
import MainView from './view';
import { getAllDogs } from '../../components/api';
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dogs: null,
        }
    }
    componentDidMount(){
        const self = this;
        getAllDogs().then((value) => {
            let ds =    new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            self.setState({isLoading : false, dogs: ds.cloneWithRows(value.message),});
        });
    }



render() {
    if (this.state.isLoading) {
        return (
            <Text>
                Loaging...
            </Text>
        );
    }
    return(
            <MainView
                allDogs = {this.state.dogs}
            />

        )
    }
}
