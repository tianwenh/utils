# @tianwenh/utils

List of utils.

## Dev

```
pnpm i
npm run build
```

```js
// from file
import { slugify } from '@tianwenh/utils/string';

slugify('hello world');

import { getTheme } from '@tianwenh/utils/theme';
getTheme();

// or
import { string, theme } from '@tianwenh/utils';
string.slugify('hello world');
theme.getTheme();
```
