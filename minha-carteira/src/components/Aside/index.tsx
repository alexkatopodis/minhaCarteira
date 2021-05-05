import React from 'react';
import {MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';
import logoImg from '../../assets/logo.svg';

import {
    Grid,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink
    
} from './styles';

const Aside: React.FC = () => {
    return (
        <Grid>
            <Header>
             <LogImg src ={logoImg} alt="Logo Minha Carteira" />
             <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href = '#'>
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href = '#'>
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>

                <MenuItemLink href = '#'>
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>

                <MenuItemLink href = '#'>
                    <MdExitToApp />
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Grid>
    );
}

export default Aside;