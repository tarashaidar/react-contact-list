import styled from 'styled-components';
import arrow from '../icons/arrow-back.svg'

export default {
    Wrapper: styled.div`
    & .close-create-contact{
    display: block;
    width: 60px;
    height: 60px;
    background-image: url(${arrow});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30px;
    font-size: 0;
    }
    `,
    Form: styled.form`
    padding: 20px;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    `,
    Details: styled.div`
    margin-left: 20px;
    & input{
    width: 100%;
    padding: 5px 10px;
    margin-bottom: 10px;
    font-size: inherit;
    background: transparent;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: 0;
    }
    & button{
    margin-top: 20px;
    background: #ccc;
    padding: 10px;
    text-transform: uppercase;
    font-size: inherit;
    border: none;
    outline: 0;
    }
    `,
    
}
