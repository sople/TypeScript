currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Before request
//// [/a.ts]
export const a = 0;

//// [/b.ts]
import { a } from "./a";


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/b.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /b.ts ProjectRootPath: undefined:: Result: undefined
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /dev/null/inferredProject1* WatchType: Missing file
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/a.ts Text-1 "export const a = 0;"
	/b.ts SVC-1-0 "import { a } from \"./a\";"


	a.ts
	  Imported via "./a" from file 'b.ts'
	b.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /b.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 1,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      }
    }
After request

PolledWatches::
/a/lib/lib.d.ts: *new*
  {"pollingInterval":500}

FsWatches::
/a.ts: *new*
  {}

Projects::
/dev/null/inferredProject1* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
    autoImportProviderHost: false

ScriptInfos::
/a.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/b.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "rename",
      "arguments": {
        "file": "/b.ts",
        "line": 1,
        "offset": 22
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "response": {
        "info": {
          "canRename": false,
          "localizedErrorMessage": "You cannot rename this element."
        },
        "locs": []
      },
      "responseRequired": true
    }
After request

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "configure",
      "arguments": {
        "preferences": {
          "allowRenameOfImportPath": true
        }
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 3,
      "success": true
    }
After request

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "rename",
      "arguments": {
        "file": "/b.ts",
        "line": 1,
        "offset": 22
      },
      "seq": 4,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "response": {
        "info": {
          "canRename": true,
          "fileToRename": "/a.ts",
          "displayName": "/a.ts",
          "fullDisplayName": "./a",
          "kind": "module",
          "kindModifiers": "",
          "triggerSpan": {
            "start": {
              "line": 1,
              "offset": 22
            },
            "end": {
              "line": 1,
              "offset": 23
            }
          }
        },
        "locs": [
          {
            "file": "/b.ts",
            "locs": [
              {
                "start": {
                  "line": 1,
                  "offset": 20
                },
                "end": {
                  "line": 1,
                  "offset": 23
                },
                "contextStart": {
                  "line": 1,
                  "offset": 1
                },
                "contextEnd": {
                  "line": 1,
                  "offset": 25
                }
              }
            ]
          }
        ]
      },
      "responseRequired": true
    }
After request

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "configure",
      "arguments": {
        "preferences": {
          "allowRenameOfImportPath": false
        }
      },
      "seq": 5,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 5,
      "success": true
    }
After request

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "configure",
      "arguments": {
        "file": "/b.ts",
        "formatOptions": {},
        "preferences": {
          "allowRenameOfImportPath": true
        }
      },
      "seq": 6,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Host configuration update for file /b.ts
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 6,
      "success": true
    }
After request

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "rename",
      "arguments": {
        "file": "/b.ts",
        "line": 1,
        "offset": 22
      },
      "seq": 7,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "response": {
        "info": {
          "canRename": true,
          "fileToRename": "/a.ts",
          "displayName": "/a.ts",
          "fullDisplayName": "./a",
          "kind": "module",
          "kindModifiers": "",
          "triggerSpan": {
            "start": {
              "line": 1,
              "offset": 22
            },
            "end": {
              "line": 1,
              "offset": 23
            }
          }
        },
        "locs": [
          {
            "file": "/b.ts",
            "locs": [
              {
                "start": {
                  "line": 1,
                  "offset": 20
                },
                "end": {
                  "line": 1,
                  "offset": 23
                },
                "contextStart": {
                  "line": 1,
                  "offset": 1
                },
                "contextEnd": {
                  "line": 1,
                  "offset": 25
                }
              }
            ]
          }
        ]
      },
      "responseRequired": true
    }
After request
