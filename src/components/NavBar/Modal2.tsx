import Modal from "react-modal";
import React from "react";

export const Modal2: React.FC<{setIsOpen:Function,modalIsOpen:boolean}> = ({setIsOpen,modalIsOpen}) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={() => {
                console.log('AFRTER OPEN')
            }}
            onRequestClose={() => {
                setIsOpen(false);
            }}
            style={{}}
            contentLabel="Example Modal"
        >
            <h2>КОНТАКТИ</h2>
            <button onClick={() => {
                setIsOpen(false)
            }}>close
            </button>
            <div>I am a modal</div>
            <form>
                <input/>
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
            </form>
        </Modal>
    )
}