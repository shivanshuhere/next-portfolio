"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { searchForWorkspaceRoot } from "vite";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <>
            <div>
                <Menu setActive={setActive}>
                    <HoveredLink className="hover:text-red-400" href="/">
                        Home
                    </HoveredLink>

                    <MenuItem
                        active={active}
                        item="Projects"
                        setActive={setActive}
                    >
                        <HoveredLink href="/projects">
                            Crypto Dashboard
                        </HoveredLink>
                    </MenuItem>
                    <HoveredLink className="hover:text-red-400" href="contact">
                        Contact Me
                    </HoveredLink>
                </Menu>
            </div>
        </>
    );
}

export default Navbar;
