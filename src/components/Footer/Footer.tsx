import React from "react";
import {CommonSizes} from "../App/constants";
import {FooterElements} from "./FooterElements"
import styled from "styled-components";
import {FaFacebookF} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import {faceBookSite, navbarMyTry2} from "./data";

const IconWithStyles = styled.div`
  float: right;
  cursor: pointer; transition: color, transform 500ms ease;
  color: #d5d8c7;
  margin: 15px;

  &:hover {
    color: dodgerblue;
    transform: scale(1.5);
  }
;
`
export const Footer: React.FC<{ width: string }> = (randomPropsName) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    return (

        <div style={{
            flexWrap: 'wrap',
            backgroundColor: "#2d2d2d",
            width: randomPropsName.width,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div style={{width: '10px'}}></div>
            <div id="asdas" style={{flexWrap: 'wrap', display: 'flex', flexDirection: 'row'}}>
                {/*<FooterElements setIsOpen={setIsOpen}/>*/}
                <IconWithStyles>
                    <FaFacebookF className='faceBookSite' onClick={()=>{window.open('https://www.facebook.com/SportsBoiko','_self')}}/>
                </IconWithStyles>
                <IconWithStyles>
                    <FaYoutube className='youTubeSite' onClick={()=>{window.open('https://www.youtube.com/channel/UCDIhh8PunkA3CWy37beAaVQ?view_as=subscriber')}}/>
                </IconWithStyles>
                <IconWithStyles>
                    <FaInstagram className='instaSite' onClick={()=>{window.open('https://www.instagram.com/sportsboiko/')}}/>
                </IconWithStyles>
            </div>
            <div>
                <div style={{color: 'white', marginRight: '30px'}}>© 2022</div></div>

        </div>
    )
}