---
id: mdx
title: MDX 在markdown中使用React
---

归功于[MDX](https://mdxjs.com/)，你可以在 mardown 中使用 JSX 语法 以及 React 组件

## 代码

```javascript
export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!
```

## 效果

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2"> blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!
