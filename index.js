"use strict";

/*
 * Name: Nikhil Alapati
 * Date: 5/8/2020
 * Section: CSE 154 A/AC
 *
 * This is the JavaScript for the index.html this document calls the lyrics.ovh api
 * and shows the lyrics to the user and if the request failed shows a message
 *
 */
(function() {
  const BASE_URL = "https://api.lyrics.ovh/v1/";
  let artistName = "";
  let songName = "";

  /**
   * Calls init when web page is loaded to prevent unloaded elements accessed by JS
   */
  window.addEventListener("load", init);

  /**
   * is called when the window is loaded and adds a event listener to the submit button
   */
  function init() {
    id("submit-btn").addEventListener("click", makeRequest);
  }

  /**
   * called when submit button is clicked
   * it removes the error message for wrong input if exists
   * and gets the desired song and creates a link for API
   * and then fetches it
   */
  function makeRequest() {
    if (!id("error").classList.contains("hidden")) {
      id("error").classList.add("hidden");
    }
    artistName = id("input-artist").value;
    songName = id("input-song").value;
    let url = BASE_URL + artistName + "/" + songName;
    fetch(url)
      .then(checkStatus)
      .then((resp) => resp.json()) // or this if your data comes in JSON
      .then(processData)
      .catch(handleError); // define a user-friendly error-message function
  }

  /**
   * called when the data arrived from api and it gets the lyrics and
   * displays it in the browser
   * @param {object} responseData the data returned by API
   */
  function processData(responseData) {
    let lyricSection = id("song-lyrics");
    lyricSection.innerHTML = "";
    let lyrics = gen("p");
    lyrics.textContent = responseData.lyrics;
    lyricSection.appendChild(lyrics);
  }

  /**
   * called when the data is retrieved used to check if the lyrics for the input exists
   * if it exists then it returns the input
   * else
   * it throws an error
   * @param {object} response response from the server
   * @returns {object} response response from the server
   */
  function checkStatus(response) {
    if (response.ok) {
        return response;
    }
    return new Error("Response Status Text: " + response.statusText);
  }

  /**
   * called when the input lyrics doesnt exist and it clears the lyrics on screen
   * and shows an error message
   */
  function handleError() {
    id("song-lyrics").innerHTML = "";
    if (id("error").classList.contains("hidden")) {
      id("error").classList.remove("hidden");
    }
  }

  /** ------------------------------ Helper Functions  ------------------------------ */
  /**
   * Note: You may use these in your code, but remember that your code should not have
   * unused functions. Remove this comment in your own code.
   */

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();
