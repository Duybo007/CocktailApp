import * as yup from "yup"

export const reservSchema = yup.object().shape({
    people: yup.number().positive().integer().required("Required"),
    date: yup.date().required("Required"),
    time: yup.string().required("Required"),
    name: yup.string().min(3, "Name must be at least 3 characters long").required("Pleaase enter your name"),
    email: yup.string().email("Please enter a valid email").required("Please enter a valid email")
})