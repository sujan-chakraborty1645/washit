import react from 'react';




export let Our=()=>{
    return(
        <>
        <h2 className="ourheadline">Our Services</h2>
        <div className="our">
        <Ourservice 
        title="cleaning"/>
        <Ourservice title="washing"/>
        <Ourservice title="washing"/>
        <Ourservice title="washing"/>
        <Ourservice title="washing"/>
         </div>
        </>
    )
}

let Ourservice=(props)=>{
    return(
        <>
          <div className="ourservice">
              <h3>{props.title}</h3>

          </div>
        </>
    )
}