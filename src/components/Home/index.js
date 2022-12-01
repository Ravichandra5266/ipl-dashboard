import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    initialTeamCardList: [],
  }

  componentDidMount() {
    this.teamsApiUrl()
  }

  teamsApiUrl = async () => {
    const requestUrl = await fetch('https://apis.ccbp.in/ipl')
    const responseData = await requestUrl.json()
    // console.log(responseData)
    const modifiedResponseData = responseData.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({initialTeamCardList: modifiedResponseData})
  }

  render() {
    const {initialTeamCardList} = this.state
    // console.log(initialTeamCardList)
    return (
      <div className="home-container">
        <div className="home-card-logo-content">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="home-logo"
          />
          <h1 className="home-title">IPL Dashboard</h1>
        </div>
        <ul className="container-list-team-cards">
          {initialTeamCardList.map(each => (
            <TeamCard eachTeamDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
