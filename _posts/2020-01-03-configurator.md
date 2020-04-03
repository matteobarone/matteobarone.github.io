---
title: configurator
permalink: /configurator/
layout: post
cover: img/configurator.jpg
goal: rest API for data management in CSV format
---

<h2>brief</h2>
<p>We had the necessity to create a configurator to filter down data and reach a result of one or more configurations from a dataset</p>

<h2>technologies</h2>
<p>We decide to develop the whole project in javascript, to explore the powerful tools that this language can give to developers</p>
<p>The project has three main parts: a javascript component, an admin panel and both call a set of API</p>
<p>The component and the admin are angular applications, while the API are developed in nodejs</p>

<img src="../img/configurator/stack.svg" alt="technologies used: typescript + node + express + mongoDB" />

<h2>typescript + node + express + mongoDB</h2>
<p>We used expressjs as node framework, flexible and minimal, and mongoDB with mongoose to handle reading and writing operations on database.</p>
<p>The entire project was written and tested in typescript, and we follow an architecture structure divided in:</p>

- Routes

- Controllers

- Use Cases

- Services
