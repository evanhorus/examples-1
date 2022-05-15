import Modal from "react-modal";
import React from "react";
import {CommonSizes} from "../App/constants";
import {NavBareElements} from "./NavBarElements";
import {Modal2} from "./Modal2"

Modal.setAppElement('#root');

export const NavBar: React.FC<{ width: string }> = (randomPropsName) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    return (

        <>
            <div style={{flexWrap: 'wrap', backgroundColor: "#2d2d2d", width: randomPropsName.width, display: 'flex'}}>
                <a style={{margin: CommonSizes.md, marginRight: '150px'}}>
                    SPORTS B<i>O</i>IKO
                </a>
                <div id="asdasdasdasdasd" style={{flexWrap: 'wrap',display: 'flex', flexDirection: 'row'}}>
                    <NavBareElements setIsOpen={setIsOpen}/>
                </div>
            </div>
            <Modal2 modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
        </>
    )
}