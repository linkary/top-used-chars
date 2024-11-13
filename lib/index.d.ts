// 数字
export const DIGITS: string;

// 500个最常用的汉字
export const TOP500_CN_CHARS: string;

// 2500个最常用的汉字
export const TOP2500_CN_CHARS: string;

// 1000个次常用汉字
export const SEC1000_CN_CHARS: string;

// 3500个常用的汉字
export const TOP_3500_CN_CHARS: string;

// 常用中文标点
export const TOP_CN_PUNCTS: string;

// 大写英文字符
export const UPPER_ENG_CHARS: string;

// 小写英文字符
export const LOWER_ENG_CHARS: string;

// 英文字符 (含大小写)
export const ENG_CHARS: string;

// 常用英文标点
export const TOP_ENG_PUNCTS: string;

// 常用中英文标点 (`TOP_CN_PUNCTS` + `TOP_ENG_PUNCTS`)
export const TOP_PUNCTS: string;

// 500个常用字符 (`TOP500_CN_CHARS` + `ENG_CHARS` + `DIGITS` + `TOP_PUNCTS`)
export const TOP_USED_500_CHARS: string;

// 2500个常用字符 (`TOP2500_CN_CHARS` + `ENG_CHARS` + `DIGITS` + `TOP_PUNCTS`)
export const TOP_USED_2500_CHARS: string;

// 英文语境下常用的字符 `ENG_CHARS` + `TOP_ENG_PUNCTS` + `DIGITS`
export const COMMONLY_USED_ENG_CHARS: string;

// 中英文语境下常用的字符 (含3500个常用汉字、英文大小写字符、常用中文标点、常用英文标点)
export const COMMONLY_USED_CHARS: string;
