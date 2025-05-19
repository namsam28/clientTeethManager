import {PatientItem} from "@schemas/patients";

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const surnames = ["김", "이", "박", "최", "정", "강", "조", "윤", "장", "임"];
const firstNames = ["서연", "민준", "지후", "수빈", "하윤", "예준", "다은", "지아", "유진", "현우", "가은", "서준", "은우", "나윤", "재윤", "예린", "태윤", "다현", "지유", "하진"];

function getRandomName(usedNames: Set<string>): string {
  let name: string;
  do {
    const surname: string = surnames[getRandomInt(0, surnames.length - 1)];
    const firstName: string = firstNames[getRandomInt(0, firstNames.length - 1)];
    name = surname + firstName;
  } while (usedNames.has(name));
  usedNames.add(name);
  return name;
}

function getRandomBirthDate() {
  const start = new Date(1960, 0, 1).getTime();
  const end = new Date(2020, 11, 31).getTime();
  const randomTime = getRandomInt(start, end);
  const date = new Date(randomTime);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export function generatePatients(): PatientItem[] {
  const usedNames = new Set<string>();
  const patients: PatientItem[] = [];

  for (let i = 1; i <= 10; i++) {
    const name: string = getRandomName(usedNames);
    const birth: string = getRandomBirthDate();
    patients.push({
      id: String(i),
      name,
      birth,
    });
  }

  return patients;
}

// 실행 및 출력
// const patientList = generatePatients();
