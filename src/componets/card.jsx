import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import positivo from '../assets/positivo.svg';
import negativo from '../assets/negativo.svg';
import './style.css';

export default function OutlinedCard({ name }) {
    let boxColor = '#da513e'
    let boxLikes = '56 likes'
    if (name[0] === 'ROYAL') {
        boxColor = 'yellow'
        boxLikes = '81 likes'
    }
    if (name[0] === 'CHICKEN') {
        boxColor = '#70E8E1'
        boxLikes = '50 likes'
    }
    if (name[0] === 'ITALIAN') {
        boxColor = '#9EE870'
        boxLikes = '65 likes'
    }

    return (
        <Box sx={{
            minWidth: 170,
            borderRadius: 40
        }}>
            <Card sx={{ borderRadius: "15.51px", height: "245px" }} variant="outlined">
                <React.Fragment >
                    <CardContent sx={{ display: "flex", gap: "7px", justifyContent: "space-around" }}>
                        <Typography sx={{ fontSize: 10, textDecoration: "underline", cursor: "pointer" }} color="text.secondary" gutterBottom>
                            Overview
                        </Typography>
                        <Typography sx={{ fontSize: 10, cursor: "pointer" }} color="text.secondary" gutterBottom>
                            Ingredients
                        </Typography>
                    </CardContent>
                    <Box sx={{
                        backgroundColor: boxColor, position: "absolute",
                        width: "35.52px", marginTop: "-8px",
                        height: "50.42px", borderRadius: "13px", marginLeft: "20px"
                    }}>
                        <Typography sx={{
                            color: "#3F3F3F", fontFamily: "Inter", fontSize: "30px", fontWeight: "1000", paddingLeft: "10px", lineHeight: "39px"
                        }}>{
                                (name[1] === "MASSALA" ? "8.4 " : "") || (name[1] === "CHICKEN" ? "7.5 " : "") || (name[1] === "CRAB" ? "9.8 " : "") || (name[1] === "FISH" ? "8.1 " : "")
                            }

                        </Typography>
                    </Box>
                    <CardContent sx={{ padding: "10px" }}>
                        <Typography sx={{
                            paddingTop: "45px",
                            fontSize: "15px",
                            lineheight: "26px",
                            fontWeight: "bold",
                            color: "#3F3F3F"

                        }}>
                            {name[0].toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase()) + " " + name[1].toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase())}
                        </Typography>
                        <Typography sx={{
                            marginTop: "-2px", fontFamily: 'Inter', fontWeight: "100",
                            fontSize: "8.5px", color: "#3F3F3F"
                        }}>
                            Lorem ipsum dolor
                        </Typography>
                        <Typography sx={{
                            marginTop: "7px", fontFamily: 'Inter', fontWeight: "100",
                            fontSize: "9px", color: "#3F3F3F"
                        }}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit ante, penatibus arcu himenaeos
                        </Typography>


                    </CardContent>

                    <CardActions sx={{ marginTop: "5px", display: "flex", gap: "25px" }}>
                        <Box sx={{ display: "flex", gap: "7px", backgroundColor: "#EFEFEF", width: "69px", height: "23.41px", alignItems: "center", borderRadius: "10px" }}>
                            <img className="icons-like" src={positivo} alt="" />
                            <Typography sx={{ fontSize: "10px" }}>
                                {boxLikes}
                            </Typography>
                        </Box>

                        <img className="icons-like" src={negativo} alt="" />

                    </CardActions>
                </React.Fragment>
            </Card>
        </Box>
    );
}
