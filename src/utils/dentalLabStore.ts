import fs from "fs/promises";
import path from "path";

const dirPath = path.join(process.cwd(), "data");
const filePath = path.join(dirPath, "dentalLabs.json");

export async function saveDentalLabs(data: any[]) {
  try {
    // 디렉토리가 없으면 생성
    await fs.mkdir(dirPath, {recursive: true});

    // 파일 저장
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to save dental lab data:", err);
    throw err;
  }
}

export async function loadDentalLabs(): Promise<any[]> {
  try {
    const file = await fs.readFile(filePath, "utf-8");
    return JSON.parse(file);
  } catch {
    return [];
  }
}
