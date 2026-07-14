import { GoldenTimeEngine } from "../engine/GoldenTimeEngine.js";

let engine = null;


export function getGoldenEngine(){

    if(!engine){

        console.log("Loading Golden Archive Engine...");

        engine =
        new GoldenTimeEngine();

        console.log("Golden Archive Ready");

    }


    return engine;

}
