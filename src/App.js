import React from 'react'

function App(){
let Greeting=''
const cssstyle={}


let currdate=new Date()
currdate= currdate.getHours();
if(currdate>=1&&currdate<=12){
  Greeting= "Good Morning";
  cssstyle.color= "green"

}

  else if (currdate>=13&&currdate<=20) {
    Greeting = "Good Evening"
    cssstyle.color= "orange"
  } 
  else {
    Greeting = "Good Night"
    cssstyle.color= "black"
  }
  return(
    <>
    <div>
      <h1> Hello sir,    <span style={cssstyle}>{Greeting}</span></h1>
    </div>
    </>
  )
}
    
  




export default App;
