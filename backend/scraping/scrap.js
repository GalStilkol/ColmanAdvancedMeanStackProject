request = require('request');
cheerio = require('cheerio');
fs = require('fs');
const Scraper = require('../../backend/models/‏‏scrap');
const recipeScraper = require("recipe-scraper");


const express = require("express");
const bodyParser = require("body-parser");



const mongoose = require('mongoose');
//mongoose.connect("mongodb+srv://Fox:"+ 'Wb6CZi82Z8t5u9dO' +"@cluster0-ugkpd.mongodb.net/node-angular?retryWrites=true&w=majority")
mongoose.connect("mongodb://localhost:27017/tester")
.then(()=>{
  console.log('Connected to database');
}).catch(()=>{
  console.log('Connection failed');
});


async function someAsyncFunc() {
  
  let recipe = await recipeScraper("https://www.allrecipes.com/recipe/23751/soft-molasses-cookies-v/");
}

recipeScraper("https://www.allrecipes.com/recipe/23751/soft-molasses-cookies-v/").then(recipe => {
  console.log("success~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
  console.log(recipe)
  scraper = new Scraper({
    title: recipe.name,
    description: recipe.description,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
    servings: recipe.servings,
    imagePath : recipe.image


  });

  scraper.save().then(result => {
  })
  .catch(err => {
  });

}).catch(error => {
  console.log("Error~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
  console.log(error)
});

console.log("finishedbe4async")



/* example code to extract information
 $('div.col1 > ul > li.grid-posts__item').each(function( index ) {
    title = $(this).find('h2 > a').text().trim();
    author = $(this).find('div.small-meta > div:nth-child(1) > a').text().trim();
    responses = $(this).find('div.small-meta > div:nth-child(3) > a').text();
    console.log(title);
    console.log(author);
    console.log(responses);
    fs.appendFileSync('buzzfeed.txt', title + '\n' + author + '\n' + responses + '\n');
  });

*/
