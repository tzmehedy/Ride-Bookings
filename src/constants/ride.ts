export const RideStatus = {
    Requested : "Requested",
    Accepted :"Accepted",
    Picked_Up :"Picked_Up",
    In_Transit : "In_Transit",
    Completed : "Completed",
    Canceled : "Canceled"
}

interface IItems {
    id: number,
    title: string
}

export const RideTimelineItems: IItems[] = [
    {
        id: 1,
        title: RideStatus.Requested,

    },
    {
        id: 2,
        title: RideStatus.Accepted,

    },
    {
        id: 3,
        title: RideStatus.Picked_Up,
    },
    {
        id: 4,
        title: RideStatus.In_Transit,
    },
    {
        id: 5,
        title: RideStatus.Completed,
    },
    {
        id: 6,
        title: RideStatus.Canceled,
    },

]