"use server"
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail({email,message}:{email:string,message:string}){
    try{
        const mail = await resend.emails.send({
            from: 'RESEND <onboarding@resend.dev>',
            to: ['mohithingorani2003@gmail.com'],
            subject: 'Message from Contact Form',
            html: `<p>Email : ${email}</p> <p>Message : ${message}</p>`,
        });
        if(mail.data?.id){
            return true;
        }
        else{
            console.error('Resend error:', mail);
            return false;
        }
    }
    catch(error){
        console.error('Error sending email:', error);
        return false;
    }
}