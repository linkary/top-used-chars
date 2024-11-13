中英文常用字常量表

## 常量表

| 常量名                    | 含义                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------- |
| `DIGITS`                  | 数字 (0123456789)                                                                                   |
| `TOP500_CN_CHARS`         | [500 个最常用的汉字][TOP500_CN_CHARS]                                                               |
| `TOP2500_CN_CHARS`        | [2500 个最常用的汉字][TOP2500_CN_CHARS]                                                             |
| `SEC1000_CN_CHARS`        | [1000 个次常用汉字][SEC1000_CN_CHARS]                                                               |
| `TOP_3500_CN_CHARS`       | 3500 个常用的汉字 ([2500 个最常用的汉字][TOP2500_CN_CHARS] + [1000 个次常用汉字][SEC1000_CN_CHARS]) |
| `TOP_CN_PUNCTS`           | 常用中文标点 (`。，！？；：‘’“”【】『』（）—…《》〈〉％、·「」¥～`)                                 |
| `UPPER_ENG_CHARS`         | 26 个大写英文字符 (`ABCDEFGHIJKLMNOPQRSTUVWXYZ`)                                                    |
| `LOWER_ENG_CHARS`         | 26 个小写英文字符 (`abcdefghijklmnopqrstuvwxyz`)                                                    |
| `ENG_CHARS`               | 英文字符 (含大小写)                                                                                 |
| `TOP_ENG_PUNCTS`          | 常用英文标点 (`!"#$%&\'()*+,-./:;<=>?@[\]^_{\|}\`)                                                  |
| `TOP_PUNCTS`              | 常用中英文标点 (`TOP_CN_PUNCTS` + `TOP_ENG_PUNCTS`)                                                 |
| `TOP_USED_500_CHARS`      | 500 个常用字符 (`TOP500_CN_CHARS` + `ENG_CHARS` + `DIGITS` + `TOP_PUNCTS`)                          |
| `TOP_USED_2500_CHARS`     | 2500 个常用字符 (`TOP2500_CN_CHARS` + `ENG_CHARS` + `DIGITS` + `TOP_PUNCTS`)                        |
| `COMMONLY_USED_CHARS`     | 中英文语境下常用的字符 (`TOP_3500_CN_CHARS` + `ENG_CHARS` + `DIGITS` + `TOP_PUNCTS`)                |
| `COMMONLY_USED_ENG_CHARS` | 英文语境下常用的字符 (`TOP_3500_CN_CHARS` + `ENG_CHARS` + `DIGITS` + `TOP_PUNCTS`)                  |

## 使用

可以结合 [fontmin](https://github.com/ecomfe/fontmin) 来做字体裁剪, 绝大多数的在线项目只需用到 `TOP_USED_500_CHARS` 里的字符

```shell
npm i top-used-chars fontmin -S
```

```javascript
import Fontmin from 'fontmin';
import { TOP_USED_500_CHARS } from 'top-used-chars';

const fontmin = new Fontmin().src('path/to/font').use(
  Fontmin.glyph({
    text: TOP_USED_500_CHARS,
  })
    .dest('path/to/output/font')
    .run(function (err, files) {
      if (err) {
        throw err;
      }
      console.log('已完成最常用字裁剪');
    })
);
```

[TOP500_CN_CHARS]: https://www.hanyuguoxue.com/zidian/zuichangyongzi '500 个最常用的汉字'
[TOP2500_CN_CHARS]: https://www.zdic.net/zd/zb/cc1/ '2500 个最常用的汉字'
[SEC1000_CN_CHARS]: https://www.zdic.net/zd/zb/cc2/ '1000 个次常用汉字'
