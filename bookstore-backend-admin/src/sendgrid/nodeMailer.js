import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "nguyennguyenthuan231@gmail.com", // generated ethereal user
        pass: "axvw rtpz ixqk dxty", // generated ethereal password
    },
});

export default transporter;