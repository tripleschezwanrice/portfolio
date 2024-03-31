"use server"

import { redirect } from "next/navigation";

redirect

export async function whatsapp(formData: FormData){
    const rawFormData = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        msg: formData.get('message'),
        email : formData.get('email')
      };
      // Test it out:
      console.log(rawFormData);

      const url = "https://wa.me/+918822910379?text="+"Hello, i'm *"+rawFormData.name+"*, My email is *"+rawFormData.email+"*, you can call me at *" + rawFormData.phone + "* and my message to you is: *" + rawFormData.msg + "*"
      
      redirect(url)

}