import React from 'react'

function Joke(props) {
     return(
         <div>
             <h3><font color="#12F92D">▍ВеСелЫе АнЕкДоТы</font></h3>
             <p>Joke #{props.number}</p>
             <p>▍{props.body}</p>
             <p style={{display: props.acter ? 'block' : 'none'}}>@{props.acter}</p>
             <hr></hr>
         </div>
        
     )
}

 export default Joke