import React, { useEffect } from "react";
import "./Home.css";
import { Flex, Card, Image, Stack, Heading, Text } from "@chakra-ui/react";
import { motion, spring } from "framer-motion";
import "aos/dist/aos.css";
import Aos from "aos";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="main1_div">
      <div>
        <div className="parent">
          <Navbar />
        </div>
        <h1>Welcome to Flavour101 </h1>
      </div>
      <br />
      <div className="image-container">
        <div className="image-wrapper">
          <div id="left-text">
            <p>
              <hr />
              From 2018 <b>Flavour101</b> provides a <br />
              unique dining experience{" "}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transistion={{
              duration: 4,
              delay: 3,
              ease: "easeInOut",
            }}
          >
            <img
              src="https://uploads-ssl.webflow.com/6437e076d27d2710e933a3c8/643d4c11d87b905b9e9ed8fe_pexels-maria-orlova-4940719-1.jpg"
              alt="no img"
              style={{ width: "350px", height: "350px" }}
              id="left-img"
            />
          </motion.div>
        </div>
        <div className="image-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: [-20, -20, 20] }}
            transition={{
              duration: 2,
              delay: 0.2,
              type: spring,
            }}
          >
            <img
              src="https://uploads-ssl.webflow.com/6437e076d27d2710e933a3c8/643827afc95bf1aa4d342a44_pexels-quark-studio-3201920-1.jpg"
              alt="no img"
              style={{ width: "70vh", height: "68vh" }}
            />
          </motion.div>
        </div>
        <div className="image-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: [-20, 20 - 20] }}
            transistion={{
              duration: 4,
              delay: 3,
              ease: "easeInOut",
            }}
          >
            <img
              src="https://uploads-ssl.webflow.com/6437e076d27d2710e933a3c8/643d4fdd15724c7d573b2bc1_marios-gkortsilas-IdMaxkqNY-E-unsplash-1-1.jpg"
              alt="no image"
              style={{ width: "350px", height: "300px" }}
              id="right-img"
            />
          </motion.div>
        </div>
      </div>
      <p id="right-text">
        Welcome to <b>Flavour101</b>, <br />
        where exquisite cuisine meets warm <br />
        hospitality <hr />
      </p>{" "}
      <br />
      <hr style={{ marginTop: "5%", border: "0.5px solid black" }} />
      <div class="center-text">
        <h3
          data-Aos="fade-up"
          data-Aos-duration="1000"
          style={{
            textalign: "center",
            fontFamily: "Comic Sans MS, Times, serif",
            fontsize: "50px",
            fontweight: "500",
            lineheight: "42px",
            margin: "70px 70px",
            justifycontent: "center",
            paddingLeft: "8%",
            paddingRight: "8%",
          }}
        >
          With a menu featuring an array of fresh, locally sourced ingredients,
          we aim to provide you with an exceptional dining experience that will
          leave you coming back for more. Come and savor the flavors of our food
          and the warmth of our hospitality at our restaurant.
        </h3>
      </div>
      <div
        className="position-relative width-50 height-50vh d-flex align-items-center justify-content-center border-radius-8px overflow-hidden "
        data-Aos="fade-right"
        data-Aos-duration="2000"
      >
        <video className="video-element" controls>
          <source
            src="https://cdn.pixabay.com/vimeo/725502737/beer-122439.mp4?width=1366&hash=96eeb163de5656693b3f09f3cf5c2d06b1e0c0f0"
            type="video/mp4"
          />
        </video>
      </div>
      <div>
        <h2
          data-Aos="fade-up"
          data-Aos-duration="1000"
          style={{
            textDecoration: "underline",
            textAlign: "center",
            fontFamily: "Segoe Print, Times, serif",
            fontSize: "35px",
            marginRight: "30%",
            margintop: "-60%",
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
        >
          Our services
        </h2>
      </div>
      <Flex justify="center" align="center">
        <Card className="card-container">
          <div
            data-Aos="fade-down"
            data-aos-animation="1000"
            className="img"
            style={{
              width: "100%",
              height: "200px",
              borderradius: "8px",
              objectfit: "cover",
            }}
          >
            <Image
              src="https://i.pinimg.com/originals/6b/19/09/6b19099ca732a412beac71dc03388995.jpg"
              alt="Green double couch with wooden legs"
              className="card-image"
            />
          </div>
          <Stack mt="6" spacing="3">
            <Heading
              data-aos="fade-right"
              data-aos-animation="1000"
              size="md"
              className="card-title"
            >
              Cozy Ambiance
            </Heading>
            <Text
              data-Aos="fade-left"
              data-aos-animation="1000"
              className="card-description"
            >
              Coziness meets culinary delight. Step into our inviting haven,
              where soft, warm lighting sets the mood and comfortable seating
              beckons you to unwind and savor the moment. Our space is adorned
              with natural elements, creating an atmosphere of tranquility and
              charm.
            </Text>
          </Stack>
        </Card>
        <Card className="card-container">
          <div
            data-Aos="fade-down"
            data-aos-animation="1000"
            className="img"
            style={{
              width: "100%",
              height: "200px",
              borderradius: "8px",
              objectfit: "cover",
            }}
          >
            <Image
              src="https://th.bing.com/th/id/OIP.jMAXsIBu3cni9weVtn0VSwHaEK?pid=ImgDet&rs=1"
              alt="Green double couch with wooden legs"
              className="card-image"
            />
          </div>
          <Stack mt="6" spacing="3">
            <Heading
              data-Aos="fade-left"
              data-aos-animation="1000"
              size="md"
              className="card-title"
            >
              Cleanliness and Hygiene
            </Heading>
            <Text
              data-Aos="fade-left"
              data-Aos-animation="1000"
              className="card-description"
            >
              We prioritize the well-being and safety of our valued guests.
              Cleanliness and hygiene are at the heart of our service
              philosophy, ensuring that you can dine with complete peace of
              mind. From the moment you step into our establishment, you will
              experience an immaculate and well-maintained environment.
            </Text>
          </Stack>
        </Card>
        <Card className="card-container">
          <div
            data-Aos="fade-down"
            data-aos-animation="1000"
            className="img"
            style={{
              width: "100%",
              height: "200px",
              borderradius: "8px",
              objectfit: "cover",
            }}
          >
            <Image
              src="https://th.bing.com/th/id/OIP.O2fKzpdOWQB39jUau2M3VAAAAA?pid=ImgDet&rs=1"
              alt="Green double couch with wooden legs"
              className="card-image"
            />
          </div>
          <Stack mt="6" spacing="3">
            <Heading
              data-Aos="fade-left"
              data-Aos-animation="1000"
              size="md"
              className="card-title"
            >
              Online Ordering
            </Heading>
            <Text
              data-Aos="fade-right"
              data-Aos-animation="1000"
              className="card-description"
            >
              We take pride in offering our customers a seamless and convenient
              dining experience with our online ordering facility. With just a
              few clicks, you can explore our delectable menu, place your order,
              and have your favorite dishes delivered right to your doorstep.
            </Text>
          </Stack>
        </Card>
      </Flex>
      <div className="menu-section">
        <p className="big-text-bg">Fresh dishes</p>
        <p id="view-menu">view menu</p>
      </div>
      <div style={{ marginTop: "20%" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
