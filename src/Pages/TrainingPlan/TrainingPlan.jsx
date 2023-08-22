import React from "react";
import LoginNavBar from "../../Components/LoginNavBar";
import Footer from "../../Components/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import pushup from "../../Images/pushup.mp4";
import benchpress from "../../Images/benchpress.mp4";
import incline from "../../Images/incline.mp4";
import decline from "../../Images/decline.mp4";
import pullup from "../../Images/pullup.mp4";
import latpulldown from "../../Images/latpulldown.mp4";
import rowing from "../../Images/rowing.mp4";
import deadlift from "../../Images/deadlift.mp4";

function TrainingPlan() {
  return (
    <>
      <LoginNavBar />
      <h1 style={{ color: "black", marginLeft: "10px" }}>TRAINING PLANS</h1>
      {/* CHEST */}
      <section className="TrainingSec">
      <h1 style={{ color: "white", marginLeft: "20px",fontSize:"40px" }}>BASIC CHEST WORKOUT</h1>
        <Card sx={{ width: 345, margin: "100px 50px 0 30px" }}>
          <CardActionArea>
            <video
              src={pushup}
              title="Push-Up Video"
              controls
              loop
              style={{ width: "100%",height:"200px" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                BODY WEIGHT PUSH-UPS
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Perform Body Weight Pushups for Chest Activation and Warmup.<br/>
                <b>REP RANGE: 15-20 x 3</b>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 345, margin: "100px 50px 0 30px" }}>
          <CardActionArea>
            <video
              src={benchpress}
              title="Bench Press Video"
              controls
              loop
              style={{ width: "100%",height:"200px" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                BARBELL BENCH PRESS
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A Compound Movement, best for chest growth and strength development.<br/>
                <b>REP RANGE: 12-15 x 3, WEIGHT GRADUALLY INCREASE AFTER EVERY SET</b>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ width: 345, margin: "100px 50px 0 30px" }}>
          <CardActionArea>
            <video
              src={incline}
              title="Bench Press Video"
              controls
              loop
              style={{ width: "100%",height:"200px" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                INCLINE DUMBELL/BARBELL PRESS
              </Typography>
              <Typography variant="body2" color="text.secondary">
                One of the best Movement for upper chest activation.<br/>
                <b>REP RANGE: 12-15 x 3, WEIGHT GRADUALLY INCREASE AFTER EVERY SET</b>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 345, margin: "100px 50px 0 30px" }}>
          <CardActionArea>
            <video
              src={decline}
              title="Bench Press Video"
              controls
              loop
              style={{ width: "100%",height:"200px" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                DECLINE BARBELL/DUMBELL PRESS
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Best movement for Lower Chest,gives a proper shape to the chest.<br/>
                <b>REP RANGE: 12-15 x 3, WEIGHT GRADUALLY INCREASE AFTER EVERY SET</b>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        
      </section>
      {/*BACK*/}
      <section className="TrainingSec">
      <h1 style={{ color: "white", marginLeft: "20px",fontSize:"40px" }}>BASIC BACK WORKOUT</h1>
        <Card sx={{ width: 345, margin: "100px 50px 0 30px" }}>
          <CardActionArea>
            <video
              src={pullup}
              title="Push-Up Video"
              controls
              loop
              style={{ width: "100%",height:"200px" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                BODY WEIGHT PULLUPS
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Perform Body Weight Pullups for back activation and Warmup.<br/>
                <b>REP RANGE: 15-20 x 3</b>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 345, margin: "100px 50px 0 30px" }}>
          <CardActionArea>
            <video
              src={latpulldown}
              title="Bench Press Video"
              controls
              loop
              style={{ width: "100%",height:"200px" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                LAT PULL DOWNS
              </Typography>
              <Typography variant="body2" color="text.secondary">
               Basic but effective movement for Latissimus dorsi muscle(Back muscle),helps in growing the width of the back.<br/>
                <b>REP RANGE: 12-15 x 3, WEIGHT GRADUALLY INCREASE AFTER EVERY SET</b>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ width: 345, margin: "100px 50px 0 30px" }}>
          <CardActionArea>
            <video
              src={rowing}
              title="Bench Press Video"
              controls
              loop
              style={{ width: "100%",height:"200px" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ROWING
              </Typography>
              <Typography variant="body2" color="text.secondary">
                One of the best Movement for growing back thickness and overall back development.<br/>
                <b>REP RANGE: 12-15 x 3, WEIGHT GRADUALLY INCREASE AFTER EVERY SET</b>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 345, margin: "100px 50px 0 30px" }}>
          <CardActionArea>
            <video
              src={deadlift}
              title="Bench Press Video"
              controls
              loop
              muted
              style={{ width: "100%",height:"200px" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                DEADLIFT
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Best Compound movement for back especially lower back,helps in development of overbody strength and increases Testosterone levels in body.<br/><br/>
                <b>REP RANGE: 12-15 x 3, WEIGHT GRADUALLY INCREASE AFTER EVERY SET</b>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        
      </section>
      <Footer />
    </>
  );
}

export default TrainingPlan;
