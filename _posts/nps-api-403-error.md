---
title: NPS API mysterious 403 error
date: "2020-05-10"
spoiler: Needs user-agent header on few routes.
cta: "react"
---

TLDR : Pass user agent when sending requests to NPS API.

Huge fan of national parks in the US. I thought it would be fun to work with some of the data they have, luckily they have an [API](https://www.nps.gov/subjects/developer/api-documentation.htm) service. Registered an account, it had good documentation, and was easy to use except for one problem. It was returning HTTP 403 error, for all except one route.

I started working on building a GraphQL wrapper API and consume it in a React app later on. I started with python's FastAPI, but soon ran into problem passing GraphQL variables which it didnt like / I couldnt get it to work.

I turned to Javascript, setup an environment to use [apollo-server](https://www.apollographql.com/docs/apollo-server/). I need to call a rest API, apollo has a package built for this - [apollo-datasource-rest](https://www.npmjs.com/package/apollo-datasource-rest). Cool. I started building the API, everthing worked good so far, for the first route [/activities](https://www.nps.gov/subjects/developer/api-documentation.htm). I added the next route and I get hit with the 403 error from NPS API service, I couldnt figure out what was causing this. I run the service through Postman, data is returned, everything is fine there. I turn back to Python for a bit, add mapping for the route that didnt work, mysteriously the route worked fine on Python. I debated moving back to Python, but I didnt have the capability or knowledge to fix the issues that I had faced earlier. Back to Node. I probably spent around 10 hours, trying to figure out this one issue. I even sent an email from NPS API contact page, didnt get reply. At this point, I tried all combinations I could think of. I moved api key from URL to setting it in header. Open URL in browser, it seemed to work fine(Honestly, this was the clue I didnt catch on). Nothing worked, I gave up for a day and went back to playing video games.

Out of fluke/luck, I add user-agent header to the outgoing API request, and voila it worked! I got back useful data. I can get back to deving.

I am guessing, node-fetch request doesnt add any user-agent to the request. Python's request library adds a default UA string if nothing is specified.

The user agent that worked for me - "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"
