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
import Link from "next/link";
import ListItem from "@material-ui/core/ListItem";

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

function TableList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
      const result = await fetch(`https://rickandmortyapi.com/api/character`);
      const body = await result.json();
      console.log(body.results)
      setData(body.results);
      } catch(err) {
        // error handling code
      } 
    }
  fetchData()

  }, [setData])

  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Character List</h4>
            <p className={classes.cardCategoryWhite}>
              
            </p>
          </CardHeader>
          <CardBody>

          
         
        <Table
              tableHeaderColor="primary"
              tableHead={["Id", "Image", "Name", " # "]}
              tableData= {data.map(item => (
                [item.id, <img
                  src={item.image}
                  width={40}
                />, item.name, <Link href={"/admin/character?id="+item.id} title="Go to character">
                  <a title="Go to character">
              <ListItem>
              <Icon title="Go to character">arrow_circle_right</Icon>
                </ListItem></a></Link>]
              ))}
            />
     
               
            
          </CardBody>
        </Card>
      </GridItem>
     
    </GridContainer>
  );
}

TableList.layout = Admin;

export default TableList;
