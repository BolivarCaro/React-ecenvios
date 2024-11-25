import { Box } from "@mui/system"
import { NavBar, Sidebar } from "../components";
import { Toolbar } from "@mui/material";

/* import { Navbar, Sidebar } from "../components"
import { Toolbar } from "@mui/material"; */


const drawerWidth = 200;

export const EcenviosLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>
            <NavBar  drawerWidth={ drawerWidth } />

            <Sidebar drawerWidth= { drawerWidth } />

            <Box
                component='main'
                sx={{
                    flexGrow: 1,
                    p: 3,
                    backgroundColor: 'background.paper',

                }}
            >
                <Toolbar />

                {children}

            </Box>

        </Box>
    )
}