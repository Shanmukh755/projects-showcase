import {
  ListItemContainer,
  CardImage,
  CardDataCont,
  CardName,
} from './styledComponents'

const ProjectCard = props => {
  const {cardData} = props
  const {id, name, imageUrl} = cardData
  return(
    <ListItemContainer>
      <CardImage src={imageUrl} alt={name} />
      <CardDataCont>
        <CardName>{name}</CardName>
      </CardDataCont>
    </ListItemContainer>
  )
}

export default ProjectCard
