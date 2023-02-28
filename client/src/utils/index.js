import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt){
    const randomPrompt = surpriseMePrompts[Math.floor(Math.random() * surpriseMePrompts.length)];
    return randomPrompt === prompt ? getRandomPrompt(prompt) : randomPrompt;
}