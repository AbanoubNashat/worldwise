import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CityItem from "./CityItem";

function CityList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  if (!cities.length) {
    return (
      <Message message={"Add Your Cities Now By Clicking On the Map"}></Message>
    );
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => <CityItem city={city} key={city.id}></CityItem>)}
    </ul>
  );
}

export default CityList;
