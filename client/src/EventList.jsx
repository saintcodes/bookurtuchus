import { useState, useEffect } from 'react'
import './css/eventlist.css'

const EventList = ({  reservation, setReservations  }) => {

    const [classrooms, setClassrooms] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [searchInput, setSearchInput] = useState("")
    // const [reservation, setReservations] = useState([])
    const [modalOpen, setModalOpen] = useState(false)

    const seedData = [
        {
            "name": "Turing",
            "events": [
                {
                    "name": "React",
                    "start_time": "10AM",
                    "seats": "30"
                },
                {
                    "name": "Rails",
                    "start_time": "1PM",
                    "seats": "30"
                },
                {
                    "name": "DS&A",
                    "start_time": "5PM",
                    "seats": "30"
                }
            ]

        },
        {
            "name": "Kay",
            "events": [
                {
                    "name": "React",
                    "start_time": "10AM",
                    "seats": "30"
                },
                {
                    "name": "Rails",
                    "start_time": "1PM",
                    "seats": "30"
                },
                {
                    "name": "DS&A",
                    "start_time": "5PM",
                    "seats": "30"
                }
            ]

        },
        {
            "name": "Collins",
            "events": [
                {
                    "name": "React",
                    "start_time": "10AM",
                    "seats": "30"
                },
                {
                    "name": "Rails",
                    "start_time": "1PM",
                    "seats": "30"
                },
                {
                    "name": "DS&A",
                    "start_time": "5PM",
                    "seats": "30"
                }
            ]

        }
    ]

    const handleChange = (e) => setSearchInput(e.target.value);

    const reserve = (reserve) => {
        if (reservation.includes(reserve)) return
        setReservations([...reservation, reserve])
        console.log(reservation)
        setModalOpen(true)
    }
    useEffect(() => {
        // const request = async () => {
        //     let req = await fetch("http://localhost:5000/classrooms")
        //     let res = await req.json()
        //     if (req.ok) {
        //         setClassrooms(classrooms => res)
        //     }
        // }
        setIsLoading(true)
        // request()
        setClassrooms(seedData)
        setIsLoading(false)
    },[])
    console.log(modalOpen)

    const modal = document.getElementById("exampleModal")

    return (
        <div className="eventList">
            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}

{/* <!-- Modal --> */}
        {modalOpen ? <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                TEST BODY
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div> : null
        }
            <input
                className='searchbar'
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />
            {isLoading ? "Loading..." : classrooms.filter(room => room.name.includes(searchInput)).map(classroom => {
                return (
                    <div className="table">
                        <table>
                            <thead>
                                <tr>
                                    <th>{classroom.name}:</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {classroom.events.map(event => (
                                    <tr key={event.name+event.start_time}
                                        data-bs-toggle="modal" 
                                        data-bs-target="#exampleModal"
                                    >
                                        <td>{event.name}</td>
                                        <td onClick={() => {reserve(event)}}>{event.start_time}</td>
                                        <td>{event.seats}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}
export default EventList