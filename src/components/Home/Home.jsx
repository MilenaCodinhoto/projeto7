const Home =()=>{
    return (

        <>
        <div className="bg-gradient-to-l from-cyan-500 to to-blue-500">
        <h1 className="text-3xl font-bold underline text-blue-800">Home</h1>
        <button>Clique</button>
        </div>

        <div className="relative-w-96 m-3 cursor-pointer border-2 shaow-lg rounded-xl items-center">
            <div className="flex h-28 bg-blue-700 rounded-xl items-center justify-center">
                <h1 className="absolute mx-auto text-center right text-2xl text-white">
                    Clique Aqui
                </h1>
            </div>
            <div className="p-2 border-b-2">
                <h6> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eos cumque ut, itaque eveniet quaerat error rerum tempore consectetur dolorem similique iusto hic velit, et recusandae assumenda fuga beatae sit?
                </h6>
                <div className="flex flex-wrap items-center m-2">
                    <span className="border border-blue-500 rounded-2xl px-2 my-1 mx-1">#React</span>
                    <span className="border border-blue-500 rounded-2xl px-2 my-1 mx-1">#CSS</span>
                    <span className="border border-blue-500 rounded-2xl px-2 my-1 mx-1">#</span>
                </div>

                <div className="flex flex-wrap items-center rounded-b-xl border-t-2 bg-white">
                    <button className="border rounded-2xl bg-blue-600 text-white shadow-sm p-1 m-2">Projetos</button>
                    <button className="border rounded-2xl bg-blue-600 text-white shadow-sm p-1 m-2">GitHub</button>
                </div>
            
            </div>

        </div>

        </>
    )
}
export default Home