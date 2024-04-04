"use client"

import Link from "next/link"
import { useState } from "react"
import styles from "./links.module.css"

const links = [
    {
        title: "Products",
        path: "/products",
    },
    {
        title: "Login",
        path: "/login",
    },
    {
        title: "Get in touch ->",
        path: "https://tally.so/r/mYQMG0",
    },
]

const Links = () => {
    const[open, setOpen] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link =>(
                    <Link href={link.path} key={link.title}>{link.title}</Link>
                )))}
            </div>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                    {links.map((link=>(
                        <Link href={link.path} key={link.title}>{link.title}</Link>
                    )))}
                    </div>
            }
        </div>
    )
}

export default Links