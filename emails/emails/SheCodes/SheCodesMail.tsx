import { Button, Html } from "@react-email/components";
import * as React from "react";
import { Img } from "@react-email/components";

export default function Email() {
  return (
    <Html className="flex flex-col items-center">
        <Img src="https://shemail-bucket-1.s3.ap-south-1.amazonaws.com/SheCodesMailLogo.jpg" />
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Html>
  );
}
