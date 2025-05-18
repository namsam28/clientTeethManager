export const dentalOutputConfig = [
  {
    OPNSFTEAMCODE: "개방자치단체코드",
  },
  {
    MGTNO: "관리번호",
  },
  {
    APVPERMYMD: "인허가일자",
  },
  {
    APVCANCELYMD: "인허가취소일자",
  },
  {
    TRDSTATEGBN: "영업상태코드",
  },
  {
    TRDSTATENM: "영업상태명",
  },
  {
    DTLSTATEGBN: "상세영업상태코드",
  },
  {
    DTLSTATENM: "상세영업상태명",
  },
  {
    DCBYMD: "폐업일자",
  },
  {
    CLGSTDT: "휴업시작일자",
  },
  {
    CLGENDDT: "휴업종료일자",
  },
  {
    ROPNYMD: "재개업일자",
  },
  {
    SITETEL: "전화번호",
  },
  {
    SITEAREA: "소재지면적",
  },
  {
    SITEPOSTNO: "소재지우편번호",
  },
  {
    SITEWHLADDR: "지번주소",
  },
  {
    RDNWHLADDR: "도로명주소",
  },
  {
    RDNPOSTNO: "도로명우편번호",
  },
  {
    BPLCNM: "사업장명",
  },
  {
    LASTMODTS: "최종수정일자",
  },
  {
    UPDATEGBN: "데이터갱신구분",
  },
  {
    UPDATEDT: "데이터갱신일자",
  },
  {
    UPTAENM: "업태구분명",
  },
  {
    X: "좌표정보(X)",
  },
  {
    Y: "좌표정보(Y)",
  },
  {
    CRFTUSELESSNUM: "기공용레스수",
  },
  {
    CTPLCTMCENUM: "원심주조기수",
  },
  {
    CRFTUSEMOTNUM: "기공용모터수",
  },
  {
    ACETNUM: "아세틸렌수",
  },
  {
    DENTIUSEPRESSNUM: "치과용프레스수",
  },
  {
    EFURNUM: "전기로수",
  },
  {
    PCANNUM: "포셀린로수",
  },
  {
    SPWVCLERNUM: "초음파청소기수",
  },
  {
    SUVYNUM: "서베이어수",
  },
  {
    VITRNUM: "진동기수",
  },
  {
    TRMNUM: "트리머수",
  },
  {
    CRFTUSECOMPRECNT: "기공용컴프레서수",
  },
  {
    SBMCNT: "샌드기수",
  },
  {
    BURYCNT: "진공매몰기수",
  },
  {
    PINDEXCNT: "핀덱스수",
  },
];

export const excludeKeyArray = ["OPNSFTEAMCODE", "MGTNO", "APVPERMYMD", "APVCANCELYMD", "DTLSTATEGBN", "DTLSTATENM", "DCBYMD", "CLGSTDT", "CLGENDDT", "ROPNYMD", "SITETEL", "SITEAREA", "UPDATEGBN", "UPDATEDT", "LASTMODTS", "UPTAENM", "CRFTUSELESSNUM", "CTPLCTMCENUM", "CRFTUSEMOTNUM", "ACETNUM", "DENTIUSEPRESSNUM", "EFURNUM", "PCANNUM", "SPWVCLERNUM", "SUVYNUM", "VITRNUM", "TRMNUM", "CRFTUSECOMPRECNT", "SBMCNT", "BURYCNT", "PINDEXCNT"];

export const filteredDentalOutputConfig = dentalOutputConfig.filter(item => {
  const key = Object.keys(item)[0];
  return !excludeKeyArray.includes(key);
});
