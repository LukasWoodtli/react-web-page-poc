import {Card, CardContent, CardHeader, Grid, Typography} from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import GavelIcon from '@mui/icons-material/Gavel';
import StraightenIcon from '@mui/icons-material/Straighten';
import SchoolIcon from '@mui/icons-material/School';
import CableIcon from '@mui/icons-material/Cable';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
//import SummarizeIcon from '@mui/icons-material/Summarize';

const Dashboard = () => {

    const cards = [
        {
            avatar: <CableIcon fontSize="large"/>,
            title: 'Embedded Systems',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }, {
            avatar: <StraightenIcon fontSize="large"/>,
            title: 'Quality Software Design',
            text: 'Test Driven Development Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }, {
            avatar: <ConstructionIcon fontSize="large"/>,
            title: 'Build and Continuous Integrations',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitconsectetur adipiscing elitconsectetur adipiscing elitconsectetur adipiscing elitconsectetur adipiscing elitconsectetur adipiscing elitconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }, {
            avatar: <GavelIcon fontSize="large"/>,
            title: 'Improving Legacy Code',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }, {
            avatar: <CloudQueueIcon fontSize="large"/>,
            title: 'Distributed Systems',
            text: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }, {
            avatar: <SchoolIcon fontSize="large"/>,
            title: 'Training and Coaching',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet     exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        } /*, {
            avatar: <SummarizeIcon fontSize="large"/>,
            title: 'Contracting and Consulting',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }*/

    ];
    return (
        <>
            <Grid
                container
                spacing={3}
                item
                colums={{
                    xs: 1,
                    sm: 1,
                    md: 2,
                    lg: 3,
                    xl: 6
                }}
                direction="row"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="stretch"

                component="main"
                sx={{
                    flexGrow: 1,
                    px: 5,
                    py: 5
                }}
            >
                {cards.map(card => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={4}
                        xl={2}
                        display="flex"
                        key={card.title}
                    >
                        <Card
                            xs={12}
                            sm={6}
                            md={4}
                            lg={4}
                            xl={2}
                        >
                            <CardHeader
                                avatar={card.avatar}
                                title={
                                    <Typography variant="h5" align="left">
                                        {card.title}
                                    </Typography>
                                }/>
                            <CardContent>
                                <Typography align="left">
                                    {card.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>))}
            </Grid>
        </>
    )
};

export default Dashboard;
