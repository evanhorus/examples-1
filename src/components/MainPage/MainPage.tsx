import React, {useEffect} from "react";
import {BigCircle, InnerText} from "./styled";
import {addDoc, collection, doc, getDocs, setDoc} from "firebase/firestore";
import {db} from "../../api";

const FlexCenterXY = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const textList = [{url: '', text: 'First'}, {url: '', text: 'Second'}, {url: '', text: "Third"}, {
    url: '',
    text: "Four"
}];

export const MainPage: React.FC = () => {

    useEffect(() => {

        setDoc(doc(db, "cities", "LA"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA"
        }).then((docRef ) => {
            console.log('DONE', docRef )
        });

        addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        }).then((docRef)=>{
            console.log('DONE:ADD', docRef.id)
        });

        getDocs(collection(db, "users")).then(querySnapshot=>{
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} =>`, doc.data());
            });
        });

    }, [])

    return (

        <div style={FlexCenterXY}>
            <div style={
                {
                    ...FlexCenterXY,
                    width: '1000px',
                    height: '700px',
                    flexWrap: 'wrap',
                }
            }>
                {
                    textList.map((e, index) => {
                        return (
                            <div
                                key={index}
                                style={
                                    {
                                        ...FlexCenterXY,
                                        height: '250px',
                                        width: '250px',

                                    }
                                }>
                                <BigCircle>
                                    <InnerText>
                                        {e.text}
                                    </InnerText>
                                </BigCircle>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}