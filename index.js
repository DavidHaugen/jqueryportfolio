'use strict';
/*global $ */

function handleHomeClick(){
  $('#home-link').on('click', function(event){
    event.preventDefault();
    $('.home').removeClass('hidden');
    $('.project').addClass('hidden');
    $('.about-me').addClass('hidden');
  });
}

function handleProjectsClick(){
  $('#projects-link').on('click', function(event){
    event.preventDefault();
    $('.project').removeClass('hidden');
    $('.home').addClass('hidden');
    $('.about-me').addClass('hidden');
  });
}

function handleProjectsButton(){
  $('.projects-link-button').on('click', function(event){
    event.preventDefault();
    console.log('click')
    $('.project').removeClass('hidden');
    $('.home').addClass('hidden');
    $('.about-me').addClass('hidden');
  });
}


function handleAboutClick(){
  $('#about-link').on('click', function(event){
    event.preventDefault();
    $('.about-me').removeClass('hidden');
    $('.home').addClass('hidden');
    $('.project').addClass('hidden');
  });
}

function bindEventListeners(){
  handleHomeClick();
  handleProjectsClick();
  handleAboutClick();
  handleProjectsButton();
}

$(bindEventListeners);