"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";

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
                    <HoveredLink className="hover:text-red-400" href="/contact">
                        Contact Me
                    </HoveredLink>
                </Menu>
            </div>
        </>
    );
}

export default Navbar;
