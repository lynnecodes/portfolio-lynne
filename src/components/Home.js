import React from "react"

export default function Home () {
    return(
        <main>
            <img src="https://images.unsplash.com/photo-1617991316407-529f0614b6f5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=60" alt="cherry blossoms" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green 100 font-bold cursive leading-none lg:leading-snug home-name">Hey</h1>
            </section>
        </main>
        )
}