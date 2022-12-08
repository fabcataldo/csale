// hay tipos de tags:party, middle-week, evening-snack, after-office, special-dinner, 
// special-lunch estos tags es para ver a qué card pertenecen, de la pantalla de inicio, 
// de “salidas para vos”

import { Ticket } from "src/app/models/ticket";

export const places = [
    {
        _id: 0,
        tickets: [],
        name: 'Johnny B. Good',
        address: 'Av. Hipólito Yrigoyen 320',
        number_of_people_enabled: 320,
        lat: -64.187216,
        lng: -31.423941,
        social_media_urls: ['https://www.instagram.com/jbgcordoba/?hl=es'],
        available_payment_methods: [1, 2],
        customer_service_schedules: [
            {day: 0, hours: ['7:30', '1:00']},
            {day: 1, hours: ['7:30', '1:00']},
            {day: 2, hours: ['7:30', '1:00']},
            {day: 3, hours: ['7:30', '1:00']},
            {day: 4, hours: ['7:30', '1:00']},
            {day: 5, hours: ['7:30', '1:00']},
            {day: 6, hours: ['7:30', '1:00']},
            {day: 7, hours: ['7:30', '1:00']},
        ],
        images: [],
        tags: ["special-lunch", "special-dinner"]
    },
    {
        _id: 1,
        tickets: [],
        name: 'Amerian Restaurant',
        address: 'Av. Hipólito Yrigoyen 1-29, X5000JHA Córdoba',
        number_of_people_enabled: 320,
        lat: -64.187216,
        lng: -31.423941,
        social_media_urls: [],
        available_payment_methods: [1, 2],
        customer_service_schedules: [
            {day: 0, hours: ['7:30', '1:00']},
            {day: 1, hours: ['7:30', '1:00']},
            {day: 2, hours: ['7:30', '1:00']},
            {day: 3, hours: ['7:30', '1:00']},
            {day: 4, hours: ['7:30', '1:00']},
            {day: 5, hours: ['7:30', '1:00']},
            {day: 6, hours: ['7:30', '1:00']},
            {day: 7, hours: ['7:30', '1:00']},
        ],
        images: [],
        tags: ["special-lunch", "special-dinner"]
    },
    {
        _id: 2,
        tickets: [],
        name: 'La Barra Boliche',
        address: 'Lima 150, X5000 ERD, Córdoba',
        number_of_people_enabled: 300,
        lat: -64.187216,
        lng: -31.423941,
        social_media_urls: [],
        available_payment_methods: [1, 2],
        customer_service_schedules: [
            {day: 4, hours: ['7:30', '6:00']},
            {day: 5, hours: ['22:30', '6:00']},
            {day: 6, hours: ['22:30', '6:00']},
        ],
        images: [],
        tags: ["party"]
    },

]