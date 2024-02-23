import {StrictMode} from "react";
import {Root, createRoot} from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {router} from "components/layout/routes";

const root: Root = createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);