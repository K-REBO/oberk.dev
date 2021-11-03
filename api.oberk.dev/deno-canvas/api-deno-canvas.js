import { createCanvas, init } from "https://deno.land/x/canvas/mod.ts";

addEventListener("fetch", async (evt) => {

	const screen = {height: 828,width: 1792,};

	await init();
	const canvas = createCanvas(screen.height,screen.width);
	const ctx = canvas.getContext("2d");

	const exam = new Date("2022/1/15");

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

	evt.respondWith(
		new Response(canvas.toBuffer(), {
		  headers: {
			"content-type": "image/png",
		  },
		})
	);
});