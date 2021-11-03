import { createCanvas } from "https://deno.land/x/canvas/mod.ts";
import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";


const screen = {height: 828,width: 1792,};
const canvas = createCanvas(screen.height,screen.width);
const ctx = canvas.getContext("2d");

const exam = new Date("2022/1/15");


function handler() {
	const font_size = 400;
	ctx.fillStyle = "black";
	const today = new Date();

	const day = Math.round((exam - today) / (1000*60*60*24));
	const digit_length = String(day).length;


	console.log(day,digit_length);
	ctx.fillRect(0,0,screen.height,screen.width);

	ctx.font = `${font_size}px mono`;
	ctx.fillStyle = "white";
	ctx.fillText(`${day}`,screen.height/2 - Math.round(font_size/digit_length) - 50,screen.width * 4/5);

	// await Deno.writeFileSync("image.png",canvas.toBuffer());
	return new Response(canvas.toBuffer());
}
  
console.log("Listening on http://localhost:8000");
await listenAndServe(":8000", handler);