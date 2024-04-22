import Home from "../pages/Home";
import HomeSimple from "../pages/HomeSimple";
import PageSimple from "../pages/PageSimple";
import HomeIntermediate from "../pages/HomeIntermediate";
import PageIntermediate from "../pages/PageIntermediate";
import HomeAdvanced from "../pages/HomeAdvanced";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PageNotFound from "../pages/404Page";
import PageAdvanced1 from "../pages/PageAdvancedWhatIs";
import PageAdvanced2 from "../pages/PageAdvancedOccurrence";
import PageAdvanced3 from "../pages/PageAdvancedAppearance";
import PageAdvanced4 from "../pages/PageAdvancedFeeding";
import PageAdvanced5 from "../pages/PageAdvancedBreeding";
import PageAdvancedEnd from "../pages/PageAdvancedEnd";

const Routes = ({children}) => {
    const routesForPublic =[
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/simple/",
            element: <HomeSimple/>,
        },
        {
            path: "/simple/page/*",
            element: <PageSimple/>,
        },
        {
            path: "/intermediate/",
            element: <HomeIntermediate/>,
        },
        {
            path: "/intermediate/page",
            element: <PageIntermediate/>,
        },
        {
            path: "/advanced/",
            element: <HomeAdvanced/>,
        },
        {
            path: "/advanced/what-is-blue-dragon",
            element: <PageAdvanced1/>,
        },
        {
            path: "/advanced/occurrence",
            element: <PageAdvanced2/>,
        },
        {
            path: "/advanced/appearance",
            element: <PageAdvanced3/>,
        },
        {
            path: "/advanced/feeding",
            element: <PageAdvanced4/>,
        },
        {
            path: "/advanced/breeding",
            element: <PageAdvanced5/>,
        },
        {
            path: "/advanced/end",
            element: <PageAdvancedEnd/>,
        },
        {
            path: "*",
            element: <PageNotFound/>
        }

    ];

    const router = createBrowserRouter([
        ...routesForPublic,
    ]);
    return (
        <RouterProvider router={router} >
            {children}
        </RouterProvider>

    );
};
export default Routes;