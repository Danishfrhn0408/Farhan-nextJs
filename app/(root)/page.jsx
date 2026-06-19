// Copyright (C) 2025 Farhan
// This file is part of Farhan-nextJs Portfolio.
// Licensed under the GNU GPL v3.0. See LICENSE for details.

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FullPageWrapper, Section, useFullPage } from "@alvalens/react-fullpage-snap";

// components
import Button from "@/components/Button";
import Me from "@/public/image/alvalen-front.webp";
import MeAbout from "@/public/image/me2.jpg";
import Setup from "@/public/image/setup.jpg";
import ProjectAll from "@/public/image/projects.png";
import Hr from "@/components/Hr";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ScrollIndicator() {
    const { activeIndex } = useFullPage();
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        if (activeIndex !== 0) setDismissed(true);
    }, [activeIndex]);

    return (
        <AnimatePresence>
            {activeIndex === 0 && !dismissed && (
                <motion.div
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.6, delay: 1.2 } }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}>
                    <span className="text-[10px] uppercase tracking-[4px] text-gray-500 font-medium">
                        Scroll
                    </span>
                    <motion.div
                        className="w-[1.5px] h-14 bg-gray-500 origin-top"
                        animate={{
                            scaleY: [0, 1, 1],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.5, 1],
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

const MyPage = () => {
    return (
        <FullPageWrapper>
            <Section>
                <div className="mx-auto w-[82%] max-w-screen-2xl grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden">
                    <motion.div
                        className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                        }}>
                        <div className="block md:hidden col-span-1 mx-auto my-10">
                            <div className="bg-slate-500 rounded-full h-60 w-60 grayscale hover:grayscale-0 transition-all ease duration-300">
                                <Image
                                    src={Me}
                                    width={500}
                                    height={500}
                                    className="rounded-full w-full h-full object-cover "
                                    alt="Farhan"
                                    placeholder="blur"
                                />
                            </div>
                        </div>
                        <motion.h3
                            className="uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.2,
                                type: "spring",
                            }}>
                            Farhan
                        </motion.h3>
                        <motion.h1
                            className="text-black text-4xl md:text-6xl lg:text-6xl 2xl:text-8xl font-bold my-2 md:my-5"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.3,
                                type: "spring",
                            }}>
                            AI & Software Developer
                        </motion.h1>
                        <motion.p
                            className="title text-md 2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: