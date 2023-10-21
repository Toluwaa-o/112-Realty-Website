import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req) => {
  const { fullName, email, mobileNumber } = await req.json();
  console.log(fullName, email, mobileNumber)

  if (!fullName || !email || !mobileNumber)
    return NextResponse.json(
      {
        msg: "Please provide all required values!",
      },
      { status: 400 }
    );

  const userWithEmail = await prisma.user.findFirst({ where: { email } });

  if (userWithEmail)
    return NextResponse.json(
      {
        msg: "This email is already subscribed to our services!",
      },
      { status: 400 }
    );

  const userWithNumber = await prisma.user.findOne({ where: { mobileNumber } });

  if (userWithNumber)
    return NextResponse.json(
      {
        msg: "This number is already subscribed to our services!",
      },
      { status: 400 }
    );

  try {
    const data = await prisma.user.create({
      data: { fullName, email, mobileNumber: Number(mobileNumber) },
    });
  } catch (error) {
    return NextResponse.json(
      {
        msg: "Something went wrong, please try again!",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    msg: "Your subscription has been created successfully!",
  });
};
