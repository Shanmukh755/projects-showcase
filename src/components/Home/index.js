import {Component} from 'react'
import OptionElement from '../OptionElement'
import ProjectCard from '../ProjectCard'
import {
  HomeBgContainer,
  NavbarContainer,
  WebsiteLogo,
  ProjectsContainer,
  SelectBox,
  ProjectsListContainer,
} from './styledComponents'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

class Home extends Component {
  state = {
    projectsList: [],
    activeId: categoriesList[0].id,
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
      this.setState({projectsList: updatedData})
    }
  }

  render() {
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
}

export default Home
