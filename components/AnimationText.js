import React from "react";
import Typewriter from 'typewriter-effect';


export default function TypingEffect() {
return (
	<div className="text-[3rem] text-[green] mb-[4rem]">
	<Typewriter
        options={{
            strings: ['Explore', 'Enhance', 'Execute', 'Excel'],
            autoStart: true,
            loop: true,
        }}
	/>
	</div>
);
}
