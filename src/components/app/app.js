
import Card from '../cards/card';

import styled from 'styled-components';

const Wrapper = styled.div`
    padding-top: 100px;
    width: 95vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
`;

const App = () => {
    const data =  [
        {price: 300, rate: 10, active: false, backHeader: '#43acba', back: '#0ccee8', id: 1},
        {price: 450, rate: 50, active: false, backHeader: '#43ba7b', back: '#2ef27d', id: 2},
        {price: 550, rate: 100, active: true, backHeader: '#ba4367', back: '#f22e69', id: 3},
        {price: 1000, rate: 200, active: false, backHeader: '#212121', back: '#4d4f4e', id: 4}
    ];
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <Card key = {id} {...itemProps}/>
        )
    });
    
    return (
        <Wrapper>
            {elements}
        </Wrapper>
    )
}

export default App;