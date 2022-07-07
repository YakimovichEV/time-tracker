import React from "react";

import { AddItem, ItemList } from "./components";

function App() {
    return (
        <div className="flex flex-col items-center justify-center p-5">
            <h1 className="text-6xl font-extrabold my-16">Tracker</h1>

            <div className="w-2/6">
                <AddItem />
                <ItemList />
            </div>
        </div>
    );
}

export default App;
