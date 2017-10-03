# Friend Finder

## What is it?

**A compatibility-based application used to find potential friends - basically a dating app.** This full-stack site has the user fill out a personality survey, then takes in results of the user's survey and compares their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

The site is currently deployed at https://shielded-meadow-16885.herokuapp.com/ .

## Technologies Used

* HTML5
* CSS3
* Javascript 
* JQuery
* APIs
* Node.js/npm
* Express
* Bootstrap

## Browser and Screen Compatibility

### Browser Tests

The site has been tested in Chrome, Firefox, and Internet Explorer. It works exactly as it should on all of these browsers, except the modal popup containing the "best match" friend can be a bit slow to display on IE. 

Plans to test on Safari are upcoming.

### Screen Compatibility Tests

The site is best viewed on a small to moderately large desktop or notebook (between 1280x800 and 1680x1050), but looks decent on essentially any modern device's screen resolution. This includes both a 10" and 12" Netbook, a 13" and 15" notebook, 19"-24" desktops, Kindle Fire, Asus Nexus 7, iPad and iPad Pro, Samsung Galaxy tab, Microsoft Surface Pro, iPhone 3 and up (including iPhone 6-7 plus), Galaxy S2 and up, LG G 3-5, and 480p, 720p and 1080p televisions. 

When the site is loaded properly, the homepage should look basically like this:

![Homepage](/app/public/homepage.JPG)

The survey page should look like this:

![Survey](/app/public/friendfinder.JPG)

The modal displaying the friend who is the "best match" should look like this:
![Modal](/app/public/modal.JPG)

## Future Plans for Improvement

* Make it so that users cannot click the "submit" button more than once when they are on the survey page (i.e., making it so that they cannot submit the same survey twice). 
* Possibly redirect users elsewhere (not sure where, possibly back to the homepage or to a blank copy of the survey) after they close the modal displaying the "best match" friend. Maybe put buttons in the modal with links to either of these options.
* Because the "submit" button can currently be clicked more than once on the survey page, some users are in the API multiple times. This doesn't affect the algorithm's ability to determine matches, so it is not important, but I would like to add a "delete" route to the API routing so that I can clean the existing duplicates out. 

