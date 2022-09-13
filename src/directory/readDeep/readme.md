## directory.readDeep

Return full paths of deep directories and files inside of target folder

```javascript
import readDeep from '@utils/directory/readDeep';
```

### Usage

```javascript
readDeep(path)
```

**Params:**

* **path**: string | string[] - path to directory

**Return:**

* Promise<string[]> - list of full paths of deep inner directories and files

#### Example

```javascript
await clear(__dirname);
```

#### Result

```json
[
  "C:\projects\utils\src\directory\readDeep\index.test.ts",
  "C:\projects\utils\src\directory\readDeep\index.ts",
  "C:\projects\utils\src\directory\readDeep\mock\deep_file.txt',
  "C:\projects\utils\src\directory\readDeep\mock',
  "C:\projects\utils\src\directory\readDeep\readme.doc.js"
]
```