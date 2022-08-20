import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useFetch from "../../hooks/useFetch"
import "./eventModal.css"

const EventModal = ({ setOpen, event }) => {

    const { data } = useFetch("/events");
    const start = new Date(event.startDate)
    const end = new Date(event.endDate)

    return (

        <div className="eventModal">
            <div className="mContainer">
                <CancelIcon
                    className="mClose"
                    onClick={() => setOpen(false)}
                />

                <div className="mEvents">
                    {event.poster && <div className="mLeft">
                        <img src={event.poster} alt="" />
                    </div>}
                    <div className="mRight">
                        <div className="mTitle">{event.name}</div>
                        <div className="mDesc">{event.desc}</div>
                        <CalendarMonthIcon className='mIcon' />
                        {start.getDate() === end.getDate() ? (<p><span>Date</span> : {start.getDate()} / {start.getMonth()} / {start.getFullYear()}</p>)
                            :
                            (<><p><span>From</span> : {start.getDate()} / {start.getMonth()} / {start.getFullYear()}</p>
                                <p><span>To</span> : {end.getDate()} / {end.getMonth()} / {end.getFullYear()}</p></>)}
                        <AccessTimeIcon className='mIcon' />
                        <p><span>Time</span> : {start.getHours() >= 12 ? start.getHours() % 12 : start.getHours()} {start.getHours() >= 12 ? "PM" : "AM"} - {end.getHours() >= 12 ? end.getHours() % 12 : end.getHours} {end.getHours() >= 12 ? "PM" : "AM"}</p>
                        <LocationOnIcon className='mIcon' />
                        <p><span>Venue</span> : {event.venue}</p>

                        {event.meetLink && <button className="mButton"><a style={{ textDecoration: "none", color: "white" }} href={event.meetLink}>
                            Event Link
                        </a>
                        </button>}
                        {event.registerLink && <button className="mButton">
                            <a href={event.registerLink} style={{ textDecoration: "none", color: "white" }}>Register for Event</a>
                        </button>}
                        <p style={{ marginTop: "20px" }}><span>Organized by</span> : {event.teamName}</p>
                        <p><span>Contact Details</span> : {event.contact}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventModal