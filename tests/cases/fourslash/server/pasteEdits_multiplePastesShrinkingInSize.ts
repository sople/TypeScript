/// <reference path="../fourslash.ts" />

// @Filename: /a.ts
//// function foo() {
////    [|console.log("Good day");|]
//// }
//// function too() {
////    function k(t: string) {
////        [|console.log("Happy Holidays");|]
////    }
//// }
//// class bar {
////     constructor() {
////         function a() {
//// [|            console.log("hello");|]
////         }
////         a();
////     }
////     c() {
////         console.log("hello again");
////         function k[|() {
////             const happy = banana + avocados;
////         }|]
////     }
//// }

// @Filename: /b.ts
//// export const juices = 1;
//// export const sauce = 2;

// @Filename: /c.ts
//// export const figs = 3;
//// export const tomato = 4;

// @Filename: /tsconfig.json
////{ "files": ["a.ts", "b.ts", "c.ts"] }

verify.pasteEdits({
    args: {
        pastedText: [ 
            `console.log("Good ");`,`const k = figs + juices;`,
            `    console.log(tomato);`,
            `(kiwi: string) {
            const cherry=tomato;
        }`
        ],
        pasteLocations: test.ranges(),
    },
    newFileContents: {
        "/a.ts":
`import { juices } from "./b";
import { figs, tomato } from "./c";

function foo() {
   console.log("Good ");
}
function too() {
   function k(t: string) {
       const k = figs + juices;
   }
}
class bar {
    constructor() {
        function a() {
    console.log(tomato);
        }
        a();
    }
    c() {
        console.log("hello again");
        function k(kiwi: string) {
            const cherry=tomato;
        }
    }
}`
    }
});
