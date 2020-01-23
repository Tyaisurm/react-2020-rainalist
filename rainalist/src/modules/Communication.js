const axios = require("axios").default;
const settings = {
  api_key: "fbf7342dc20ce4e8b8b452b6a5792f4d",
  api_base: "https://api.themoviedb.org/3",
  backend_address: "localhost",
  backend_port: 3001
};

function authUser(username = null, password = null) {}

function getUserProfile(uuid = -1) {
  const url =
    settings.backend_address +
    ":" +
    settings.backend_port +
    "/api/user/" +
    uuid +
    "/profile";
}
function getUserLists(uuid = -1) {
  const url =
    settings.backend_address +
    ":" +
    settings.backend_port +
    "/api/user/" +
    uuid +
    "/lists";
}
/* status: -1 = not interested/not going to watch(purple); 0 = watching (green); 1 = plan to watch (yellow); 2 = seen (blue); 3 = halted(orange); 4 = dropped(red)*/
function postListUpdate(
  uuid = -1,
  programName = "__TEMPNAME__",
  programID = -1,
  totalEpisodes = 1,
  totalSeasons = 1,
  episode = 1,
  season = 1,
  status = 0
) {
  const url =
    settings.backend_address +
    ":" +
    settings.backend_port +
    "/api/user/" +
    uuid +
    "/lists";
}
function postCreateCustomList() {}

function getDetailsMovie(id = -1) {
  const url =
    settings.api_base +
    "/movie/" +
    id +
    "?api_key=" +
    settings.api_key +
    "&language=en-US&append_to_response=images,keywords,credits,content_ratings,similar,translations,alternative_titles,recommendations&include_image_language=en,null";
  return tmdbQuery(url);
}
function getDetailsTv(id = -1) {
  const url =
    settings.api_base +
    "/tv/" +
    id +
    "?api_key=" +
    settings.api_key +
    "&language=en-US&append_to_response=images,keywords,credits,content_ratings,similar,translations,alternative_titles,recommendations&include_image_language=en,null";
  return tmdbQuery(url);
}

function getSearchAPI() {
  return [
    settings.api_base +
      "/search/tv?api_key=" +
      settings.api_key +
      "&language=en-US&page=1&include_adult=true&query=",
    settings.api_base +
      "/search/movies?api_key=" +
      settings.api_key +
      "&language=en-US&page=1&include_adult=true&query="
  ];
}

function getTrendingMovies() {
  const url =
    settings.api_base + "/trending/movie/week?api_key=" + settings.api_key;
  return tmdbQuery(url);
}
function getTrendingTv() {
  const url =
    settings.api_base + "/trending/tv/week?api_key=" + settings.api_key;
  return tmdbQuery(url);
}

async function tmdbQuery(url = null) {
  try {
    const response = await axios.get(url);
    // handle success
    return response.data;
  } catch (error) {
    // handle error
    return null;
  }
}

module.exports = {
  getDetailsMovie: getDetailsMovie,
  getDetailsTv: getDetailsTv,
  getTrendingMovies: getTrendingMovies,
  getTrendingTv: getTrendingTv,
  getSearchAPI: getSearchAPI,
  authUser: authUser
};

/*

https://api.themoviedb.org/3/tv/71738?api_key=xxxx&language=en-US&append_to_response=images%2Ckeywords%2Ccredits%2Ccontent_ratings%2Csimilar%2Crecomendations%2Ctranslations%2Cepisode_groups%2Cchanges%2Calternative_titles&
https://api.themoviedb.org/3/tv/%7Btv_series_id%7D?api_key=%7Bapi_key%7D&language=en-US&append_to_response=images%2Ckeywords%2Ccredits%2Ccontent_ratings%2Csimilar%2Ctranslations%2Cchanges%2Calternative_titles%2Crecommendations&include_image_language=en,null
https://api.themoviedb.org/3/movie/idxxxxxx?api_key=keyxxxxxxxxxx&language=en-US&append_to_response=images,keywords,credits,content_ratings,similar,translations,alternative_titles,recommendations&include_image_language=en,null
https://api.themoviedb.org/3/trending/movie/week?api_key=%7Bapi_key%7D
https://api.themoviedb.org/3/trending/tv/week?api_key=%7Bapi_key%7D


include_image_language=en,null
*/
