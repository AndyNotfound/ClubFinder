import clubs from "./clubs.js";

export default class DataSource{
  static searchClub(keyword){
    return new Promise ((resolve, reject) => { 
      const filteredClubs = clubs.filter(club => {
        return club.name.toUpperCase().includes(keyword.toUpperCase());
      });

      if (filteredClubs.length) {
        resolve(filteredClubs);
      } else {
        reject(`${keyword} is not found`);
      }
    })
  }
}