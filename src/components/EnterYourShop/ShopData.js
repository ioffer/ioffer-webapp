import AddLocationIcon from "@material-ui/icons/AddLocation";
import CallIcon from "@material-ui/icons/Call";
import EventIcon from "@material-ui/icons/Event";
import PostAddIcon from "@material-ui/icons/PostAdd";
import EmailIcon from "@material-ui/icons/Email";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import React from "react";
import RoomIcon from '@material-ui/icons/Room';
import StreetviewIcon from '@material-ui/icons/Streetview';

export const arrayShop =[
    {
        icon: <CallIcon /> ,
        title: "Shop Name" ,
        data: "name",
    },
    {
        icon: <AddLocationIcon /> ,
        title: "Address" ,
        data: "address",
    },
    {
        icon: <EventIcon /> ,
        title: "Location" ,
        data: "location",
    },
    {
        icon: <RoomIcon />,
        title: "Mobile Number" ,
        data: "mobileNumber",
    },
    {
        icon: <PostAddIcon /> ,
        title: "Phone Number" ,
        data: "phoneNumbers",
    },
    {
        icon: <EmailIcon /> ,
        title: "Shop Catogery" ,
        data: "shopCategory",
    },
    {
        icon: <LocationCityIcon /> ,
        title: "Tags" ,
        data: "tags",
    },
    {
        icon: <AddLocationIcon /> ,
        title: "Website" ,
        data: "website",
    },
    {
        icon: <StreetviewIcon /> ,
        title: "Email" ,
        data: "email",
    },
];