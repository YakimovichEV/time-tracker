import React from "react";

import { Input } from "../components";

export const AddItem: React.FC = () => {
    return (
        <>
            <Input
                name="tracker"
                placeholder="Enter tracker name"
                className="mb-5"
            />
        </>
    );
};
