# File system of NodeJs
It allows JS code running outside the browser and interact directly to operating system.
## Common operation on file/folder
-Reading and writing files -> readFile(), writeFile(), appendFile()
- Directory management -> mkdir(),  rmdir(), readdir()
- Metadata/information -> stat(), lstat(), fstat()

- Watching for changes -> watch(), watchFile() , unwatchFile()

- Streaming Large Files -> createReadStream(), createwritestream()

- File operation -> rename(), truncate(), unlink(), link(), syslink()

CRUD - create read update delete.

Await can be used with any promise in async function. That async function will also access by await keyword