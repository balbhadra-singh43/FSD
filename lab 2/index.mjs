import { writeFile, readFile, appendFile } from "fs/promises";

await writeFile("stud.txt","Ravikant Singh\nRollNo:82");
console.log("File written");

// // const data = await readFile("stud.txt", "utf-8");
// // console.log(`file contents: ${data}`);


const addContent = async (fname, content  ) => {
    await writeFile(fname, content);
    console.log(`${content} written in file ${fname}`);



};

const readContent = async (fname) => {
    const data = await readFile(fname, "utf-8");
    return data;

};
const appendData = async (fname, content) => {
    await appendFile (fname, "\n" + content);
    console.log("data appended");
};

await addContent("notes.txt","FS is easy in JS");
console.log("Contents\n", await readContent("notes.txt"));
await appendData("notes.txt", "It can add, read and update content")
console.log("Updated Contents\n", await readContent("notes.txt"));




