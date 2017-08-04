import React from 'react';
import styled from 'styled-components/native';


const Wrapper = styled.ListView`

`;
const DogPhoto = styled.Image`
   margin-horizontal: 53;
    width: 285;
    height: 285;
`;
const ImageContainer = styled.View`
    width: 200;
    height: 200;
    
    
`;
const imgUri = [
    require('../../img/dog.jpg')
];
const ImageStyle = styled.Image`

`;

const MainView = ({ allDogs} ):Props =>{
    return(
        <ImageStyle source={imgUri[0]}>
            <Wrapper
                dataSource={allDogs}
                renderRow={(rowData) => <DogPhoto source={{uri: rowData }}/>}
            />
        </ImageStyle>
    );
};
export default MainView;