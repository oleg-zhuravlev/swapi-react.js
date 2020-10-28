import hocRandom from '../hocHelpers/hocRandom';
import hocWithSwapiService from '../hocHelpers/hocWithSwapiService';
import PlanetDetailsView from './details/PlanetDetailsView';

const mapMethodsToProps = (swapiService) => ({
  getData: swapiService.getPlanet,
  getImage: swapiService.getPlanetImage
});

export const RandomPlanet = hocWithSwapiService(
  hocRandom(PlanetDetailsView),
  mapMethodsToProps
);
