import {Box, Card, CardContent, CardHeader, Container, Grid, Typography} from "@mui/material";
import DashBoard from "../dashboard/DashBoard";
import React from "react";
import image from './img/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg';


function MainPage() {
    return <>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                px: 5,
                py: 5
            }}
        >
            <Container maxWidth={false}>
                <Grid
                    container
                    spacing={3}
                    item
                    colums={{
                        xs: 1,
                        sm: 1,
                        md: 2,
                        lg: 2,
                        xl: 2
                    }}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="stretch"
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        xl={6}
                        alignItems="stretch"
                    >
                        <Card variant="outlined" sx={{border: 0}}>
                            <CardHeader title={
                                <Typography variant="h4" align="left">
                                    Welcome to my Page
                                </Typography>}
                            />
                            <CardContent>
                                <Typography align="left">
                                    Lorem ipsum
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        xl={6}
                        alignItems="stretch"
                    >
                        <Card variant="outlined" sx={{border: 0}}>
                            <CardContent>
                                <img width="100%" src={image} alt="Electronic board (by Alexandre Debieve)"/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>


        <DashBoard/>
    </>;
}

export default MainPage;
