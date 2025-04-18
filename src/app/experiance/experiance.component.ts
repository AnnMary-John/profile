import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-experience',
  imports: [CommonModule, RouterModule],
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.css']
})
export class ExperienceComponent {
  jobs = [
    {
      icon: 'assets/company1.png',
      title: 'Software Engineer',
      company: 'Expligence Technologies',
      duration: 'Jul 2024 - Present',
      link: 'https://www.linkedin.com/company/explicate-inc/about/',
      description: 'As a Software Developer, I built scalable solutions across device management and healthcare platforms. I implemented a device disown feature using Apple MDM protocols and integrated ADO.NET, Web API, and SpecFlow to enhance system functionality. I ensured reliability through NUnit testing and Postman-based API automation. For a health companion app, I developed a Flutter frontend with a Next.js backend, secured with JWT and OAuth 2.0. I integrated Firebase for real-time operations, enabled in-app purchases, and maintained quality through comprehensive testing.'
    },
    {
      icon: 'assets/company2.jpeg',
      title: 'Full-Stack Developer',
      company: 'Framsikt AS',
      duration: 'May 2022 - Jun 2024',
      link: 'https://www.framsikt.no/',
      description: 'As a key contributor to a Municipality Management System for Norway, I collaborated with the UI/UX team to revamp the application interface using Angular and led the integration of features to automate report preparation and position management. I designed APIs and modules for data import and validation, improving system efficiency. As a Squad Lead, I streamlined sprint planning, development, and testing processes. I also ensured code quality through unit and integration testing with NUnit and validated APIs using Postman.'
    },
    {
      icon: 'assets/company3.jpeg',
      title: 'Systems Engineer',
      company: 'Tata Consultancy Services',
      duration: 'Aug 2021 - Apr 2022',
      link: 'https://www.tcs.com/',
      description: 'Independently resolved single- and cross-technology incidents, proactively identifying potential escalations and managing basic customer escalations. Reviewed, implemented, and verified moderately complex solutions to meet customer needs, ensuring timely and effective issue resolution across applications and platforms.'
    }
  ];
}
