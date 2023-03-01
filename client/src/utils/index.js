import { surpriseMePrompts } from "../constants";
import { saveAs } from "file-saver";

export function getRandomPrompt(prompt){
    const randomPrompt = surpriseMePrompts[Math.floor(Math.random() * surpriseMePrompts.length)];
    return randomPrompt === prompt ? getRandomPrompt(prompt) : randomPrompt;
}

export async function downloadPomptImg(name, imgPrompt){  
    saveAs(imgPrompt, name)
} 