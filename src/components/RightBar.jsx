import React from "react";
import { Box } from "@mui/system";
import { ImageList } from "@mui/material";
import { ImageListItem, Typography } from "@mui/material";

function RightBar(props) {
    const itemData = [
        {
            img: "https://post.healthline.com/wp-content/uploads/2021/06/lizard-iguana-1200x628-facebook.jpg",
            title: "Breakfast",
        },
        {
            img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
            title: "Burger",
        },
        {
            img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
            title: "Camera",
        },
        {
            img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
            title: "Coffee",
        },
    ];
    return (
        <Box display={{ xs: "none", md: "block" }}>
            <Typography variant="h6" color="initial">
                Latest Photos
            </Typography>
            <ImageList>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img src={item.img} />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

export default RightBar;
