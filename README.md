<h1 align="center">QUICKAPP DEEPLINK COMPONENT</h1>

<div align="center">
  <strong>基于快应用 deeplink，从 Web 页面拉起指定「<a href="https://forum.lovejade.cn/t/quickapp">快应用</a>」.</strong>
</div>

## 目标与哲学

[快应用](https://nicelinks.site/post/5b5fb5bc615bf842b609105f)是基于手机硬件平台的新型应用形态，具备传统APP完整的应用体验，无需安装、即点即用；覆盖 10 亿设备，与操作系统深度集成；您可以基于它，快速创建体验良好的应用服务。[快应用](https://nicelinks.site/post/5b5fb5bc615bf842b609105f)天生提供 deeplink 功能，支持从 H5 拉起。此仓库基于 Web Component，封装了一个组件，支持您快速集成进 Web 网站，从而拉起指定的[快应用](https://nicelinks.site/post/5b5fb5bc615bf842b609105f)、乃至**指定页面以及参数**。<br>

## 先决条件

您拥有自己可控的 web 网站即可。

## 在线示例

- [倾城之链](http://nicelinks.site/)；
- [静轩之别苑](https://quickapp.lovejade.cn/)；
- [悠然宜想亭](https://forum.lovejade.cn/)；

**温馨提示**：您需要使用支持[快应用](https://nicelinks.site/post/5b5fb5bc615bf842b609105f)手机访问，如 vivo、OPPO、小米、华为、魅族等。

## 如何使用

### 安装

您需要在 head 标签内，注入一段 JavaScript 脚本（4kb）；
```js
<script async src="https://cdn.jsdelivr.net/npm/quickapp-deeplink@latest/dist/quickapp-deeplink-min.js"></script>
```

### 运用

在 body 标签内，添加 `quickapp-deeplink` 组件标签，您可以自行定义参数；

```html
<quickapp-deeplink 
  brand="Vivo|Weixin|Mobile"
  text="快应用中打开"
  deeplink="https://hapjs.org/app/graceful.sentences.com/pages/AryaJarvis">
</quickapp-deeplink>
```

### 参数

| 字段 | 说明 | 默认值 |
| --- | --- | --- |
| text | 按钮文本 | '快应用中打开' |
| color | 文本颜色 | '#ffffff' |
| bgcolor | 按钮背景颜色 | '#20a0ff' |
| deeplink | 指定快应用 | 'https://hapjs.org/app/graceful.sentences.com' |

## 寻求合作

如果您有 H5 或其他私域流量，想依此获得更多「睡后收入」，诚邀合作，具体方式与价格可以谈；如果您对此感兴趣，欢迎添加微信（如下图），互动交流，共同致富。

<div align="center">
  <img src="https://s3.ax1x.com/2021/02/19/yfCjOJ.jpg" width=200/>
</div>

需要补充说明的是，合作可以给您带来的好处🈶：

- 并不影响您 H5 页面本身的正常访问；
- 为您带来丰厚的「睡后收入」；

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2021-present, [nicejade](https://nicelinks.site/member/admin/?utm_source=nicelinks.site).
