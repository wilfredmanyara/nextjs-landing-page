"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function CallToAction() {
    const animation = useRef<AnimationPlaybackControls | null>(null); 
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (scope.current) { 
            animation.current = animate(
                scope.current,
                { x: "-50%" },
                { duration: 30, ease: "linear", repeat: Infinity }
            );

            if (animation.current) {
                animation.current.speed = 0.5; 
            }
        }

        return () => {
            if (animation.current) {
                animation.current.stop();
            }
        };
    }, [animate, scope]); 

    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    ref={scope}
                    className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium"
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-lime-400 text-7xl">
                                &#10038;
                            </span>
                            <span>Try it for free</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
