const Title = ({val}) => {
  return <h2>You have visited {val.length} {val.length > 1 ? 'states' : 'state'}</h2> 
}

export default Title