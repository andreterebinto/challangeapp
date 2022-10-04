import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import { useEffect, useState } from 'react';
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";
import { AccountBoxRounded, CalendarTodayOutlined, LocalActivityRounded, LocationOn } from "@material-ui/icons";

function Dashboard() {

  const [dataCharacter, setCharacter] = useState([]);
  const [dataLocation, setLocation] = useState([]);
  const [dataEpisode, setEpisode] = useState([]);
  const [dataGraphOne, setGraphOne] = useState([]);
  const [dataGraphTwo, setGraphTwo] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
      const result = await fetch(`https://rickandmortyapi.com/api/character`);
      const body = await result.json();
      setCharacter(body.info);
      } catch(err) {
        // error handling code
      } 
    }
  fetchData()

  }, [setCharacter])

  useEffect(() => {
    const fetchLocation = async () => {
      try {
      const result = await fetch(`https://rickandmortyapi.com/api/location`);
      const body = await result.json();
      setLocation(body.info);
      } catch(err) {
        // error handling code
      } 
    }
  fetchLocation()

  }, [setLocation])

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
      const result = await fetch(`https://rickandmortyapi.com/api/episode`);
      const body = await result.json();
      console.log(body.info)
      setEpisode(body.info);
      } catch(err) {
        // error handling code
      } 
    }
    fetchEpisode()

  }, [setEpisode])


  useEffect(() => {
    console.log(dataEpisode.count)
    console.log(dataCharacter.count)
    setGraphOne({data:{labels: ["Episodies", "Characters"], series: [[dataEpisode.count, dataCharacter.count]]}})

  }, [setGraphOne, dataEpisode, dataCharacter])

  useEffect(() => {
    console.log(dataEpisode.count)
    console.log(dataCharacter.count)
    setGraphTwo({data:{labels: ["Episodies", "Locations"], series: [[dataEpisode.count, dataLocation.count]]}})

  }, [setGraphTwo, dataEpisode, dataLocation])

  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="dark" stats icon>
              <CardIcon color="dark">
                <AccountBoxRounded />
              </CardIcon>
              <p className={classes.cardCategory}>Total Character</p>
              <h3 className={classes.cardTitle}>{dataCharacter.count}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                All Episodies Characters
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <CalendarTodayOutlined />
              </CardIcon>
              <p className={classes.cardCategory}>Total Episodes</p>
              <h3 className={classes.cardTitle}>{dataEpisode.count}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                All Seasons
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
               <LocationOn />
              </CardIcon>
              <p className={classes.cardCategory}>Total Location</p>
              <h3 className={classes.cardTitle}>{dataLocation.count}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Location of character
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dataGraphOne.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Episodies x Characters</h4>
              
            </CardBody>
            <CardFooter chart>
              
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={dataGraphTwo.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Episodies x Locations</h4>
              
            </CardBody>
            <CardFooter chart>
            
            </CardFooter>
          </Card>
        </GridItem>
    
      </GridContainer>
      
    </div>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
