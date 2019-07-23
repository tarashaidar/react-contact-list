import styled from 'styled-components';
import search from '../icons/search.svg'
import personAdd from '../icons/person-add.svg'
import cancel from '../icons/cancel.svg'


export default {
   Wrapper: styled.div`
   padding-top: 60px;
   & h3{
    text-align: center;
    text-transform: uppercase;
   }
   & ol{
    width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
   }
   & li{
    padding: 20px;
    background: white;
    display: flex;
    margin: 20px;
    border: 1px solid #d5d8df;
    border-radius: 4px;
   }
   & button{
    padding-left: 20px;
    align-self: center;
    width: 32px;
    height: 32px;
    background-color: transparent;
    background-image: url(${cancel});
    background-size: 100% 100%;
    border: 0;
    color: black;
    font-size: 0;
    vertical-align: middle;
    cursor: pointer;
    outline: none;
   }
   `,
   Search: styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    border-bottom: 1px solid #d5d8df;
    display: flex;
    & input{
    width: 100%;
    padding: 20px 20px 20px 60px;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: 20px center;
    background-size: 1.2em;
    font-size: 1.2em;
    border: 0;
    outline: none;
    }
    & .add-contact {
    display: block;
    width: 73px;
    background: white;
    background-image: url(${personAdd});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 28px;
    font-size: 0;
    }
   `,
   Avatar: styled.div`
    width: 60px;
    height: 60px;
    margin-right: 20px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    flex-shrink: 0;
   `,
   Details: styled.div`
    padding-left: 20px;
    border-left: 1px solid #eee;
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & p{
    margin: 0;
    min-width: 0;
    white-space: nowrap;
    }
   `

    
    
}
