# ECE651 Project - Cart Pool Frontend

## Description

Cart Pool is a web application that will address the problem of utilizing free space
a person might have in his cart while shopping in a store.

This repo contains the frontend code of the application. For the backend code go to
[ece651-backend](https://git.uwaterloo.ca/ece651proj/ece651-backend-end) repo.

## Contributing

In order to contribute follow these steps:

1. Clone repo locally

```
git clone ist-git@git.uwaterloo.ca:ece651proj/ece651-frontend.git
```

2. Create a new branch

```
cd ece651-frontend
git checkout -b "<author>/<feature_name>"
```

3. Make your changes

4. Commit and push your changes

```
git add <modified_file>
git commit -m "<commit message>"
```

5. Create a merge request on GitLab

6. Wait for review and make proper changes if necessary

7. Merge


## Building

```
cd ece651-frontend
npm start
```

## Testing

```
cd ece651-frontend
npm test
```

## Continuous Integration

Continuous integration pipeline steps:

1. [prebuild] - checkout to correct branch
2. [build] - runs a production build of the app
3. [test] - runs unit tests
4. [posttest] - runs coverage
5. [deploy] - deploy application to server

## Authors

* Ankush Kumar
* Aryan Kanwar
* Ayodeji Ihimodu
* Hosameldin Aldeeb
* Roberto Valenzuela
* Sai Suresh
