import './index.css'

const LatestMatch = props => {
  const {eachMatch} = props
  const {date, venue} = eachMatch
  return (
    <div>
      <p>{date}</p>
      <p>{venue}</p>
    </div>
  )
}
export default LatestMatch
