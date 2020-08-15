
  
import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,} from "reactstrap";
import Slider from "./SliderComponent";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";

function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else {
    return (
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        <Card>
          <CardImg src={baseUrl + item.image} alt={item.name} />
          <CardBody>
            <CardTitle className="CardTitle">{item.name}</CardTitle>
            {item.designation ? (
              <CardSubtitle
                style={{ fontWeight: 500, fontSize: 16, paddingBottom: 5 }}
              >
                {item.designation}
              </CardSubtitle>
            ) : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
  }
}

function Home(props) {
  return (
    <div className="layout">
      <div className="container" style={{ marginBottom: "50px" }}>
        <div className="row align-items-start">
          <div className="col-12 col-md m-1">
            <RenderCard
              item={props.dish}
              isLoading={props.dishesLoading}
              errMess={props.dishesErrMess}
            />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard
              item={props.promotion}
              isLoading={props.promoLoading}
              errMess={props.promoErrMess}
            />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard
              item={props.leader}
              isLoading={props.leaderLoading}
              errMess={props.leaderErrMess}
            />
          </div>
        </div>
      </div>
      <div
        className="Slider"
        style={{
          backgroundColor: "#290000",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <Slider />
      </div>
    </div>
  );
}

export default Home;

