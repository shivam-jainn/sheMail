import { Body, Button, Column, Font, Head, Heading, Html, Img, Row, Section, Tailwind, Text } from "@react-email/components";
import * as React from "react";

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
    <Html className=" mx-[10%]">
    <Head>
        <Font
          fontFamily="Fira Code"
          fallbackFontFamily="monospace"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
        <Body className="bg-white">
         
        {/* <Img className="mx-auto "src={"../../static/SheCodesMailLogo.png"} /> */}
        <Img className="mx-auto" src="https://shemail-bucket-1.s3.ap-south-1.amazonaws.com/SheCodesMailLogo.png" />

        <Heading className="pt-[5%]" as="h1">Hello , {company }</Heading>
        <div className="flex ">
        <Img className=" mr-[1.25rem] " src="https://shemail-bucket-1.s3.ap-south-1.amazonaws.com/Misc_01.png" height="40" />
      <Text className="text-lg my-auto">We are India’s First International Women’s Hackathon and we have an idea that you might like . But before that , here are some stats about us...</Text>
        </div>

        <Section className=" mx-auto my-[2%]">
  <Row className="ml-[5%]">

  <Column className="rounded-[16px] bg-[#A363E4] p-[2%] w-[250px]  ">
             <div className="text-2xl  text-center  text-white"> 100+ Teams</div>
            </Column>
            <Column></Column>
            <Column className="  rounded-[16px] bg-[#A363E4] w-[250px] h-[100px]">
             <div className="text-2xl  text-center text-white"> 50+ Mentors</div>
            </Column>
            <Column></Column>
            <Column className="  rounded-[16px] bg-[#A363E4] w-[250px] h-[100px]">
             <div className="text-2xl  text-center text-white"> 30+ Judges</div>
            </Column>
            <Column></Column>
  </Row>
          
        </Section>


        <div className="flex">
        <Img className="mr-[1.25rem] " src="https://shemail-bucket-1.s3.ap-south-1.amazonaws.com/Misc_01.png" height="40" />
      <Text className="text-lg my-auto">30+ Judges and 50+ Mentors will be joining us from companies such as  Adobe, Google, Amazon, Microsoft,etc</Text>
        </div>

        <Row className="ml-[5%]">

<Column className="rounded-[16px] bg-[#A363E4] p-[2%] w-[250px]  ">
<div className="text-2xl text-center text-white"> 1<sup>st</sup> Prize <br/>₹ 1,00,000</div>
          </Column>
          <Column></Column>
          <Column className="  rounded-[16px] bg-[#A363E4] w-[250px] h-[100px]">
          <div className="text-2xl text-center text-white"> 2<sup>nd</sup> Prize <br/>₹ 50,000</div>
          </Column>
          <Column></Column>
          <Column className="  rounded-[16px] bg-[#A363E4] w-[250px] h-[100px]">
          <div className="text-2xl  text-center text-white"> 3<sup>rd</sup> Prize <br/>₹ 30,000</div>
          </Column>
          <Column></Column>
</Row>
        
        <Text className="text-lg">That’s about us , the basic maths . We have attached brochure below or just visit this link  if you want to learn more about us 👀  </Text>
        <Text className="text-lg">We hope to hear back soon from you guys and even answer questions if you have any :)</Text>
        <Text className="text-lg">With the warmest Regards, <br/>
The SheCodes Team ❤️ </Text>

        
      </Body>
    </Html>
    </Tailwind>
  );
}
