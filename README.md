# CRUD APP

## 프로젝트 실행

1. <code>npm i</code>

2. <code>npm run dev</code>

3. <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a> 접속

## 프로젝트 구현 영상

<a href="https://www.youtube.com/watch?v=M4ZSlE3CQw4">https://www.youtube.com/watch?v=M4ZSlE3CQw4</a>

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

- organisms 컴포넌트의 경우 순수 컴포넌트가 아닌 state와 logic이 존재하도록 구성하였습니다.
  page 단계에서 모든 데이터를 props로 넘겨주게 된다면 page 단계가 무겁고 가독성이 좋지 않다고 판단하여 organisms 단계에서 state와 logic을 작성하였습니다.

4. layout

- templates을 사용하는 대신 layout을 사용하였습니다.

5. pages

- 하나의 페이지에 해당되는 컴포넌트들이 존재하며 organisms 컴포넌트들이 순서에 맞게 배치됩니다.

## 구현 명세

### 컴포넌트

- 모든 컴포넌트들은 styled-components 라이브러리를 사용하였으며 모든 CSS 스타일을 직접 작성하여 구성하였습니다.

- 컴포넌트의 마운트, 언마운트를 고려하여 Animation을 적용하기 위해 react-transition-group 라이브러리를 사용하였습니다.

### 상태 관리

1. data의 상태를 전역 상태인 Redux로 관리하며, localStorage에 상태를 유지시키기 위해서 redux-persist 라이브러리를 적용하였습니다.

2. madal의 상태는 Context API를 사용하여 관리합니다.
   modal의 상태는 추후 비동기 처리가 필요하지 않을 뿐더러 상태가 자주 변경되지 않기 때문에 Context API로 관리하도록 설계하였습니다.

### 데이터 리스트 페이지 (/)

- 헤더 영역 Add 버튼 클릭시 ModalFormSection 컴포넌트가 렌더링됩니다. Modal은 createPortal을 사용하여 `<div id="portal"></div>`에 렌더링되록 설계하였습니다.

- 각 데이터의 Edit 버튼 클릭시 ModalFormSection 컴포넌트가 렌더링되며, 현재 데이터를 수정할 수 있도록 합니다.

- 각 데이터의 Delete 버튼 클릭시 해당 데이터가 제거됩니다.

- 데이터가 추가, 삭제되는 경우 reac-transition-group을 사용하여 Animtaion을 적용하였습니다.

### 데이터 디테일 페이지(/[dataId])

- 데이터 리스트에서 데이터 클릭시 해당 디테일 페이지로 이동하게 됩니다.

- SSR 방식의 pre-rendring을 사용하였으며, 이는 새로고침시 Hydrate 과정에서 dataId를 잃지 않도록 하기 위해 SSR 방식을 사용하였습니다.

- Edit 버튼 클릭시 ModalFormSection 컴포넌트 렌더링되며 데이터를 수정할 수 있습니다.

- Delete 버튼 클릭시 해당 데이터가 삭제되고 데이터 리스트 페이지(/)로 이동하게 됩니다.

- 데이터 디테일 페이지에서 헤더 영여의 Add 버튼으로 데이터를 추가하는 경우 추가 후 데이터 리스트 페이지(/)로 이동합니다.

### EditModalSection 컴포넌트

- title, description, tagList가 하나라도 비어있는 경우 추가, 수정이 되지 않도록 설계하였습니다.

- tag 입력 필드의 경우 Spacebar KeyDown 이벤트 발생시 작성된 입력값이 tagList에 추가됩니다.

- tag 입력 필드에서 현재 입력값이 없을 때 Backspace KeyDonw 이벤트 발생시 최근에 추가된 tag값이 제거됩니다.

- tag 입력 필드의 경우 중복된 값이 tagList에 추가되지 않습니다.
