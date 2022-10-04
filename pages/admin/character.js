import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { useEffect, useState } from 'react';
import Icon from "@material-ui/core/Icon";
import { useRouter } from 'next/router'
import CustomInput from "components/CustomInput/CustomInput.js";
import InputLabel from "@material-ui/core/InputLabel";
import CardAvatar from "components/Card/CardAvatar.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import avatar from "assets/img/faces/marc.jpg";
import Link from "next/link";
import ListItem from "@material-ui/core/ListItem";
// layout for this page

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

function CharacterInfo() {

  const router = useRouter()
  const [data, setData] = useState([]);
  const [episode, setEpisode] = useState([]);
  const [location, setLocation] = useState('');
  const [origin, setOrigin] = useState('');
  
  useEffect(() => {

    const fetchData = async () => {
      try {
        const result = await fetch(`https://rickandmortyapi.com/api/character/`+router['query']['id']);
        const body = await result.json();
        console.log(body.location.name);
        setData(body);
        setLocation(body.location.name);
        setOrigin(body.origin.name);

        const arr = []
        Object.keys(body.episode).forEach(key => arr.push({name: key, value: body.episode[key]}))
        setEpisode(arr)
      } catch(err) {
        // error handling code
      } 
      
    }
    fetchData();
  
  }, [setData, setLocation, setOrigin, setEpisode])



  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div>
       <Link href={"/admin/table-list/"}>
                  <a>
              <ListItem>
              <Icon>arrow_circle_left</Icon>Back to the list
                </ListItem></a></Link>
    <GridContainer>
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>List of Episodies</h4>
            <p className={classes.cardCategoryWhite}></p>
          </CardHeader>
          <CardBody>
          <Table
              tableHeaderColor="primary"
              tableHead={["Episodie"]}
              tableData= {episode.map(item => (
                [item.value]
              ))}
            />
          </CardBody>
          <CardFooter>
           
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Card profile>
          <CardAvatar profile>
           
              <img src={data.image} alt="..." />
           
          </CardAvatar>
          <CardBody profile>
            <h4 className={classes.cardCategory}>Specie: {data.species}</h4>
            <h4 className={classes.cardTitle}>Location: {location}</h4>
            <h4 className={classes.cardTitle}>Origin: {origin}</h4>
            
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  </div>
  );
}

CharacterInfo.layout = Admin;

export default CharacterInfo;
