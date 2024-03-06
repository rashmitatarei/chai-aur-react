import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

 function  MyApp(){
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
 }
//  const reactElement1 = {
//   type: "a",
//   props:{
//     href:"https://google.com",
//     target:"_blank"
//   },
//   children: "Click me to visit google"
//  }
 const anotherElemt = (
  <a href ="https://google.com" target='_blank'>Vist  Google</a>
 )

 const anotherUser = "chai aur react"
 const  reactElement = React.createElement(
   'a',
   {href: 'https://google.com',target:'_blank'},
   'click me to visit google',
   anotherUser
 )
ReactDOM.createRoot(document.getElementById('root')).
render(
  
 // <App/>
//  <MyApp/>

// reactElement
anotherElemt 


  
)
