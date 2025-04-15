import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

const AppLayout = () => {
    return (
        <div className="app"></div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
