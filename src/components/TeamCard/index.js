import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeamDetails} = props
  const {id, name, teamImageUrl} = eachTeamDetails
  return (
    <Link className="team-card-link" to={`/team-matches/${id}`}>
      <li className="list-container">
        <img src={teamImageUrl} className="team-img" alt={name} />
        <h1 className="team-title">{name}</h1>
      </li>
    </Link>
  )
}
export default TeamCard
