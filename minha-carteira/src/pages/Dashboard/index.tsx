import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';



import {Container} from './styles';

const Dashboard : React.FC = () => {


    const options = [
        {value: 'Alex',  label: 'Alex'},
        {value: 'Alex',  label: 'Alex'},
        {value: 'Alex',  label: 'Alex'},
        
    ]

    return (
        <Container>
            <ContentHeader title='DashBoard' lineColor='#f7931b'>
                <SelectInput options ={options} onChange={() => {}}/>
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;
