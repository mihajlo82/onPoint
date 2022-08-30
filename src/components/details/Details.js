import Countries from './Countries'
import detailsStyle from './Details.module.css'
import Title from './Title'
import React from 'react'

const Details = ({val, setVal}) => {
  return (
    <section className={detailsStyle.innerSection}>
        <Title val={val} />
        <Countries val={val} setVal={setVal} />
    </section> 
  )
}

export default Details