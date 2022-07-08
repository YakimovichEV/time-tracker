import React from "react";

import { AddItem, ItemList } from "./components";

function App() {
    return (
        <div className="flex flex-col items-center justify-center p-5">
            <h1 className="text-5xl font-extrabold my-16 md:text-6xl">
                Tracker
            </h1>

            <div className="w-64 sm:w-96 xl:w-2/6">
                <AddItem />
                <ItemList />
            </div>
        </div>
    );
}

export default App;
