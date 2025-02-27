import languages from "../data/languages";
import Button from "./Button";
import Card from "./card";

import { useState } from "react";

const Main = () => {
    const [selectedLanguage, setselectedLanguage] = useState( null )

    const renderLanguage = () => languages.map ( (language) => {
        const active = selectedLanguage === language 
        return (
            <Button key={language.id} isActive={active} title={language.title} selected={() => setselectedLanguage(language) } />

        )
    })

    const renderSelectedLanguage = () =>{
        if ( !selectedLanguage  ) return <h3>Nessun linguaggio selezionato</h3>

        const { title, description } = selectedLanguage
        return(
            <Card title={title} description={description} />

        )
    }

    return(
        <main className="container">
            <div className="mb-4"> 
                {renderLanguage ()}

            </div>
            <div>
                { renderLanguage ()}
            </div>
        </main>
    )
 


    /*return(

        <>

        {
            languages.map( ( element )  => {
                return (
                    <Button key={element.id} title={element.title} />

                )

            } )
        }
        
        <Card/>



        </>




    )*/


}

export default Main;