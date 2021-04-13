---
id: contributing
title: 撰写格式
---

您可以使用 [GitHub风格的Markdown语法](https://github.github.com/gfm/) 编写内容。

## Markdown 语法 {#markdown-syntax}

在设计基于 markdown 的 Docusaurus 网站时，用作示例页面。

## 标题 {#headers}

# H1 - 创建最佳文档 {#h1---create-the-best-documentation}

## H2 - 创建最佳文档 {#h2---create-the-best-documentation}

### H3 - 创建最佳文档 {#h3---create-the-best-documentation}

#### H4 - 创建最佳文档 {#h4---create-the-best-documentation}

##### H5 - 创建最佳文档 {#h5---create-the-best-documentation}

###### H6 - 创建最佳文档 {#h6---create-the-best-documentation}

---

## 重点 {#emphasis}

强调：又称斜体，带有 *星号* 或 _下划线_。

重点突出：又称黑体，带有 **星号** 或 _下划线_ 。

组合强调：**星号和_下划线_**。

删除线：使用两个波浪号，~~这是啥东东？~~。

---

## 目录 {#lists}

1. 首个目录项
1. 另一目录项
   - 无序号子目录
1. 实际数字并不重要，只是一个数字
   1. 有序号子目录
1. 再一个目录项

* 无序子目录可以使用星号

- 或减号

+ 或加号

---

## 链接 {#links}

[内联型链接](https://www.google.com/)

[标题内联型链接](https://www.google.com/ "Google's Homepage")

[参考型链接][arbitrary case-insensitive reference text]

[用数字定义的参考型链接][1]

或留空并使用[链接文本本身]

URL和尖括号中的URL，将自动变为链接。 http://www.example.com/ 或 <http://www.example.com/> ，有时是 example.com（举例，不在GitHub上）。

一些文本表明参考链接可以在以后使用。

[arbitrary case-insensitive reference text]: https://www.mozilla.org/
[1]: http://slashdot.org/
[链接文本本身]: http://www.reddit.com/

---

## 图片 {#images}

这是我们的标志（悬停以查看标题文本）:

内联型： ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

参考型： ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 2'

通过提供文件路径，可以使用任何文件夹中的图像。路径应针对 markdown 文件。

![img]{useBaseUrl('/static/img/logo.svg')}

---

## 代码 {#code}

```javascript
var s = 'JavaScript syntax highlighting';
alert(s);
```

```python
s = "Python syntax highlighting"
print(s)
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

```js {2}
function highlightMe() {
  console.log('This line can be highlighted!');
}
```

---

## 表格 {#tables}

冒号可用于对齐列。

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

每个标题单元格，须至少有3个破折号。 外轮廓（|）是可选的，您无需让原始 Markdown 排列整齐。 您还可以使用内联 Markdown 。

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

---

## 块引用 {#blockquotes}

> 电子邮件中的块引用非常有用，可以模拟回复文本。该行是同一引用的一部分。

引用断开。

> 这是一条很长的行，当它换行时仍会被正确引用。哦，boy，让我们继续写，以确保它足够长，可以实际上满足所有人。哦，您可以将 **Markdown** _放入_ 块引用中。

---

## 内联 HTML {#inline-html}

<dl>
  <dt>定义清单</dt>
  <dd>是人们有时会用到的东西.</dd>

  <dt>Markdown在HTML中</dt>
  <dd> *不* 是 **很** 好。使用 HTML <em>标记</em>.</dd>
</dl>

---

## 换行 {#line-breaks}

这是我们要开始的一行。

该行与上面的行之间有两个换行符，因此它将是一个_单独的段落_。

该行也是一个单独的段落，但是......该行仅由一个换行符分隔，因此它是_同一段落_中的一个单独的行。

---

## 告诫 {#admonitions}

（请保持题头： Note、Tip、Important、Caution、Warning 为英文状态，内容可用您想用的语言进行撰写。）

:::note

This is a note

:::

:::tip

This is a tip

:::

:::important

This is important

:::

:::caution

This is a caution

:::

:::warning

This is a warning

:::
