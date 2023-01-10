---
id: contributing
title: 撰写规范
---

您可以使用 **[GitHub 风格的 Markdown 语法](https://github.github.com/gfm/)** 编写内容。

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

强调：又称斜体，可在文字前后添加 *单星号* 或 _下划线_ 。

重点突出：又称黑体，可在文字前后添加 **双星号** 或 _下划线_ 。

组合强调：可在文字前后同时添加 **双星号和_下划线_** 。

删除线：在文字前后添加两个波浪号 ~~这是啥东东？~~ 。

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

[内嵌型链接](https://www.google.com/)

[标题内嵌型链接](https://www.google.com/ "Google's Homepage")

[参考型链接][arbitrary case-insensitive reference text]

[用数字定义的参考型链接][1]

或留空并使用[链接文本本身]

URL和尖括号中的URL，将自动变为链接。 http://www.example.com/ 或 <http://www.example.com/> ，有时是 example.com（举例，不在 GitHub 上）。

一些文本表明参考链接可以在以后使用。

[arbitrary case-insensitive reference text]: https://www.mozilla.org/
[1]: http://slashdot.org/
[链接文本本身]: http://www.reddit.com/

---

## 图片 {#images}

这是我们的标志（悬停以查看标题文本）:

内嵌型： ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png '标志标题文本 1')

参考型： ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png '标志标题文本 2'

通过提供文件路径，可以使用任何文件夹中的图像。路径应指向 markdown 文件。

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

冒号（:），可用于列的对齐，示例如下：

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

每个标题单元格，至少须有 3 个破折号（-）。 外框线（|）是可选的，您不需要把原始 Markdown 排列得很漂亮（会自动排列整齐）。 您也可以使用内嵌 Markdown 。

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
    _Still_  | `renders` | **nicely** 
| 1        | 2         | 3          |

---

## 块引用 {#blockquotes}

> 电子邮件中的块引用非常有用，可以模拟回复文本。该行是同一引用的一部分。

引用断开

> 这一行很长，当它换行时仍会被正确引用。 哦，boy，让我们继续，确保它够长，以满足所有人的实际需要。哦，您也可以将 **Markdown** _放入_ 块引用中。

---

## 内嵌 HTML {#inline-html}

<dl>
  <dt>定义清单</dt>
  <dd>是人们有时会用到的东西。</dd>

  <dt>Markdown 在 HTML 中</dt>
  <dd> *不* 是 **很** 好用。使用 HTML <em>标记</em>。</dd>
</dl>

---

## 换行 {#line-breaks}

这是我们要开始的第一行。


本行与上面一行之间，有两个换行符，因此它将成为一个_单独段落_ 。

本行也是一个单独段落，但是......这一行只用一个换行符隔开，所以它是_同一段落_ 中的单独一行。

---

## 告诫 {#admonitions}

注：请保持题头：note、tip、important、caution 和 warning 为原始英文状态，内容可根据您的需要撰写。

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
