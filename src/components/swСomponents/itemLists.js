import hocList from '../hocHelpers/hocList';
import hocWithSwapiService from '../hocHelpers/hocWithSwapiService';
import ItemList from '../itemListView/ItemListView';

const renderPerson = ({name, gender}) => `${name} (${gender})`;
const renderPlanet = ({name, diameter}) => `${name} (${diameter})`;
const renderStarship = ({name, model}) => `${name} (${model})`;

const mapPersonMethodsToProps = (swapiService) => ({
    getData: swapiService.getAllPeople
});
const mapPlanetMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllPlanets
});
const mapStarshipMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllStarships
});

const PersonList = hocWithSwapiService(
  hocList(ItemList, renderPerson),
  mapPersonMethodsToProps
);
const PlanetList = hocWithSwapiService(
  hocList(ItemList, renderPlanet),
  mapPlanetMethodsToProps
);
const StarshipList = hocWithSwapiService(
  hocList(ItemList, renderStarship),
  mapStarshipMethodsToProps
);

export {
  PlanetList,
  PersonList,
  StarshipList
}
