// Write your code here

import {
  PlanetContainer,
  PlanetImage,
  PlanetHeading,
  PlanetDescription,
} from './styledComponents'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <PlanetContainer>
      <PlanetImage src={imageUrl} alt={`planet ${name}`} />
      <PlanetHeading>{name}</PlanetHeading>
      <PlanetDescription>{description}</PlanetDescription>
    </PlanetContainer>
  )
}

export default PlanetItem
