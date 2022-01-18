import React from "react";
import Typewriter from 'typewriter-effect';


export default function TypingEffect() {
return (
	<div className="text-[3rem] text-[green] mb-[4rem]">
	<Typewriter
        options={{
            strings: ["<span id='explore'>Explore</span>", "<span id='enhance'>Enhance</span>", "<span id='execute'>Execute</span>" ,  "<span id='excel'>Excel</span>"],
            autoStart: true,
            loop: true,
        }}
	/>
	</div>
);
}
