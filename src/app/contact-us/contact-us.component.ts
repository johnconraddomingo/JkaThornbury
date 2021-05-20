import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule } from '@angular/forms'; 
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

   formdata!: FormGroup; 

  constructor(private formBuilder: FormBuilder) { 
     
  }

  ngOnInit(): void {
    this.formdata = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      message: [null, Validators.required]
    });
  }

  onSubmit (e:Event){ 

    e.preventDefault();
    emailjs.sendForm('service_gygh42z', 'template_870crpm', e.target as HTMLFormElement, 'user_ZK9JaNOM57WgGNdmwPEMp')
      .then((result: EmailJSResponseStatus) => { 

        alert('Thank you. Your message has been sent and we will get in touch with you soon.');
        this.formdata.reset();

      }, (error) => {
        console.log(error.text);
      });
 
  }

}

// https://www.emailjs.com/docs/examples/angular/