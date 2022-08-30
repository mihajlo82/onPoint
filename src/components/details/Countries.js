import detailsStyle from './Details.module.css'

const Countries = ({val}) => {
  return (
    <div className={detailsStyle.countryWrapp}>
        {val.map( item => <span key={item.id} className={detailsStyle.country}>{item.name}</span> )}
    </div>      
  )
}

export default Countries