import languages from "../data/languages";
import Button from "./Button";
import Card from "./card";


const Main = () => {
    return(

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




    )


}

export default Main;