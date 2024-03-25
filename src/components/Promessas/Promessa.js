import { useEffect, useState } from "react"

const minhaPromessa = new Promise(
    (resolve, rejected) => {
        setTimeout(
            ()=> {
                const meuNumero = Math.floor(Math.random() * 10) + 1;
                if(meuNumero %2 === 0) resolve("Tudo certo")
                else rejected ("Deu pau")
            }, 2000
        )
    }
)

const ComponentePromessa = () =>{

    const [resultado, setResultado] = useState();

    async function apiGetPromessa(){
        try{
            const res = await minhaPromessa;
            setResultado(res);
        }catch(error){
            setResultado(error);
        }
    }

    useEffect(()=>{
        apiGetPromessa();
    }, [])

    return(
        <>
            <h2>Moto</h2>
            <h2>{resultado}</h2>
        </>
    )
}


export default ComponentePromessa;
