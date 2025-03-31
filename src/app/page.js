"use client";

import { LeftSide } from "./components/Left";
import { CircleM } from "./components/MiddleCircle";
import { RightSide } from "./components/Right";
import { Search } from "./components/Search";
import { useEffect, useState } from "react";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState({});
  const [selectedCity, setSelectedCity] = useState("Ulan Bator");
  const [searchValue, setSearchValue] = useState("");
  const [dayTemperature, setDayTemperature] = useState("");
  const [nightTemperature, setNightTemperature] = useState("");
  const [dayCondition, setDayCondition] = useState("");
  const [nightCondition, setNightCondition] = useState("");

  const [loading, setLoading] = useState(true);

  async function getCountries() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let incomeCities = data.data.map((country) => {
      let countries = country.cities.map((city) => {
        return { country: country.country, city: city };
      });
      return countries;
    });

    incomeCities = incomeCities.flat();
    setCities(incomeCities);
  }

  const searchHandler = (e) => {
    const search = e.target.value.toLowerCase();
    setSearchValue(search.toLowerCase());

    const filtered = cities.filter((city) => {
      if (!search) {
        return false;
      }
      const realCity = city.city;
      return realCity.toLowerCase().includes(search);
    });
    setSearched(filtered);
  };

  const handlerSelect = (city) => {
    let realCity = city.city;
    setSelectedCity(realCity);
    setSearched([]);
    setSearchValue("");
    getForecast(realCity);
  };

  async function getForecast(selectedCity) {
    const result = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=35bdba08acb445e7bf421157250801&q=${selectedCity}`
    );

    const data = await result.json();

    setDayTemperature(data.forecast.forecastday[0].day.maxtemp_c);

    setNightTemperature(data.forecast.forecastday[0].day.mintemp_c);

    setDayCondition(data.forecast.forecastday[0].hour[14].condition.text);

    setNightCondition(data.forecast.forecastday[0].hour[0].condition.text);

    setLoading(false);
  }

  useEffect(() => {
    getCountries();

    getForecast(selectedCity);
  }, []);
  return (
    <>
      <div className="flex w-[100vw] h-[100vh] justify-center items-center">
        <Search
          handlerSelect={handlerSelect}
          search={searchHandler}
          searched={searched}
          searchValue={searchValue}
        />
        <CircleM />
        <LeftSide
          selectedCity={selectedCity}
          dayTemp={dayTemperature}
          condition={dayCondition}
          loading={loading}
        />
        <RightSide
          selectedCity={selectedCity}
          nightTemp={nightTemperature}
          condition={nightCondition}
          loading={loading}
        />
      </div>
    </>
  );
}
