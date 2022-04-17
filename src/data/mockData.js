const users = [
    {
        id: '0',
        name: 'Peddan',
        email: 'peddan@me.com',
    },
    {
        id: '1',
        name: 'Lurven',
        email: 'fabian.ovik.karlsson@gmail.com',
    },
]

const events = [
    {
        id: '0',
        name: 'Underwater basket weaving',
        visitorLimit: 42,
        location: 'Kreml',
        startTime: '13:00',
        endTime: '15:00',
    },
    {
        id: '1',
        name: 'Open air basket weaving',
        visitorLimit: 42,
        location: 'Jerrys stuga',
        startTime: '15:30',
        endTime: '17:00',
    },
    {
        id: '2',
        name: 'Crocheting',
        visitorLimit: 42,
        location: 'Globen',
        startTime: '12:23',
        endTime: '12:26',
    },
    {
        id: '3',
        name: 'Baking',
        visitorLimit: 42,
        location: 'Månen',
        startTime: '15:51',
        endTime: '16:34',
    },
]

const permissions = [
    {
        user: '0',
        event: '0',
    },
    {
        user: '0',
        event: '1',
    },
    {
        user: '0',
        event: '3',
    },
    {
        user: '1',
        event: '0',
    },
    {
        user: '1',
        event: '2',
    },
]

export {users, events, permissions};