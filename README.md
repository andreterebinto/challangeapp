# Platform Challenge App

## Example

Platform developed to perform API consumption tests with demo in Dashboard.

#### Frameworks and tools used

As requested, openSources tools were used based on Javascript, Typescript,  HTML and CSS described below:
- NEXT.JS (Framework REACT);
- REACT Template;
- Docker (Container development)

#### The Rick and Morty API https://rickandmortyapi.com/api/

API que consiste em retornar dados JSON de The Rick and Morty.

## Installation

1- Install [Docker](https://www.docker.com/products/docker-desktop "Docker Download") locally or use environments that contain docker.  
2- After installing docker create a file called docker-compose.yml on your local machine.  
3- Copy and paste the code below into the file.  
```json
version: '3'
services:
    server:
        image: andreterebinto84/challangeapp:react
        ports:
            - "3000:3000"

```

4- Access your machine's terminal, and enter the folder where you saved the docker-compose.yml file  
5- type the command "docker-compose up", with that the project will be executed.  
6- Access the browser http://localhost:3000 

###### NOTE: If you can't create the file, it exists here in the project's repository, in the root folder.
-----

## Helper

If no way above is possible, it is possible to download the docker image directly from dockerHub, with the following command.
```json
docker pull andreterebinto84/challangeapp:react
```

## Author

Andre Terebinto, andreterebinto@hotmail.com