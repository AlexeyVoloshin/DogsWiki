import React, {Component} from 'react';
import { Text, ListView } from 'react-native';
import MainView from './view';
import { getAllDogs } from '../../components/api';
export default class Main extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !==r2});
        this.state = {
            isLoading: true,
            dogs: null,
            dataSource: ds.cloneWithRows(allDogs.message),
        }
    }
    componentDidMount(){
        const self = this;
        getAllDogs().then((value) => {
            self.setState({isLoading : false, dogs: value});
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
