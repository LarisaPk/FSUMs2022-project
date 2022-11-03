import React from 'react'

const Card = (props)=>{
    const card = {    
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent:'space-between',
        alignItems: 'center',
        marginTop: '7em', 
        paddingBottom: '1em', 
        backgroundColor: '#D9D9D9',
        margin:'0.5em',
        borderRadius: '0.5em',
        boxShadow: '5px 5px 2px grey'
      } 

      const container = {
        maxWidth: '100%',
        maxHight: '80%',
        textAlign: 'center',
        padding:'2em'
      }

      const imageStyle = {
        width: '90%',
        paddingTop:'1em'
      }

    return (
          <div style={card}>
            <img style={imageStyle} src={props.post.image} alt=''></img> 
            <div style={container}>  
            </div>               
          </div>
    )
}
export default Card