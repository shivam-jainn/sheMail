import { Body, Button, Head, Heading, Html, Img, Section, Tailwind, Text } from "@react-email/components";
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
    <Html className="font-mono mx-[10%]">
        <Body className="bg-white">
        {/* <Img className="mx-auto "src={"../../static/SheCodesMailLogo.png"} /> */}
        <Img className="mx-auto" src="https://shemail-bucket-1.s3.ap-south-1.amazonaws.com/SheCodesMailLogo.png" />

        <Heading className="pt-[5%]" as="h1">Hello , {company }</Heading>
        <div className="flex items-center gap-4">
        <Img className=" "src={"../../static/bulletpoint.png"} height="40" />
      <Text className="text-lg">We are India’s First International Women’s Hackathon and we have an idea that you might like . But before that , here are some stats about us...</Text>
        </div>

        <div className="flex justify-evenly gap-[2rem] justify-center my-[2%]">
  
            <div className=" flex items-center justify-center rounded-[16px] bg-[#A363E4] w-[250px] h-[100px]">
             <div className="text-2xl text-white"> 100+ Teams</div>
            </div>
            <div className=" flex items-center justify-center rounded-[16px] bg-[#A363E4] w-[250px] h-[100px]">
             <div className="text-2xl text-white"> 50+ Mentors</div>
            </div>
            <div className=" flex items-center justify-center rounded-[16px] bg-[#A363E4] w-[250px] h-[100px]">
             <div className="text-2xl text-white"> 30+ Judges</div>
            </div>
          
        </div>


        <div className="flex items-center gap-4">
        <Img className=" "src={"../../static/bulletpoint.png"} height="40" />
      <Text className="text-lg">30+ Judges and 50+ Mentors will be joining us from companies such as  Adobe, Google, Amazon, Microsoft,etc</Text>
        </div>


        <div className="flex justify-evenly gap-[2rem] justify-center my-[2%]">
  
            <div className=" flex items-center justify-center rounded-[16px] bg-[#A363E4] border-2 border-[#29104B] w-[250px] py-[2%]">
             <div className="text-2xl text-white"> 1<sup>st</sup> Prize <br/>₹ 1,00,000</div>
            </div>
            <div className=" flex items-center justify-center rounded-[16px] bg-[#A363E4] w-[250px] py-[2%]">
            <div className="text-2xl text-white"> 2<sup>nd</sup> Prize <br/>₹ 50,000</div>
            </div>
            <div className=" flex items-center justify-center rounded-[16px] bg-[#A363E4] w-[250px] py-[2%]">
            <div className="text-2xl text-white"> 3<sup>rd</sup> Prize <br/>₹ 30,000</div>
            </div>
          
        </div>
        <Text className="text-lg">That’s about us , the basic maths . We have attached brochure below or just visit this link  if you want to learn more about us 👀  </Text>
        <Text className="text-lg">We hope to hear back soon from you guys and even answer questions if you have any :)</Text>
        <Text className="text-lg">With the warmest Regards, <br/>
The SheCodes Team ❤️ </Text>

        
      </Body>
    </Html>
    </Tailwind>
  );
}
