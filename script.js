fetch("https://restcountries.com/v3.1/all")
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to retrieve country data.");
    }
  })
  .then(countries => {
    // Iterate over each country
    countries.forEach(country => {
      // Extract the required information
      const name = country.name.official;
      const region = country.region;
      const subregion = country.subregion;
      const flag = country.flags[0];

      // Print the information and flag
      console.log("Name: " + name);
      console.log("Region: " + region);
      console.log("Subregion: " + subregion);
      console.log("Flag: " + flag);
      console.log("\n");
    });
  })
  .catch(error => {
    console.error(error);
  });
