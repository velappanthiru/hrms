import React from 'react';
import appImage from '../../images/auth-screens.png'
import { Input } from "@nextui-org/react";
import { MailIcon } from '../../components/baseComponent/MailIcon';


const ForgetPassword = () => {
  return (
    <section className='auth-section'>
      <div className="auth-section__wrapper lg:flex">
        <div className="left-side__wrapper min-h-dvh py-4 px-6 hidden lg:flex flex-col items-center justify-center lg:w-2/4 bg-[#6B45BC]">
          <div className="content-wrapper flex flex-col gap-6">
            <h1 className='m-0 text-white font-bold text-4xl text-center uppercase'>Hrms</h1>
            <div className="dashboard-image">
              <img src={appImage} alt="appImage" className='max-w-[600px] w-full m-auto'/>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className='m-0 text-center text-xl font-semibold text-white'>Fast, Efficient and Productive</h6>
              <p className='m-0 text-neutral-300 text-sm max-w-screen-sm text-center'>
                In this kind of post, the blogger introduces a person they’ve interviewed
                and provides some background information about the interviewee and their
                work following this is a transcript of the interview.
              </p>
            </div>
          </div>
        </div>
        <div className="right-side__wrapper min-h-dvh py-4 px-6 flex flex-col justify-center lg:w-2/4">
          <div className="form-content__wrapper md:px-12 max-w-[600px] w-full mx-auto">
            <div className="auth-form__title">
              <h3 className='m-0 mb-4 text-3xl font-bold text-black dark:text-white'>Forgot Password?</h3>
              <p className='m-0 text-sm text-black dark:text-white'>Enter your email and we'll send you instructions to reset your password</p>
            </div>
            <form action="" method="post">
              <div className="flex flex-col gap-6 mt-6">
                <Input
                  autoFocus
                  startContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  labelPlacement='outside'
                />

                <button type="submit" class="py-3 px-3 bg-[#6B45BC] hover:bg-[#6b45bcd4] border border-1 border-[#6B45BC] text-white text-xs font-semibold rounded-md shadow focus:outline-none">
                  Send Resend Link
                </button>
                <button type="submit" class="py-3 px-3 bg-transparent hover:bg-transparent border border-1 border-[#6B45BC] dark:border-[#fff] text-themeblue dark:text-white text-xs font-semibold rounded-md shadow focus:outline-none">
                  Send Resend Link
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForgetPassword;
