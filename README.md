# CRUD APP

## 프로젝트 실행

1. <code>npm i</code>

2. <code>npm run dev</code>

3. <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a> 접속

## 프로젝트 배포 링크

배포 URL : <a href="https://crud-app-taupe.vercel.app/">https://crud-app-taupe.vercel.app/</a>

## 기술 스택

  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux">
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" alt="styled-components">

## 디자인 패턴

해당 프로젝트에 아토믹 디자인 패턴을 적용하였습니다. 각 단계에 대해서 주관적인 해석을 적용하여 구성하였습니다.

1. atoms

   - 가장 작은 컴포넌트 단위입니다. atoms 컴포넌트의 범위는 요소의 의미나 기능, 속성이 유사한 경우 공통적인 컴포넌트로 구성하였습니다.

   - 예를 들어, atoms/text의 경우 DataTitleText는 Data의 title을 의미하는 컴포넌트이며, DateText 컴포넌트는 날짜를 의미하는 컴포넌트입니다.
     Button이나 InputFeild의 경우 props로 속성을 전달받아 재사용성을 고려하여 설계하였습니다.

2. molecules

   - atoms 컴포넌트를 조합된 컴포넌트입니다. 컴포넌트 자체적으로 의미를 갖는 컴포넌트로 구성되어 있습니다.

3. organisms

   - atoms과 molecules 컴포넌트로 구성되며 페이지 내 하나의 section을 담당하는 컴포넌트입니다. 즉, 사용자에게 기능적 요구사항을 포함하는 컴포넌트입니다.

   - organisms 컴포넌트의 경우 순수 컴포넌트가 아닌 state와 logic이 존재하도록 구성하였습니다.<br />
     page 단계에서 모든 데이터를 props로 넘겨주게 된다면 page 단계가 무겁고 가독성이 좋지 않다고 판단하여 organisms 단계에서 state와 logic을 작성하였습니다.

4. layout

   - templates을 사용하는 대신 layout을 사용하였습니다.

5. pages
   - 하나의 페이지에 해당되는 컴포넌트들이 존재하며 organisms 컴포넌트들이 순서에 맞게 배치됩니다.

## CI/CD

- GitHub Actions를 통해 CI/CD 과정을 자동화하였습니다.

- main 브랜치에 push, merge 동작이 발생한 경우 workflow가 자동적으로 실행되도록 설계하였습니다.

- Vercel을 사용하여 실제 배포하였습니다.

## 구현 명세

### Style

- 모든 컴포넌트들은 styled-components 라이브러리(CSS-in-JS)를 사용하였으며 모든 CSS 스타일을 직접 작성하여 구성하였습니다.

- 컴포넌트의 생명주기를 고려하여 Animation을 적용하기 위해 react-transition-group 라이브러리를 사용하였습니다.

### 상태 관리

#### dataList

- data 리스트를 dataList 전역 상태(redux)로 관리하엿습니다.

- localStrage와 연동하기 위해서 redux-persist 라이브러리를 적용하였습니다ㅣ.

#### modalContext

- Modal 관련 상태를 Context API를 활용하여 구현하였습니다.

- isShowModal 상태값은 모달의 마운트/언마운트를 나타내는 상태값이며 불리언값을 갖습니다.

- modalContent 상태값은 모달에 렌더링될 컴포넌트를 나타내는 상태값입니다.

- showModalHandler 함수는 인수로 모달에 렌더링될 컴포넌트를 전달받습니다.
  전달받은 컴포넌트를 modalContent 상태값으로 갱신하고, isShowModal 상태값을 true로 갱신합니다.

- hideModalHandler 함수는 isShowMal 상태값을 false로 갱신합니다.

### 데이터 리스트 페이지 (/)

- 헤더 영역 Add 버튼 클릭시 ModalFormSection 컴포넌트가 렌더링됩니다. Modal은 createPortal을 사용하여 `<div id="portal"></div>`에 렌더링되록 설계하였습니다.

- Add Item 폼 유효성

  - Title : 1자 이상

  - Description : 1자 이상

  - Tag : 1개 이상

<img src="https://user-images.githubusercontent.com/96307662/210152265-15712a46-1ef2-49d0-81eb-cfede52a197a.gif" alt="Add Item" width="80%" />

<hr />

- Tag Input

  - space 버튼 누르면 input 필드에 입력되어 있는 값으로 하나의 Tag가 생성됩니다.

  - backspace 버튼 누르면 최근 Tag를 제거합니다.

  - 생성된 Tag 클릭시 클릭된 Tag가 제거됩니다.

  - Tag는 최대 3개까지만 생성이 가능합니다. 3개 이상 존재하는 경우 Input이 비활성화 됩니다.

<img src="https://user-images.githubusercontent.com/96307662/210152308-eb1b82f1-7b1c-436f-8fe4-6f309f445c2e.gif" alt="Tag Input" width="80%" />

<hr />

- 각 데이터의 Edit 버튼 클릭시 ModalFormSection 컴포넌트가 렌더링되며, 현재 데이터를 수정할 수 있도록 합니다.

- Edit Form 유효성은 Add Form과 동일하게 적용됩니다.

<img src="https://user-images.githubusercontent.com/96307662/210152388-19e7339d-43e4-4172-919e-68d7128145c6.gif" alt="Edit Item" width="80%" />

<hr />

- 각 데이터의 Delete 버튼 클릭시 해당 데이터가 제거됩니다.

<img src="https://user-images.githubusercontent.com/96307662/210152411-ff60010c-8d34-474a-b9e7-48ef4cf46f72.gif" alt="Delete Item" width="80%" />

### 데이터 디테일 페이지(/[dataId])

- 데이터 리스트에서 데이터 클릭시 해당 디테일 페이지로 이동하게 됩니다.

- SSR 방식의 pre-rendring을 사용하였으며, 이는 re-fresh로 인해 발생하는 Hydrate 과정에서 dataId를 잃지 않도록 하기 위해 SSR 방식을 사용하였습니다.

<img src="https://user-images.githubusercontent.com/96307662/210152466-92d8697d-1284-4a27-9ea6-ad4b4219903f.gif" alt="Detail Page" width="80%" />

<hr />

- Edit 버튼 클릭시 ModalFormSection 컴포넌트 렌더링되며 데이터를 수정할 수 있습니다.

- Delete 버튼 클릭시 해당 데이터가 삭제되고 데이터 리스트 페이지(/)로 리다이렉팅됩니다.

<img src="https://user-images.githubusercontent.com/96307662/210152531-848f1871-125d-416d-9bf7-cf12d51dfb22.gif" alt="Detail Page" width="80%" />

<hr />

- 데이터 디테일 페이지에서 헤더 영여의 Add 버튼으로 데이터를 추가하는 경우 추가 후 데이터 리스트 페이지(/)로 이동합니다.

<img src="https://user-images.githubusercontent.com/96307662/210152567-66382770-7e95-4004-99c7-f9e2dda6a56f.gif" alt="Add Item" width="80%" />
