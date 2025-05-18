import type {NextApiRequest, NextApiResponse} from "next";
import {saveDentalLabs} from "@utils/dentalLabStore";

const baseUrl = process.env.DENTAL_API_URL;
const apiKey = process.env.SEOUL_OPEN_API_KEY;
const path = process.env.DENTAL_API_PATH;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const fullBaseUrl = `${baseUrl}/${apiKey}${path}`;
  const numOfRows = 1000;
  let allRows: any[] = [];

  try {
    // ✅ 1. 최초 1페이지(1~1000) 요청
    const firstRes = await fetch(`${fullBaseUrl}1/${numOfRows}`);
    const firstJson = await firstRes.json();

    const totalCount = firstJson.LOCALDATA_010204.list_total_count;
    const firstRows = firstJson.LOCALDATA_010204.row ?? [];
    allRows = [...firstRows];

    const totalPages = Math.ceil(totalCount / numOfRows);

    // ✅ 2. 2페이지부터 나머지 반복 요청
    for (let page = 2; page <= totalPages; page++) {
      const start = (page - 1) * numOfRows + 1;
      const end = page * numOfRows;
      const url = `${fullBaseUrl}${start}/${end}`;

      const res = await fetch(url);
      const json = await res.json();
      const rows = json.LOCALDATA_010204.row ?? [];
      allRows = allRows.concat(rows);
    }
    console.log("allRows", allRows.length);
    // ✅ 3. 저장
    await saveDentalLabs(allRows);

    return res.status(200).json({message: "Dental labs updated", count: allRows.length});
  } catch (e) {
    console.error("Failed to update dental labs:", e);
    return res.status(500).json({error: "Update failed"});
  }
}
