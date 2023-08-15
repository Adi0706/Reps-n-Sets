import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import testibg from "../../Images/testimonials.jpg";
import test1 from "../../Images/test1.png";
import PageAnimation from '../../Components/PageAnimation';

function Testimonials() {
  return (
    <>
      <PageAnimation>
        <div className="TestiSec">
          <NavBar />

          <h1 style={{ backgroundColor: "black", color: "white", marginLeft: "5px", width: "100vw" }}>
            SUCCESS STORIES
          </h1>

          <section
            className="test1"
            style={{
              width: "100vw",
              height: "500px",
              border: "solid",
              borderColor: "black",
              position: "relative",
            }}
          >
            <img
              src={testibg}
              alt="testimonial background"
              className="background-image"
            />

            <div className="testimonial-content">
              <div className="customer1">
                <div className="collage">
                  <img src={test1} alt="test1" className="testimonial-image" />
                  <h3 style={{ color: "white", marginLeft: "-100px" }}>
                    CUSTOMER NAME: ADITYA BHATTACHARJEE (AGE: 21)
                  </h3>
                </div>
                <p style={{ color: "white", textAlign: "left", maxWidth: "800px", margin: "0 auto" ,textShadow:"0px 0px 15px white"}}>
                
"I was weighed down at 115kg, struggling with obesity. The constant humiliation I faced took a toll on my mental well-being. Driven by the need to shed the excess weight and embrace a healthier lifestyle, I embarked on a journey of transformation. However, the lack of knowledge and guidance left me stranded at the starting line.

It was during this period that I was introduced to Reps n Sets by a friend. This introduction turned out to be a turning point in my life. With the support of Reps n Sets, my self-confidence, lifestyle, and overall health underwent a remarkable positive shift. Their meticulously designed training programs and diet plans proved to be exceptional, laying a strong foundation for my progress.

Beyond just the physical aspect, Reps n Sets helped me gain a deeper understanding of my body and the importance of proper nutrition. I owe my gratitude to Reps N Sets for the significant positive changes they brought into my life. They've truly been instrumental in my journey towards a healthier and happier me."
                </p>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </PageAnimation>
    </>
  );
}

export default Testimonials;
