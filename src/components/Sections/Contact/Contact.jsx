// src\components\Sections\Contact\Contact.jsx
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import useTheme from "../../../customHooks/ThemeHook/useTheme"
import { Button } from "../../Button/Button"
import InfoItems from "./InfoItems"
import { Inputs } from "./Inputs"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css'

const Contact = () => {
    const [isDark] = useTheme()
    const form = useRef();
    const [load, setLoad] = useState(false)

    const notify = () => toast.success("Send Email Successfully !");
    const notifyError = () => toast.error("Send Email Faild !");

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoad(true)

        await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then(
                (result) => {
                    console.log('SUCCESS!' + result.text);
                    notify()
                    console.log(load)
                },
                (error) => {
                    console.log(load)
                    console.log('FAILED...', error.text);
                    notifyError()
                },
            );

        e.target.reset()
        setLoad(false)
    };

    return (
        <section id='contact' className={`  !py-11 md:!px-20 transition-all duration-300 ease-in  ${isDark == 'true' ? 'bg-SubHeadBlack text-white' : 'bg-white text-SubHeadBlack'}`}>
            <div className="">
                <p className="text-primary text-xl font-medium">Contact</p>
                <p className="text-5xl font-semibold">Let’s Discuss Your <span className="text-primary">Project</span></p>
            </div>
            <div className="content flex items-center justify-between !mt-7">
                <div className="left">
                    <InfoItems />
                </div>
                <div className="right ">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className=" flex gap-3">
                            <Inputs name={'user_name'} type={'text'} holder={'Full name'} />
                            <Inputs name={'user_email'} type={'email'} holder={'Your email'} />
                        </div>
                        <Inputs name={'user_phone'} type={'number'} holder={'Phone number'} />

                        <textarea name="message" placeholder="Message" required rows={5} className=" !mb-4 w-full resize-none border border-secondaryInput !p-2 rounded-lg"></textarea>
                        <Button isDisabled={load ? true : false} name={load ? 'Sending...' : 'Send Message'} />
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact