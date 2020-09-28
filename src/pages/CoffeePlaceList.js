import React, {useEffect, useState} from "react";
import {Card} from "../components/Card";
import CoffeeHouseService from "../services/CoffeeHouseService";


const CoffeePlaceList = () => {
  const [data, setData] = useState({coffees: [], isFetching: false});
  const service = new CoffeeHouseService();


  useEffect(() => {
    const fetchCoffeePlace = async () => {
      setData({coffees: [], isFetching: true});
      service.getAllCoffeeHouses().then(
          response => {
            setData({coffees: response, isFetching: false});
          }
      );
    };
    fetchCoffeePlace();
  }, []);

  return (
      <div className="px1">
        <h1 className="h3 caps mb5">List of Coffee houses in Berlin</h1>

        <div className="clearfix">
          {data.coffees.map( coffee =>
              <div className="col col-6 p1" key={coffee.id}>
                <Card {...coffee}/>
              </div>
          )}
        </div>
      </div>
  )
};

export default CoffeePlaceList;
