import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {
    initialData: [],
  }

  componentDidMount() {
    this.teamMatchesApiUrl()
  }

  teamMatchesApiUrl = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const requestUrl = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const responseData = await requestUrl.json()

    const newData = {
      bannerUrl: responseData.team_banner_url,
      latestMatchesDetails: {
        competingTeam: responseData.latest_match_details.competing_team,
        competingTeamLogo:
          responseData.latest_match_details.competing_team_logo,
        date: responseData.latest_match_details.date,
        firstInnings: responseData.latest_match_details.first_innings,
        id: responseData.latest_match_details.id,
        manOfTheMatch: responseData.latest_match_details.man_of_the_match,
        matchStatus: responseData.latest_match_details.match_status,
        result: responseData.latest_match_details.result,
        secondInnings: responseData.latest_match_details.second_innings,
        umpires: responseData.latest_match_details.umpires,
        venue: responseData.latest_match_details.venue,
      },
      recentMatchesDetails: responseData.recent_matches.map(each => ({
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        date: each.date,
        firstInnings: each.first_innings,
        id: each.id,
        manOfTheMatch: each.man_of_the_match,
        matchStatus: each.match_status,
        result: each.result,
        secondInnings: each.second_innings,
        umpires: each.umpires,
        venue: each.venue,
      })),
    }
    this.setState({initialData: newData})
  }

  render() {
    const {initialData} = this.state
    const {bannerUrl, latestMatchesDetails} = initialData
    console.log(latestMatchesDetails)

    return (
      <div className="team-match-container">
        <div className="banner-image-container">
          <img src={bannerUrl} className="banner-img" />
        </div>
        <LatestMatch eachMatch={latestMatchesDetails} />
      </div>
    )
  }
}
export default TeamMatches
