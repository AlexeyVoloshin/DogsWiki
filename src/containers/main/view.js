import React from 'react';
import styled from 'styled-components/native';


const Wrapper = styled.ListView`
`;
const DogPhoto = styled.Image`
    width: 200;
    height: 200;
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
        <Wrapper>
            <ImageStyle source={imgUri[0]}>
            {
                allDogs.message.map(function(value, i){
                    return (
                        <ImageContainer
                            key={i}
                        >
                            <DogPhoto
                                source={{uri: value }}
                            />
                        </ImageContainer>
                    );
                })
            }
            </ImageStyle>
        </Wrapper>
    );
};
export default MainView;