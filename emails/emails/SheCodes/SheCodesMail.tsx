import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function Email() {
  const company = "Nom Nom";
  return (
    
      <Html>
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
        <Body className="bg-white m-0 ">
          {/* <div className=" z-[-1]"> <Img
              className="mx-auto w-[100%] h-[350px] md:h-[200px] z-[-1] "
              src="../../static/topGradient.png"
            /></div> */}
            {/* mt-[-3250px] md:mt-[-175px] */}
          <div className=" py-[15%] md:py-[5%] px-[5%] md:px-[15%] ">
            {/* <Img className="mx-auto "src={"../../static/SheCodesMailLogo.png"} /> */}
            <Img
              className="mx-auto w-[200px] md:w-[300px]"
              src="https://shemail-bucket-1.s3.ap-south-1.amazonaws.com/SheCodesMailLogo.png"
            />

            <Heading className="pt-[5%]" as="h1">
              Hello , {company}
            </Heading>
            <div className="flex ">
              <Img
                className=" mr-[1.25rem] h-[30px] md:h-[40px] "
                src="https://shemail-bucket-1.s3.ap-south-1.amazonaws.com/Misc_01.png"
                
              />
              <Text className="text-base md:text-xl my-auto" >
                We are WTM REVA and we are excited to announce our upcoming
                event, SheCodes 2024: 2 Days of Hybrid International Level
                Hackathon happening at REVA University, powered by Hack2skill
                (H2S), which will be held on March 21th and 22nd, 2024
              </Text>
            </div>

            <Section className=" mx-auto my-[8%] md:my-[2%]">
              <Row className="">
                <Column className="rounded-[16px] bg-[#A363E4] w-[250px] ">
                  <div className="text-xl md:text-2xl text-center  text-white">
                    {" "}
                    100+ Teams
                  </div>
                </Column>
                <Column className="p-[5px] xl:p-0"></Column>
                <Column className="  rounded-[16px] bg-[#A363E4] w-[250px] h-[100px]">
                  <div className="text-xl md:text-2xl text-center text-white">
                    {" "}
                    50+ Mentors
                  </div>
                </Column>
                <Column className="p-[5px] xl:p-0"></Column>
                <Column className="  rounded-[16px] bg-[#A363E4] w-[250px]  h-[100px]">
                  <div className="text-xl md:text-2xl  text-center text-white">
                    {" "}
                    30+ Judges
                  </div>
                </Column>
                <Column className="p-[5px] xl:p-0"></Column>
              </Row>
            </Section>

            <div className="flex mt-[15px] md:mt-[1.5rem]">
              <Img
                className="mr-[1.25rem]  h-[30px] md:h-[40px]"
                src="https://shemail-bucket-1.s3.ap-south-1.amazonaws.com/Misc_01.png"
                
              />
              <Text className="text-base md:text-xl my-auto">
                This event is not merely a hackathon; it also serves as a
                celebratory tribute to diversity, ingenuity, and the boundless
                potential of women in the technology industry.
              </Text>
            </div>
            <div className="flex mt-[15px] md:mt-[1.5rem]">
              <Img
                className="mr-[1.25rem]  h-[30px] md:h-[40px]"
                src="https://shemail-bucket-1.s3.ap-south-1.amazonaws.com/Misc_01.png"
                
              />
              <Text className="text-base md:text-xl my-auto">
                We have a social media footprint of over 1000 followers on
                Instagram, LinkedIn, and YouTube
              </Text>
            </div>
            <div className="flex  mt-[15px]  md:mt-[1.5rem]">
              <Img
                className="mr-[1.25rem]  h-[30px] md:h-[40px]"
                src="https://shemail-bucket-1.s3.ap-south-1.amazonaws.com/Misc_01.png"
                
              />
              <Text className="text-base md:text-xl my-auto">
                WTM REVA consists of over 100 members from seven different crews
                dedicated to different responsibilities for organizing a
                hackathon.
              </Text>
            </div>
            <div className="flex mt-[15px] md:mt-[1.5rem] ">
              <Img
                className="mr-[1.25rem]  h-[30px] md:h-[40px]"
                src="https://shemail-bucket-1.s3.ap-south-1.amazonaws.com/Misc_01.png"
               
              />
              <Text className="text-base md:text-xl my-auto">
                30+ Judges and 50+ Mentors will be joining us from companies
                such as Adobe, Google, Amazon, Microsoft,etc
              </Text>
            </div>

           <Section className=" my-[8%] md:my-[3%]">
           <Row  >
              <Column className="rounded-[16px] bg-[#A363E4]    py-[10px] md:w-[250px]">
                <div className="text-base md:text-2xl text-center text-white">
                  {" "}
                  1<sup>st</sup> Prize <br />₹1,00,000
                </div>
              </Column>
              <Column className="p-[5px] xl:p-0"> </Column>
              <Column className=" 	 rounded-[16px] bg-[#A363E4] px-[10px] md:w-[250px]">
                <div className="  text-base md:text-2xl text-center text-white">
                  {" "}
                  2<sup>nd</sup> Prize <br />₹50,000
                </div>
              </Column>
              <Column className="p-[5px] xl:p-0"></Column>
              <Column className="  rounded-[16px] bg-[#A363E4] px-[10px] md:w-[250px] ">
                <div className="text-base md:text-2xl text-center text-white">
                  
                  3<sup>rd</sup> Prize <br />₹30,000
                </div>
              </Column>
              <Column className="p-[5px] xl:p-0"></Column>
            </Row>
           </Section>

            <Text className=" text-base md:text-xl md:mt-[1.5rem]">
              That’s about us , the basic maths . We have attached brochure
              below or just visit this{" "}
              <Link className="underline text-[#A363E4]" href="https://www.shecodeshacks.com"> link</Link> if you
              want to learn more about us 👀{" "}
            </Text>
            <Text className="text-base md:text-xl md:mt-[1.5rem]">
              We hope to hear back soon from you guys and even answer questions
              if you have any :)
            </Text>
            <Text className="text-base md:text-xl md:mt-[1.5rem]">
              With the warmest Regards, <br />
              The SheCodes Team <span className="text-[#FF0000]">{"<3"}</span>{" "}
            </Text>
          </div>
        </Body>
        </Tailwind>
      </Html>
    
  );
}
