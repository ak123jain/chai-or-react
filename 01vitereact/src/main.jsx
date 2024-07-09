import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
 
function MyApp(){
    return(
        <div>
            <h1>custom app</h1>
        </div>
    )
}

// const ReactElement = {
//     type : 'a',
//     props:{
//         href:'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank' >google</a>
)

const anotheruser = "chai or reacy"

const reactElement = React.createElement(
    'a',
    {href : 'https://google.com' , target : 'blank_1'},
    'click me to visit google',
    anotheruser
)



ReactDOM.createRoot(document.getElementById('root')).
render(  
      reactElement
    //  <App />
)





