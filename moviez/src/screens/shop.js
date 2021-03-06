import React from 'react';
import styled from 'styled-components'

import UpComing from '../components/movies/UpComing';
import Popular from '../components/movies/Popular';
import TopRated from '../components/movies/TopRated';
import Latest from '../components/movies/Latest';
import NowPlaying from '../components/movies/NowPlaying';

const Shop = () => {
    return (
        <ShopDiv>
            <H1>BOUTIQUE</H1>
            <NowPlaying/>
            <UpComing/>
            <Popular/>
            <TopRated/>
        </ShopDiv>
    );
};

export default Shop;

const ShopDiv=styled.div`
background-color: #555454;
`

const H1 =styled.h1`
font-size: 50px;
justify-content:center;
padding:20px;

`