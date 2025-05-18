Next.js Boiler Plate

## Version

next@v15.1.6  
react@v19.0.0  
react-dom@v19.0.0  
tailwindcss@3.4.1
typescript@5.0.0

## Docker setting

docker, docker-compose settings

FROM node:22-alpine

```
# docker로 직접 실행

docker build -t [프로젝트명]:[태그명] .
docker run -d [프로젝트명]:[태그명] .
```

```bash
# compose로 실행처리

docker compose up -d --build
```

## ports

host : localhost:80
container : 3000

# 치아 모델링 프로그램

3shape Unite 프로그램 clone code  
[3shpe Unite](https://community.3shape.com/ko/training/unite)

다음 페이지 기능 구현

1. 로그인 페이지

- [ ] 계정 선택 시 다음 페이지 이동

2. 고객 Search 기능

- [ ] 이름 입력 시 해당 고객 정보 노출
- [ ] 고객 선택 시 Case로 이동

3. 고객 Case 선택

- [ ] 등록된 case 이미지 선택
- [ ] 등록된 case 선택 시 preview 페이지 이동

4. 치아 모델링(preview 페이지에서 모델링으로 접근)

- [ ] 치아 모델링 메쉬 별로 레이어 선택기능
- [ ] 선택한 mesh 수정관련 ui
