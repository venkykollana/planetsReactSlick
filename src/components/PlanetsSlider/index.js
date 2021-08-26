import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import {
  PlanetsAppContainer,
  PlanetsCarouselContainer,
  PlanetsHeading,
} from './styledComponents'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <PlanetsAppContainer data-testid="planets">
      <PlanetsCarouselContainer>
        <PlanetsHeading>PLANETS</PlanetsHeading>
        <Slider {...settings}>
          {planetsList.map(eachPlanet => (
            <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
          ))}
        </Slider>
      </PlanetsCarouselContainer>
    </PlanetsAppContainer>
  )
}

export default PlanetsSlider
