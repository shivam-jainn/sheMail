import { Button, Html, Body, Tailwind, Heading } from "@react-email/components";
import * as React from "react";
import { Img } from "@react-email/components";

export default function Email() {
    const company = "Nom Nom"
  return (
    <Tailwind
    config={{
      theme: {
        extend: {
          colors: {
            brand: "#007291",
          },
        },
      },
    }}
  >
    <Html className="font-mono flex flex-col items-center">
        <Body className="bg-white">
        <Img src={"../../static/SheCodesMailLogo.png"} />
        {/* <Img src="https://shemail-bucket-1.s3.ap-south-1.amazonaws.com/SheCodesMailLogo.jpg" /> */}

        <Heading as="h2">Hello , {company}</Heading>
      </Body>
    </Html>
    </Tailwind>
  );
}
