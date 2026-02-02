"use server";
import prisma from "@/lib/prisma";
import bcryptjs from "bcryptjs";

export const RegisterUser = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email.toLowerCase(),
        password: bcryptjs.hashSync(password),
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    // console.log("USER CREATED", email);
    return {
      ok: true,
      user: user,
    };
  } catch (error) {
    return {
      ok: false,
      message: "No se pudo crear el usuario",
    };
  }
};
