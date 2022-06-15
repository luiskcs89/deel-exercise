import React from "react";
import "./Autocomplete.css";

interface CountryData {
  name: { common: string };
}

function Autocomplete() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [countries, setCountries] = React.useState<string[]>([]);

  const findMatches = async (value: string) => {
    setSearchTerm(value);
    try {
      const result = await fetch(
        `https://restcountries.com/v3.1/name/${value}?fields=name`
      ).then((res) => res.json());
      if (result && !result.message) {
        const resultStrings: string[] = [];
        result.forEach((c: CountryData) => {
          const countryName = c.name.common;
          const countryNameLowerCase = countryName.toLowerCase();
          const matchIndex = countryNameLowerCase.indexOf(value.toLowerCase());
          if (matchIndex >= 0) {
            resultStrings.push(
              countryName.substring(0, matchIndex) +
                "<b>" +
                countryName.substring(matchIndex, matchIndex + value.length) +
                "</b>" +
                countryName.substring(
                  matchIndex + value.length,
                  countryName.length
                )
            );
          }
        });
  
        setCountries(resultStrings);
      } else {
        setCountries([]);
      }
    } catch (e) {
      setCountries([]);
    }
    
  };

  const selectCountry = (country: string) => {
    findMatches(
      country
        .replace(new RegExp("<b>", "g"), "")
        .replace(new RegExp("</b>", "g"), "")
    );
  };

  return (
    <div className="container">
      <h1 className="title">Search your country</h1>
      <input
        type="text"
        onChange={(e) => findMatches(e.target.value)}
        value={searchTerm}
      ></input>
      {countries && countries.length ? (
        <ul>
          {countries.map((country: string) => (
            <li
              onClick={() => selectCountry(country)}
              key={country}
              dangerouslySetInnerHTML={{ __html: country }}
            ></li>
          ))}
        </ul>
      ) : searchTerm ? <p className="no-matches">No matches</p> : null}
    </div>
  );
}

export default Autocomplete;
