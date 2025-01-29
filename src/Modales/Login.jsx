


export default function Login({closeModal}){
    return(
        <div className="container_register">

            <div className="input_register"> 

                <div className="close">
                <button className="close_register" onClick={closeModal}>X</button> 
                </div>

            <div className="form"> 
            <input className="style_input" type="email" placeholder="email" />
            <input className="style_input" type= "password" placeholder="password" />
            </div>

            <div className="btn">   
                <button className="btn_register" >Login</button>
                </div>

            </div>

        </div>
    )
}