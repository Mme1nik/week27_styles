import styled from 'styled-components';

const Container = styled.div`  
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Head = styled.div`
    position: relative;
    height: 60px;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
`;
const Header = styled.h2`
    font-size: 24px;
    font-weight: 400;
    text-align: center;
`;
const Cost = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    color: white;
`;
const Val = styled.div`
    position: absolute;
    left: -20px;
`;
const Price = styled.div`
    font-size: 60px;
    span {
        font-size: 16px;
    }
`;

const Rate = styled.div`
    height: 60px;
    text-align: center;
    line-height: 60px;
    background-color: #f0eded;
`;

const Volume = styled.div`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #e3dede;
`;

const Card = ({price, rate, backHeader, back, active}) => {

const Wrapper = styled.div`
    height: 100%;
    transform: ${active ? 'scale(1.04)' : 'auto'};
    box-shadow: ${active ? '5px 5px 15px 5px grey' : 'auto'};
`;
const AddContainer = styled(Container)`
    background-color: ${back};
`;

const AddHead = styled(Head)`
    background-color: ${backHeader};
`;

    return (
        <Wrapper>
            <AddHead>
                <Header>Безлимитный {price}</Header>
            </AddHead>
            <AddContainer>
                <Cost>
                    <Val>руб</Val>
                    <Price>{price} <span>/мес</span></Price>
                </Cost>
            </AddContainer>
            <Rate>до {rate} Мбит/сек</Rate>
            <Volume>Объем включенного трафика не ограничен</Volume>
        </Wrapper>
    )
}

export default Card;