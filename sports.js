const searchTeam = () => {
  // const inputSearch = document.getElementById("input-search");
  // const input = inputSearch.value;
  fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php")
    .then((res) => res.json())
    .then((data) => displaySports(data.sports));
};
searchTeam();
const displaySports = (sports) => {
  console.log(sports);
  const showTeams = document.getElementById("show-teams");
  sports.forEach((sport) => {
    console.log(sport);
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card h-100">
        <img src="${sport.strSportThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">ID: ${sport.idSport}</h5>
          <p class="card-title">Format: ${sport.strFormat}</p>
          <h5 class="card-title">Sport: ${sport.strSport}</h5>
          <p class="card-title">${sport.strSportDescription.slice(0, 200)}</p>
          <p class="card-title">Link: ${sport.strSportIconGreen}</p>
          
        </div>
      </div>
        `;
    showTeams.appendChild(div);
  });
};

// const searchTeam = () => {
//   const inputSearch = document.getElementById("input-search");
//   const inputSearchText = inputSearch.value;
//   inputSearch.value = "";
//   const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputSearchText}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => displayTeams(data.teams));
// };
// const displayTeams = (teams) => {
//   const showTeams = document.getElementById("show-teams");
//   showTeams.textContent = "";
//   teams.forEach((team) => {
//     console.log(team.strCountry);
//     const div = document.createElement("div");
//     div.classList.add("col");
//     div.innerHTML = `
//     <div class="card h-100">
//     <h5 class="card-title">Badge</h5>
//     <img src="${team.strTeamBadge}" class="card-img-top" alt="..." />
//     <div class="card-body">
//       <h5 class="card-title">ID: ${team.idTeam}</h5>
//       <h5 class="card-title">Name: ${team.strTeam}</h5>
//       <h5 class="card-title">Country: ${team.strCountry}</h5>
//       <h5 class="card-title">League: ${team.strLeague}</h5>
//       <h5 class="card-title">sport: ${team.strSport}</h5>
//       <p class="card-text"></p>
//     </div>
//   </div>
//     `;
//     showTeams.appendChild(div);
//   });
// };
