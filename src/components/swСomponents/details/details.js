import hocDetails from '../../hocHelpers/hocDetails';
import hocWithSwapiService from '../../hocHelpers/hocWithSwapiService';
import PersonDetailsView from './PersonDetailsView';
import PlanetDetailsView from './PlanetDetailsView';
import StarshipDetailsView from './StarshipDetailsView';

const mapPersonMethodsToProps = (swapiService) => ({
  getData: swapiService.getPerson,
  getImage: swapiService.getPersonImage
});
const mapPlanetMethodsToProps = (swapiService) => ({
    getData: swapiService.getPlanet,
    getImage: swapiService.getPlanetImage
});
const mapStarshipMethodsToProps = (swapiService) => ({
  getData: swapiService.getStarship,
  getImage: swapiService.getStarshipImage
});

const PersonDetails = hocWithSwapiService(
  hocDetails(PersonDetailsView),
  mapPersonMethodsToProps
);
const PlanetDetails = hocWithSwapiService(
  hocDetails(PlanetDetailsView),
  mapPlanetMethodsToProps
);
const StarshipDetails = hocWithSwapiService(
  hocDetails(StarshipDetailsView),
  mapStarshipMethodsToProps
);

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}
