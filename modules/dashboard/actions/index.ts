"use server";

import { db } from "@/lib/db";
import { currentUser } from "@/modules/auth/actions";

export const getAllPlaygroundForUser = async () => {
  const user = await currentUser();
  try {
    const playground = await db.playground.findMany({
      where: {
        userId: user?.id,
      },
      include: {
        user: true,
      },
    });
    return playground;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteProjectById = async()=>{}
export const duplicateProjectById = async () => {};
export const editProjectById = async () => {};

