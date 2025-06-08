import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

const Home = () => {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://www.localhost:4000/api/getkey");

    const {
      data: { order },
    } = await axios.post("http://localhost:4000/api/checkout", {
      amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "CODEX POWER",
      description: "Tutorial of RazorPay",
      image:
        "https://assets.bizclikmedia.net/668/db1b98942b479c94031d773a6230f04a:560ea42868702a92a21000dcc0a83ca3/what-is-monzo-phonecard1-thumb1200-4-3-png.webp",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <Box>
      <Stack
        h={"100vh"}
        alignItems="center"
        justifyContent="center"
        direction={["column", "row"]}
      >
        <Card
          amount={5000}
          img={
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSNSR65JhvfJGeThblrS0U3YUEsjXu_fqwwLfrHtwcdCb3J144yA0qhrR7xQziXBn2xN_YoV8o3N6nlNnVeREmx8HZ89bTJiV5HMBwpV63Osm6vWLuudlzQ29BJYYUo8N67NbSDJBiT-CE&usqp=CAc"
          }
          checkoutHandler={checkoutHandler}
        />
        <Card
          amount={3000}
          img={
            "http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
          }
          checkoutHandler={checkoutHandler}
        />
      </Stack>
    </Box>
  );
};

export default Home;
