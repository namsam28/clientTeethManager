import type {NextApiRequest, NextApiResponse} from "next";
import {loadDentalLabs} from "@utils/dentalLabStore";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    let data = await loadDentalLabs();

    // 데이터가 없으면 dentalLabUpdate를 호출
    if (data.length === 0) {
      console.log("No local data found. Triggering update...");
      const updateRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dentalLabUpdate`);

      if (!updateRes.ok) {
        throw new Error("dentalLabUpdate failed");
      }

      // 다시 로드
      data = await loadDentalLabs();
    }

    return res.status(200).json(data);
  } catch (e) {
    console.error("Failed to load dental labs:", e);
    return res.status(500).json({error: "Internal server error"});
  }
}
