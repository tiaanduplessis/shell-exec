// TypeScript's Node16/NodeNext resolution needs a declaration for each module format.
require("fs").copyFileSync("dist/index.d.ts", "dist/index.d.mts");
