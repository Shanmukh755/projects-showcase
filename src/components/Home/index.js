import {Component} from 'react'
import OptionElement from '../OptionElement'
import ProjectCard from '../ProjectCard'
import Loader from 'react-loader-spinner'
import {
  HomeBgContainer,
  NavbarContainer,
  WebsiteLogo,
  ProjectsContainer,
  SelectBox,
  ProjectsListContainer,
  FailureContainer,
  FailureDes,
  FailureHead,
  FailureImg,
  RetryBtn,
} from './styledComponents'
import './index.css'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    projectsList: [],
    activeId: categoriesList[0].id,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getProjectsList()
  }

  onChangeOption = event => {
    const newActiveId = event.target.value
    this.setState({activeId: newActiveId}, () => {
      this.getProjectsList()
    })
  }

  getProjectsList = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {activeId} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/ps/projects?category=${activeId}`,
    )
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.projects.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
      }))
      this.setState({
        projectsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {activeId, projectsList} = this.state
    return (
      <HomeBgContainer>
        <NavbarContainer>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
          />
        </NavbarContainer>
        <ProjectsContainer>
          <SelectBox onChange={this.onChangeOption} value={activeId}>
            {categoriesList.map(each => (
              <OptionElement eachOption={each} key={each.id} />
            ))}
          </SelectBox>
          <ProjectsListContainer>
            {projectsList.map(each => (
              <ProjectCard cardData={each} key={each.id} />
            ))}
          </ProjectsListContainer>
        </ProjectsContainer>
      </HomeBgContainer>
    )
  }

  renderLoadingView = () => {
    return (
      <div data-testid="loader" className="loading-cont">
        <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
      </div>
    )
  }

  onClickRetry = () => {
    this.getProjectsList()
  }

  renderFailureView = () => {
    return (
      <FailureContainer>
        <FailureImg
          src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
          alt="failure view"
        />
        <FailureHead>Oops! Something Went Wrong</FailureHead>
        <FailureDes>
          We cannot seem to find the page you are looking for.
        </FailureDes>
        <RetryBtn onClick={this.onClickRetry}>Retry</RetryBtn>
      </FailureContainer>
    )
  }

  render() {
    const {apiStatus} = this.state
    console.log(apiStatus)
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.loading:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }
}

export default Home
