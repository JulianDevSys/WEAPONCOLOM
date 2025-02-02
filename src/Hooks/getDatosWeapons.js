


export default async function getDatosWeapons(){
    try{
        const url= "http://localhost:8000"
        const response= await fetch(url)
        const data= await response.json()
        return data

    }catch(e){
        console.error("error al traer los productos", e)
    }

}