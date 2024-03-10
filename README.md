# 인프런 스토리북 강의 따라하기

## 스토리북 설정

[storybook vite 설정](https://storybook.js.org/docs/builders/vite)

1. storybook 인스톨

```
npm install @storybook/builder-vite --save-dev
```

2. `.storybook/main.ts` 스토리북 설정 추가 / 코어부분 추가

```js
export default {
  stories: ["../src/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "@storybook/builder-vite", // 👈 The builder enabled here.
  },
};
```

## 테일윈드 설정

[talewind vite 설정](https://tailwindcss.com/docs/guides/vite)

1. 테일윈드 인스톨

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. 테일윈드 콘피그 설정

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

3. `index.css` 상단에 임포트하기

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## fontsource

1. npm에 폰트소스 - 폰트 이름 검색 `fontsource noto sans kr `

2. npm install @fontsource/noto-sans-kr 인스톨

3.
